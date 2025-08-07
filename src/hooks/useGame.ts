import { useState, useEffect, useCallback } from 'react';

export interface GameObject {
  id: string;
  x: number;
  y: number;
  type: 'normal' | 'poisoned';
  emoji: string;
}

export interface Player {
  x: number;
  y: number;
}

export const useGame = () => {
  const [player, setPlayer] = useState<Player>({ x: 400, y: 300 });
  const [objects, setObjects] = useState<GameObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);

  const generateObject = useCallback(() => {
    const isPoisoned = Math.random() < 0.15; // 15% chance of poisoned candy
    const newObject: GameObject = {
      id: Math.random().toString(36).substr(2, 9),
      x: Math.random() * (window.innerWidth - 100),
      y: Math.random() * (window.innerHeight - 200) + 100,
      type: isPoisoned ? 'poisoned' : 'normal',
      emoji: isPoisoned ? '🍬' : ['🍭', '🧁', '🍰', '🎂', '🍪'][Math.floor(Math.random() * 5)]
    };
    return newObject;
  }, []);

  const movePlayer = useCallback((direction: string) => {
    if (gameOver || !gameStarted) return;
    
    setPlayer(prev => {
      const speed = window.innerWidth < 768 ? 15 : 20; // Slower on mobile for better control
      let newX = prev.x;
      let newY = prev.y;
      
      switch (direction) {
        case 'ArrowUp':
          newY = Math.max(0, prev.y - speed);
          break;
        case 'ArrowDown':
          newY = Math.min(window.innerHeight - 150, prev.y + speed); // Account for mobile controls
          break;
        case 'ArrowLeft':
          newX = Math.max(0, prev.x - speed);
          break;
        case 'ArrowRight':
          newX = Math.min(window.innerWidth - 64, prev.x + speed);
          break;
      }
      
      return { x: newX, y: newY };
    });
  }, [gameOver, gameStarted]);

  const checkCollision = useCallback(() => {
    objects.forEach(obj => {
      const distance = Math.sqrt(
        Math.pow(player.x - obj.x, 2) + Math.pow(player.y - obj.y, 2)
      );
      
      const collisionDistance = window.innerWidth < 768 ? 35 : 40; // Slightly easier on mobile
      if (distance < collisionDistance) {
        if (obj.type === 'poisoned') {
          setGameOver(true);
          alert('Game Over! Era o doce de Camila! Nunca mais toque nele! 💀');
        } else {
          setScore(prev => prev + 10);
        }
        
        setObjects(prev => prev.filter(o => o.id !== obj.id));
      }
    });
  }, [player, objects]);

  const startGame = () => {
    setGameStarted(true);
    setGameOver(false);
    setScore(0);
    setPlayer({ 
      x: Math.min(400, window.innerWidth / 2 - 32), 
      y: Math.min(300, window.innerHeight / 2 - 32) 
    });
    setObjects([]);
  };

  const resetGame = () => {
    setGameStarted(false);
    setGameOver(false);
    setScore(0);
    setPlayer({ 
      x: Math.min(400, window.innerWidth / 2 - 32), 
      y: Math.min(300, window.innerHeight / 2 - 32) 
    });
    setObjects([]);
  };

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
        e.preventDefault();
        movePlayer(e.key);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [movePlayer]);

  useEffect(() => {
    if (!gameStarted || gameOver) return;

    const interval = setInterval(() => {
      setObjects(prev => {
        if (prev.length < 8) {
          return [...prev, generateObject()];
        }
        return prev;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [gameStarted, gameOver, generateObject]);

  useEffect(() => {
    checkCollision();
  }, [checkCollision]);

  return {
    player,
    objects,
    score,
    gameOver,
    gameStarted,
    startGame,
    resetGame
  };
};