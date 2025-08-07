import React, { useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { motion } from 'framer-motion';

interface NarratorButtonProps {
  audioFile: string;
  fallbackText: string;
  disabled?: boolean;
}

export const NarratorButton: React.FC<NarratorButtonProps> = ({ 
  audioFile, 
  fallbackText, 
  disabled = false 
}) => {
  const [isNarrating, setIsNarrating] = useState(false);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  const handleNarrate = () => {
    if (disabled) return;

    // Tentar reproduzir arquivo de áudio primeiro
    const audioElement = new Audio(audioFile);
    
    audioElement.onloadstart = () => {
      setIsNarrating(true);
      setAudio(audioElement);
    };
    
    audioElement.onended = () => {
      setIsNarrating(false);
      setAudio(null);
    };
    
    audioElement.onerror = () => {
      // Fallback para síntese de voz se o arquivo não existir
      console.log('Arquivo de áudio não encontrado, usando síntese de voz como fallback');
      if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(fallbackText);
        utterance.lang = 'pt-BR';
        utterance.rate = 0.9;
        utterance.pitch = 1.1;
        
        utterance.onend = () => {
          setIsNarrating(false);
        };
        
        utterance.onerror = () => {
          setIsNarrating(false);
        };
        
        speechSynthesis.speak(utterance);
      } else {
        setIsNarrating(false);
      }
    };
    
    audioElement.play().catch(() => {
      // Se falhar ao reproduzir, usar síntese de voz
      audioElement.onerror?.(new Event('error'));
    });
  };

  const stopNarration = () => {
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
      setAudio(null);
    }
    if ('speechSynthesis' in window) {
      speechSynthesis.cancel();
    }
    setIsNarrating(false);
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={isNarrating ? stopNarration : handleNarrate}
      disabled={disabled}
      className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
        disabled 
          ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
          : isNarrating 
            ? 'bg-red-500 text-white shadow-lg' 
            : 'bg-pink-500 text-white hover:bg-pink-600 shadow-md'
      }`}
    >
      {isNarrating ? <VolumeX size={16} /> : <Volume2 size={16} />}
      {isNarrating ? 'Parar' : 'Narrar'}
    </motion.button>
  );
};