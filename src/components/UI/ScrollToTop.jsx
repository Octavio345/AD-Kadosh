import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronUp } from 'lucide-react';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  // Volta ao topo sempre que a rota muda
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [pathname]);

  // Função para voltar ao topo manualmente
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {/* Botão flutuante para voltar ao topo */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full shadow-2xl flex items-center justify-center text-white hover:shadow-3xl transition-all duration-300"
        aria-label="Voltar ao topo"
      >
        <ChevronUp className="w-6 h-6" />
      </motion.button>
    </>
  );
};

export default ScrollToTop;