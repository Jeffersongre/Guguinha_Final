import React from 'react';
import { motion } from 'framer-motion';
import { NarratorButton } from './NarratorButton';
import { Scene as SceneType } from '../data/storyData';

interface SceneProps {
  scene: SceneType;
  onNext: () => void;
  onPrevious: () => void;
  isFirst: boolean;
  isLast: boolean;
  onStartGame: () => void;
}

export const Scene: React.FC<SceneProps> = ({ 
  scene, 
  onNext, 
  onPrevious, 
  isFirst, 
  isLast, 
  onStartGame 
}) => {
  return (
    <motion.div
      key={scene.id}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="min-h-screen p-4 flex items-center justify-center"
      style={{ 
        background: `linear-gradient(135deg, ${scene.backgroundColor}22, ${scene.backgroundColor}66)`
      }}
    >
      <div className="max-w-4xl w-full bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden">
        <div className="relative h-64 md:h-80">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${scene.backgroundImage})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30" />
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              className="absolute top-4 right-4 text-6xl"
            >
              {scene.emotion}
            </motion.div>
          </div>
        </div>
        
        <div className="p-6 md:p-8">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 text-center"
          >
            Cena {scene.id}: {scene.title}
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-gray-700 leading-relaxed mb-6 text-center"
          >
            {scene.text}
          </motion.p>
          
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="flex gap-4">
              {!isFirst && (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={onPrevious}
                  className="px-6 py-3 bg-gray-500 text-white rounded-full hover:bg-gray-600 transition-colors"
                >
                  ← Anterior
                </motion.button>
              )}
              
              {!isLast ? (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={onNext}
                  className="px-6 py-3 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-colors"
                >
                  Próxima →
                </motion.button>
              ) : (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={onStartGame}
                  className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full hover:from-pink-600 hover:to-purple-700 transition-all shadow-lg text-lg font-semibold"
                >
                  🎮 Jogar!
                </motion.button>
              )}
            </div>
            
            <NarratorButton text={scene.narration} />
            <NarratorButton 
              audioFile={scene.audioFile} 
              fallbackText={scene.narration} 
            />
          </div>
        </div>
      </div>
      
      {/* Floating hearts animation */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              opacity: 0, 
              y: "100vh", 
              x: Math.random() * window.innerWidth 
            }}
            animate={{ 
              opacity: [0, 1, 0], 
              y: "-100px",
              x: Math.random() * window.innerWidth
            }}
            transition={{
              duration: 4,
              delay: i * 1.5,
              repeat: Infinity,
              repeatDelay: 2
            }}
            className="text-4xl"
          >
            💖
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};