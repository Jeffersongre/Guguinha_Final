import React from 'react';
import { motion } from 'framer-motion';
import { useGame } from '../hooks/useGame';
import { RotateCcw, ArrowUp, ArrowDown, ArrowLeft, ArrowRight } from 'lucide-react';

interface GameProps {
  onBackToStory: () => void;
}

export const Game: React.FC<GameProps> = ({ onBackToStory }) => {
  const { player, objects, score, gameOver, gameStarted, startGame, resetGame } = useGame();

  if (!gameStarted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-600 flex items-center justify-center p-4">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white rounded-3xl p-8 text-center shadow-2xl max-w-md w-full"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">🎮 Doces do Guguinha</h2>
          <p className="text-gray-600 mb-6">
            Ajude o Guguinha a coletar doces! Use as setas do teclado para se mover.
            <br />
            <strong className="text-red-500">Cuidado com o doce de Camila! 🍬</strong>
          </p>
          
          <div className="flex gap-2 justify-center mb-6">
            <div className="bg-gray-100 p-2 rounded-lg">
              <ArrowUp size={20} />
            </div>
            <div className="bg-gray-100 p-2 rounded-lg">
              <ArrowLeft size={20} />
            </div>
            <div className="bg-gray-100 p-2 rounded-lg">
              <ArrowDown size={20} />
            </div>
            <div className="bg-gray-100 p-2 rounded-lg">
              <ArrowRight size={20} />
            </div>
          </div>
          
          <div className="flex gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={startGame}
              className="px-6 py-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors font-semibold"
            >
              Começar Jogo
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onBackToStory}
              className="px-6 py-3 bg-gray-500 text-white rounded-full hover:bg-gray-600 transition-colors"
            >
              Voltar à História
            </motion.button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-300 via-purple-400 to-indigo-500 relative overflow-hidden">
      {/* Score and controls */}
      <div className="absolute top-4 left-4 right-4 z-10 flex justify-between items-center">
        <div className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full">
          <span className="text-lg font-bold text-gray-800">Pontos: {score}</span>
        </div>
        
        <div className="flex gap-2">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={resetGame}
            className="bg-white/80 backdrop-blur-sm p-2 rounded-full hover:bg-white/90 transition-colors"
          >
            <RotateCcw size={20} />
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onBackToStory}
            className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full hover:bg-white/90 transition-colors"
          >
            Voltar
          </motion.button>
        </div>
      </div>

      {/* Game instructions for mobile */}
      <div className="absolute bottom-4 left-4 right-4 z-10 md:hidden">
        <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl text-center">
          <p className="text-sm text-gray-700 mb-2">Use os botões para mover:</p>
          <div className="grid grid-cols-3 gap-2 max-w-32 mx-auto">
            <div></div>
            <button
              onTouchStart={() => window.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowUp' }))}
              className="bg-pink-400 text-white p-2 rounded-lg"
            >
              ↑
            </button>
            <div></div>
            <button
              onTouchStart={() => window.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowLeft' }))}
              className="bg-pink-400 text-white p-2 rounded-lg"
            >
              ←
            </button>
            <button
              onTouchStart={() => window.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowDown' }))}
              className="bg-pink-400 text-white p-2 rounded-lg"
            >
              ↓
            </button>
            <button
              onTouchStart={() => window.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowRight' }))}
              className="bg-pink-400 text-white p-2 rounded-lg"
            >
              →
            </button>
          </div>
        </div>
      </div>

      {/* Game instructions for mobile */}
      <div className="absolute bottom-4 left-4 right-4 z-10 md:hidden">
        <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl text-center">
          <p className="text-sm text-gray-700 mb-2">Use os botões para mover:</p>
          <div className="grid grid-cols-3 gap-2 max-w-32 mx-auto">
            <div></div>
            <button
              onTouchStart={() => window.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowUp' }))}
              className="bg-pink-400 text-white p-2 rounded-lg"
            >
              ↑
            </button>
            <div></div>
            <button
              onTouchStart={() => window.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowLeft' }))}
              className="bg-pink-400 text-white p-2 rounded-lg"
            >
              ←
            </button>
            <button
              onTouchStart={() => window.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowDown' }))}
              className="bg-pink-400 text-white p-2 rounded-lg"
            >
              ↓
            </button>
            <button
              onTouchStart={() => window.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowRight' }))}
              className="bg-pink-400 text-white p-2 rounded-lg"
            >
              →
            </button>
          </div>
        </div>
      </div>

      {/* Player (Guguinha) */}
      <motion.div
        animate={{ x: player.x, y: player.y }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="absolute w-16 h-16 bg-white rounded-full flex items-center justify-center text-2xl shadow-lg z-20 border-4 border-pink-400"
        style={{ left: 0, top: 0 }}
      >
        👨🏿‍🦲
      </motion.div>

      {/* Game objects (sweets) */}
      {objects.map(obj => (
        <motion.div
          key={obj.id}
          initial={{ scale: 0, rotate: 0 }}
          animate={{ scale: 1, rotate: 360 }}
          transition={{ 
            scale: { type: "spring", stiffness: 200 },
            rotate: { duration: 2, repeat: Infinity, ease: "linear" }
          }}
          className={`absolute w-12 h-12 flex items-center justify-center text-2xl rounded-full ${
            obj.type === 'poisoned' 
              ? 'bg-red-500/20 border-2 border-red-500 shadow-red-500/50' 
              : 'bg-yellow-400/20 border-2 border-yellow-400 shadow-yellow-400/50'
          } shadow-lg`}
          style={{ left: obj.x, top: obj.y }}
        >
          {obj.emoji}
        </motion.div>
      ))}

      {/* Floating hearts for ambiance */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              opacity: 0.3, 
              y: "100vh", 
              x: Math.random() * window.innerWidth 
            }}
            animate={{ 
              opacity: [0.3, 0.7, 0.3], 
              y: "-100px",
              x: Math.random() * window.innerWidth
            }}
            transition={{
              duration: 8,
              delay: i * 2,
              repeat: Infinity,
              repeatDelay: 1
            }}
            className="text-3xl"
          >
            💕
          </motion.div>
        ))}
      </div>

      {gameOver && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 bg-black/50 flex items-center justify-center z-30"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="bg-white rounded-3xl p-8 text-center shadow-2xl max-w-md mx-4"
          >
            <h3 className="text-2xl font-bold text-red-600 mb-4">Game Over! 💀</h3>
            <p className="text-gray-700 mb-4">
              Era o doce de Camila! Nunca mais toque nele!
            </p>
            <p className="text-lg font-semibold mb-6">Pontuação Final: {score}</p>
            
            <div className="flex gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={startGame}
                className="px-6 py-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors"
              >
                Jogar Novamente
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onBackToStory}
                className="px-6 py-3 bg-gray-500 text-white rounded-full hover:bg-gray-600 transition-colors"
              >
                Voltar à História
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};