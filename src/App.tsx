import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Scene } from './components/Scene';
import { Game } from './components/Game';
import { scenes } from './data/storyData';
import { Heart } from 'lucide-react';

type AppState = 'story' | 'game';

function App() {
  const [currentScene, setCurrentScene] = useState(0);
  const [appState, setAppState] = useState<AppState>('story');

  const nextScene = () => {
    if (currentScene < scenes.length - 1) {
      setCurrentScene(currentScene + 1);
    }
  };

  const previousScene = () => {
    if (currentScene > 0) {
      setCurrentScene(currentScene - 1);
    }
  };

  const startGame = () => {
    setAppState('game');
  };

  const backToStory = () => {
    setAppState('story');
  };

  if (appState === 'game') {
    return <Game onBackToStory={backToStory} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-indigo-100">
      {/* Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="bg-white/80 backdrop-blur-sm shadow-lg sticky top-0 z-50"
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-center gap-3">
            <Heart className="text-pink-500" size={32} />
            <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              A História do Guguinha
            </h1>
            <Heart className="text-pink-500" size={32} />
          </div>
          
          {/* Progress bar */}
          <div className="mt-4 bg-gray-200 rounded-full h-2 overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-pink-500 to-purple-600"
              initial={{ width: 0 }}
              animate={{ width: `${((currentScene + 1) / scenes.length) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
          
          <p className="text-center text-sm text-gray-600 mt-2">
            Cena {currentScene + 1} de {scenes.length}
          </p>
        </div>
      </motion.header>

      {/* Main content */}
      <main>
        <AnimatePresence mode="wait">
          <Scene
            key={currentScene}
            scene={scenes[currentScene]}
            onNext={nextScene}
            onPrevious={previousScene}
            isFirst={currentScene === 0}
            isLast={currentScene === scenes.length - 1}
            onStartGame={startGame}
          />
        </AnimatePresence>
      </main>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="bg-white/80 backdrop-blur-sm py-6 text-center"
      >
        <p className="text-gray-600">
          Uma história de amor, amizade e perdão 💕
        </p>
        <p className="text-sm text-gray-500 mt-2">
          Criado com muito carinho para o Guguinha
        </p>
      </motion.footer>
    </div>
  );
}

export default App;