import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Play, ChevronDown, Users, Clock, MapPin, Cross, Flame, Church } from 'lucide-react';
import { Link } from 'react-scroll';

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = 'Assembleia de Deus - Ministério Kadosh';

  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typing);
      }
    }, 100);

    return () => clearInterval(typing);
  }, []);

  // Função para abrir WhatsApp
  const openWhatsApp = (messageType) => {
    const whatsappNumber = '5517996493144';
    let message = '';
    
    if (messageType === 'cultos') {
      message = `Olá! Vi no site da Assembleia de Deus Ministério Kadosh e gostaria de saber mais sobre os cultos pentecostais. Poderia me informar?`;
    } else {
      message = `Olá! Vi no site da Assembleia de Deus Ministério Kadosh e gostaria de obter mais informações. Poderia me ajudar?`;
    }
    
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Animated */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-purple-900 to-gray-900">
        <div className="absolute inset-0 opacity-20">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
        
        {/* Cross Pattern */}
        <div className="absolute inset-0 opacity-5">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: Math.random() * 20 + 10,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <Cross className="w-8 h-8 text-white" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            {/* Animated Text - MANTIDA A COR ORIGINAL (secondary) COM TAMANHO AUMENTADO */}
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl lg:text-5xl text-secondary font-bold mb-4 tracking-wide">
                <span className="typewriter-text font-sans">{text}</span>
                <span className="animate-pulse ml-1 text-secondary">|</span>
              </h2>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight">
              <span className="text-secondary relative block mb-4">
                Tempo de Renovo
                <motion.span
                  className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-3/4 h-1 bg-secondary"
                  initial={{ width: 0 }}
                  animate={{ width: '75%' }}
                  transition={{ delay: 1, duration: 1.5 }}
                />
              </span>
              <span className="text-white text-2xl md:text-3xl block mt-8">
                Santidade ao Senhor
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10">
              Uma igreja pentecostal comprometida com a palavra de Deus, 
              o mover do Espírito Santo e a salvação das almas. 
              Vivemos um tempo de renovo espiritual!
            </p>

            {/* CTA Buttons - Botão alterado para navegar para nossa história */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link to="sobre-historia" smooth={true} duration={800}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group bg-gradient-to-r from-secondary to-yellow-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-3"
                >
                  <Play className="w-5 h-5" />
                  Conheça Nossa Jornada
                  <motion.span
                    className="inline-block group-hover:translate-x-2 transition-transform"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </motion.button>
              </Link>
              
              <Link to="missao-valores" smooth={true} duration={800}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white/30 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-all backdrop-blur-sm"
                >
                  Nossa Doutrina
                </motion.button>
              </Link>
            </div>

            {/* Info Cards - TEXTOS CENTRALIZADOS NO MOBILE */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
            >
              {[
                { 
                  icon: <Flame />, 
                  title: 'Culto de Ensino', 
                  desc: 'Quinta-feira 19:30h',
                  highlight: true,
                  color: 'from-purple-800/90 to-indigo-900/90',
                  border: 'border-purple-500/60',
                  badge: 'bg-purple-600'
                },
                { 
                  icon: <Cross />, 
                  title: 'Culto da família', 
                  desc: 'Domingo 18:30h',
                  highlight: true,
                  color: 'from-amber-800/90 to-yellow-900/90',
                  border: 'border-secondary/70',
                  badge: 'bg-secondary'
                },
                { 
                  icon: <Church />, 
                  title: 'Santa Ceia', 
                  desc: '2º Domingo do mês',
                  highlight: true,
                  color: 'from-slate-800/90 to-gray-900/90',
                  border: 'border-gray-500/50',
                  badge: 'bg-gray-600'
                },
              ].map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.2 }}
                  whileHover={{ y: -10 }}
                  className={`bg-gradient-to-br ${info.color} backdrop-blur-lg p-6 rounded-2xl border ${info.border} hover:shadow-2xl hover:scale-[1.02] transition-all relative overflow-hidden group shadow-lg`}
                >
                  {/* Destaque para os principais cultos */}
                  {info.highlight && (
                    <div className="absolute top-3 right-3">
                      <span className={`text-xs ${info.badge} text-white px-3 py-1 rounded-full font-semibold shadow-lg`}>
                        Principal
                      </span>
                    </div>
                  )}
                  
                  {/* Conteúdo do card - centralizado no mobile, normal no desktop */}
                  <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <div className="text-secondary mb-4">{info.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-2">{info.title}</h3>
                    <p className="text-gray-100">{info.desc}</p>
                  </div>
                  
                  {/* Efeito de brilho ao passar mouse */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <Link to="sobre-historia" smooth={true} duration={800}>
          <ChevronDown className="text-white text-4xl cursor-pointer hover:text-secondary transition-colors" />
        </Link>
      </motion.div>

      {/* Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path 
            fill="#ffffff" 
            fillOpacity="1" 
            d="M0,160L48,170.7C96,181,192,203,288,202.7C384,203,480,181,576,176C672,171,768,181,864,197.3C960,213,1056,235,1152,218.7C1248,203,1344,149,1392,122.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;