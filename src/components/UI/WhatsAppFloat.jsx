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

            {/* Botão secundário para abrir opções (se quiser) */}
            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="mt-3 w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full shadow-xl flex items-center justify-center text-white hover:shadow-2xl transition-all duration-300"
            >
              <MessageSquare className="w-5 h-5" />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal de opções de mensagem */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
            />
            
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed bottom-24 left-6 z-50 w-80 bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200"
            >
              {/* Header do modal */}
              <div className="bg-gradient-to-r from-primary to-secondary p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                      <MessageCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg">Enviar mensagem</h3>
                      <p className="text-white/80 text-sm">Escolha uma opção:</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                  >
                    <X className="w-4 h-4 text-white" />
                  </button>
                </div>
              </div>

              {/* Lista de opções */}
              <div className="max-h-96 overflow-y-auto">
                <div className="p-4 space-y-3">
                  {messageOptions.map((option) => (
                    <motion.button
                      key={option.id}
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => openWhatsApp(option.message)}
                      className="w-full text-left p-3 rounded-xl border border-gray-100 hover:border-primary/30 hover:bg-primary/5 transition-all duration-200 group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-green-500/10 to-green-600/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                          <span className="text-2xl">{option.emoji}</span>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-800">{option.title}</h4>
                          <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                            {option.message.length > 60 ? option.message.substring(0, 60) + '...' : option.message}
                          </p>
                        </div>
                        <div className="text-green-600 opacity-0 group-hover:opacity-100 transition-opacity">
                          <MessageCircle className="w-5 h-5" />
                        </div>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="border-t border-gray-100 p-4 bg-gray-50">
                <p className="text-xs text-gray-600 text-center">
                  Responderemos o mais rápido possível! ⚡
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default WhatsAppFloat;