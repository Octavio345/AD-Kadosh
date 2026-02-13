// src/components/WhatsAppFloat.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, MessageSquare } from 'lucide-react';

const WhatsAppFloat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  // WhatsApp do Pastor Oziel
  const whatsappNumber = '5517996493144';

  // Opções de mensagens personalizadas
  const messageOptions = [
    {
      id: 1,
      title: 'Quero conhecer a igreja',
      message: `Olá! Vi o site da Assembleia de Deus Ministério Kadosh e gostaria de conhecer a igreja. Poderia me dar mais informações?`,
      emoji: '🙏'
    },
    {
      id: 2,
      title: 'Horários de culto',
      message: `Olá! Gostaria de confirmar os horários dos cultos na Assembleia de Deus Ministério Kadosh.`,
      emoji: '⏰'
    },
    {
      id: 3,
      title: 'Oração e aconselhamento',
      message: `Olá! Preciso de oração e/ou aconselhamento espiritual. Poderia me ajudar?`,
      emoji: '❤️'
    },
    {
      id: 4,
      title: 'Falar com o Pastor',
      message: `Olá, Pastor Oziel! Vi seu perfil no site e gostaria de conversar com o senhor sobre orientação espiritual.`,
      emoji: '👨‍🦳'
    },
    {
      id: 5,
      title: 'Participar dos ministérios',
      message: `Olá! Tenho interesse em participar dos ministérios da igreja (Mocidade Yeshua, Vozes que Clamam, etc). Como faço?`,
      emoji: '🎵'
    },
    {
      id: 6,
      title: 'Visitar pessoalmente',
      message: `Olá! Gostaria de visitar a igreja pessoalmente. Poderia me informar sobre os próximos cultos?`,
      emoji: '📍'
    }
  ];

  // Função para abrir WhatsApp com mensagem personalizada
  const openWhatsApp = (message) => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  };

  // Função para mensagem padrão
  const openDefaultWhatsApp = () => {
    const defaultMessage = `Olá! Vi o site da Assembleia de Deus Ministério Kadosh e gostaria de mais informações.`;
    openWhatsApp(defaultMessage);
  };

  // Esconde o botão quando o usuário rola para baixo
  useEffect(() => {
    let lastScrollY = window.pageYOffset;
    const handleScroll = () => {
      const currentScrollY = window.pageYOffset;
      
      // Mostra/oculta baseado na direção do scroll
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setIsVisible(true);
      }
      
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Botão flutuante principal */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-6 left-6 z-50"
          >
            {/* Botão principal do WhatsApp */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={openDefaultWhatsApp}
              className="relative group"
            >
              {/* Efeito de pulso */}
              <motion.div
                className="absolute inset-0 bg-green-500 rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              
              {/* Botão principal */}
              <div className="relative w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-full shadow-2xl flex items-center justify-center text-white hover:shadow-3xl transition-all duration-300">
                <MessageCircle className="w-7 h-7" />
                
                {/* Badge de notificação (opcional) */}
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">!</span>
                </div>
              </div>

              {/* Tooltip */}
              <div className="absolute left-16 bottom-1/2 transform translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                Fale conosco no WhatsApp
                <div className="absolute -left-1 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
              </div>
            </motion.button>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default WhatsAppFloat;