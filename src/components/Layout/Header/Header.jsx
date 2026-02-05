import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, ChevronDown, Cross, 
  Instagram, Facebook, MessageCircle,
  MapPin, Phone, Youtube, Calendar,
  Users, Music, BookOpen, Home,
  Church, Clock, Image
} from 'lucide-react';
import { Link as RouterLink, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();
  const whatsappNumber = '5517996493144';

  // Verifica se estamos na página inicial (Home) ou em outra página
  const isHomePage = location.pathname === '/';

  // Função para diferentes tipos de mensagens do WhatsApp
  const openWhatsApp = (messageType = '') => {
    let message = '';
    
    if (messageType === 'informacoes') {
      message = `Olá! Vi no site da Assembleia de Deus Ministério Kadosh e gostaria de obter mais informações sobre a igreja. Poderia me ajudar?`;
    } else if (messageType === 'visitar') {
      message = `Olá! Vi no site da Assembleia de Deus Ministério Kadosh e gostaria de visitar a igreja. Poderia me informar mais detalhes?`;
    } else if (messageType === 'ministerio') {
      message = `Olá! Vi no site da Assembleia de Deus Ministério Kadosh e tenho interesse em conhecer mais sobre os ministérios.`;
    } else {
      message = `Olá! Vi no site da Assembleia de Deus Ministério Kadosh. Poderia me ajudar?`;
    }
    
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  // Função para navegar para seções específicas apenas na Home
  const navigateToSection = (sectionId) => {
    setIsMenuOpen(false);
    setActiveDropdown(null);

    if (isHomePage) {
      // Se estamos na Home, faz scroll para a seção
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const headerHeight = 85;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    } else {
      // Se não estamos na Home, navega para a Home com hash
      window.location.href = `/#${sectionId}`;
    }
  };

  // Função para voltar ao início
  const scrollToTop = () => {
    if (isHomePage) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      // Se não está na Home, vai para a Home
      window.location.href = '/';
    }
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  // Função para verificar se a logo existe
  const [logoError, setLogoError] = useState(false);

  const menuItems = [
    { 
      name: 'Início', 
      action: () => scrollToTop(),
      icon: <Home size={20} /> 
    },
    { 
      name: 'Sobre', 
      action: () => navigateToSection('sobre-historia'),
      icon: <Cross size={20} />,
      submenu: [
        { name: 'Nossa História', action: () => navigateToSection('sobre-historia'), icon: <BookOpen size={16} /> },
        { name: 'Missão e Valores', action: () => navigateToSection('missao-valores'), icon: <Cross size={16} /> },
        { name: 'Horários de Culto', action: () => navigateToSection('horarios-culto'), icon: <Clock size={16} /> },
        { name: 'Localização', action: () => navigateToSection('mapa-localizacao'), icon: <MapPin size={16} /> },
        { name: 'Nossa Liderança', action: () => navigateToSection('pastoral'), icon: <Users size={16} /> },
      ]
    },
    { 
      name: 'Ministérios', 
      action: () => navigateToSection('ministerios-fundadores'),
      icon: <Users size={20} />,
    },
    { 
      name: 'Galeria', 
      action: null,
      isExternal: true,
      href: '/galeria',
      icon: <Image size={20} /> 
    },
    { 
      name: 'Contato', 
      action: () => navigateToSection('fale-conosco'),
      icon: <MessageCircle size={20} /> 
    },
  ];

  const socialIcons = [
    { 
      icon: <Instagram size={20} />, 
      href: 'https://www.instagram.com/ad_ministerio_kadosh/',
      label: 'Instagram',
      color: 'bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400',
    },
    { 
      icon: <Facebook size={20} />, 
      href: 'https://www.facebook.com/adzonasul.mirassol.1',
      label: 'Facebook',
      color: 'bg-gradient-to-br from-blue-600 to-blue-800',
    },
    { 
      icon: <Youtube size={20} />, 
      href: 'https://www.youtube.com/@adkadoshmirassol7212',
      label: 'YouTube',
      color: 'bg-gradient-to-br from-red-600 to-red-700',
    },
    { 
      icon: <MessageCircle size={20} />, 
      onClick: () => openWhatsApp('informacoes'),
      label: 'WhatsApp',
      color: 'bg-gradient-to-br from-green-500 to-green-600',
    },
  ];

  const worshipTimes = [
    { day: 'Quinta-feira', time: '19:30h', type: 'Culto de Oração' },
    { day: 'Domingo', time: '18:30h', type: 'Culto Dominical' },
    { day: '2º Domingo', time: '18:30h', type: 'Santa Ceia' },
  ];

  return (
    <>
      {/* Header Fixo no Topo */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800 border-b border-gray-700/50 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex justify-between items-center">
            {/* Logo Section */}
            <div className="flex items-center gap-4">
              {/* Logo Container */}
              <div 
                onClick={scrollToTop}
                className="group cursor-pointer"
              >
                <div className="relative">
                  <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-secondary border-2 border-white/20 shadow-xl">
                    {logoError ? (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="flex flex-col items-center">
                          <Church className="w-8 h-8 text-white mb-1" />
                          <span className="text-white text-xs font-bold">KADOSH</span>
                        </div>
                      </div>
                    ) : (
                      <img 
                        src="/logo.png"  // Caminho absoluto
                        alt="Assembleia de Deus Ministério Kadosh" 
                        className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                        onError={() => setLogoError(true)}
                      />
                    )}
                  </div>
                </div>
              </div>
              
              {/* Church Name - Mobile Optimized */}
              <div className="hidden sm:block">
                <h1 className="text-lg md:text-xl font-serif font-bold text-white leading-tight">
                  Assembleia de Deus
                </h1>
                <div className="flex items-center gap-2">
                  <p className="text-secondary font-bold text-base md:text-lg tracking-wider">KADOSH</p>
                  <div className="h-3 w-[1px] bg-secondary/50"></div>
                  <p className="text-white/70 text-xs">Mirassol/SP</p>
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {menuItems.map((item) => (
                <div key={item.name} className="relative group">
                  {item.submenu ? (
                    <>
                      <button
                        onMouseEnter={() => setActiveDropdown(item.name)}
                        onMouseLeave={() => setActiveDropdown(null)}
                        onClick={item.action}
                        className="flex items-center gap-2 px-4 py-3 rounded-xl text-white/90 hover:text-white hover:bg-white/10 transition-all font-medium text-sm group/nav"
                      >
                        {item.icon}
                        <span>{item.name}</span>
                        <ChevronDown className="w-3 h-3 ml-1 group-hover/nav:rotate-180 transition-transform duration-300" />
                      </button>
                      
                      <AnimatePresence>
                        {activeDropdown === item.name && (
                          <motion.div
                            initial={{ opacity: 0, y: 15, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 15, scale: 0.95 }}
                            className="absolute left-0 mt-1 w-56 bg-gray-800/95 backdrop-blur-xl rounded-2xl shadow-2xl py-2 border border-gray-700/50 z-50 overflow-hidden"
                            onMouseEnter={() => setActiveDropdown(item.name)}
                            onMouseLeave={() => setActiveDropdown(null)}
                          >
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10"></div>
                            {item.submenu.map((subItem) => (
                              <button
                                key={subItem.name}
                                onClick={subItem.action}
                                className="w-full text-left relative block px-4 py-2.5 text-white/90 hover:text-white hover:bg-white/5 transition-all group/item border-b border-gray-700/30 last:border-0 cursor-pointer"
                              >
                                <div className="flex items-center gap-2">
                                  <span className="text-base">{subItem.icon}</span>
                                  <span className="font-medium text-sm">{subItem.name}</span>
                                </div>
                              </button>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : item.isExternal ? (
                    <RouterLink
                      to={item.href}
                      className="flex items-center gap-2 px-4 py-3 rounded-xl text-white/90 hover:text-white hover:bg-white/10 transition-all font-medium text-sm group/link cursor-pointer"
                    >
                      {item.icon}
                      <span>{item.name}</span>
                    </RouterLink>
                  ) : (
                    <button
                      onClick={item.action}
                      className="flex items-center gap-2 px-4 py-3 rounded-xl text-white/90 hover:text-white hover:bg-white/10 transition-all font-medium text-sm group/link cursor-pointer"
                    >
                      {item.icon}
                      <span>{item.name}</span>
                    </button>
                  )}
                </div>
              ))}
              
              {/* Social Icons Desktop */}
              <div className="ml-3 flex items-center gap-2 border-l border-gray-700 pl-3">
                {socialIcons.slice(0, 2).map((social, index) => (
                  social.href ? (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-9 h-9 rounded-lg ${social.color} flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border border-white/20`}
                      aria-label={social.label}
                    >
                      {social.icon}
                    </a>
                  ) : (
                    <motion.button
                      key={index}
                      onClick={social.onClick}
                      className={`w-9 h-9 rounded-lg ${social.color} flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border border-white/20`}
                      aria-label={social.label}
                      whileTap={{ scale: 0.9 }}
                    >
                      {social.icon}
                    </motion.button>
                  )
                ))}
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center gap-4">
              {/* WhatsApp Button Mobile */}
              <motion.button
                onClick={() => openWhatsApp('informacoes')}
                whileTap={{ scale: 0.9 }}
                className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-lg bg-gradient-to-r from-green-500 to-green-600 text-white text-sm font-medium shadow-lg"
              >
                <MessageCircle size={16} />
                <span>Fale Conosco</span>
              </motion.button>

              {/* Menu Button */}
              <motion.button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                whileTap={{ scale: 0.95 }}
                className="relative w-12 h-12 rounded-xl bg-gradient-to-r from-white/10 to-white/5 flex items-center justify-center border border-white/10"
                aria-label="Menu"
              >
                <AnimatePresence mode="wait">
                  {isMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      className="text-white"
                    >
                      <X size={24} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      className="text-white"
                    >
                      <Menu size={24} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsMenuOpen(false)}
                className="lg:hidden fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
              />
              
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: "tween", duration: 0.3 }}
                className="lg:hidden fixed right-0 top-0 bottom-0 w-full max-w-md bg-gradient-to-b from-gray-900 to-gray-800 shadow-2xl z-50 overflow-y-auto"
              >
                {/* Menu Header */}
                <div className="sticky top-0 bg-gradient-to-b from-gray-900 to-gray-900/95 p-5 border-b border-gray-700/50 backdrop-blur-sm">
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary via-primary/90 to-secondary border-2 border-white/20 flex items-center justify-center">
                        {logoError ? (
                          <div className="flex flex-col items-center">
                            <Church className="w-6 h-6 text-white" />
                            <span className="text-white text-xs font-bold mt-1">K</span>
                          </div>
                        ) : (
                          <img 
                            src="/logo.png"  // Caminho absoluto
                            alt="Logo"
                            className="w-full h-full object-cover"
                            onError={() => setLogoError(true)}
                          />
                        )}
                      </div>
                      <div>
                        <h2 className="text-lg font-serif font-bold text-white">Assembleia de Deus</h2>
                        <p className="text-secondary font-bold">KADOSH</p>
                      </div>
                    </div>
                    <button
                      onClick={() => setIsMenuOpen(false)}
                      className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                    >
                      <X size={20} className="text-white" />
                    </button>
                  </div>
                  
                  {/* Contact Info */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5">
                      <MapPin size={18} className="text-secondary" />
                      <div>
                        <p className="text-sm font-medium text-white">Av. José Emídio de Faria, 2198</p>
                        <p className="text-xs text-white/60">Mirassol/SP</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5">
                      <Phone size={18} className="text-secondary" />
                      <div>
                        <p className="text-sm font-medium text-white">(17) 99649-3144</p>
                        <p className="text-xs text-white/60">Ligue ou mande mensagem</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Horários Destaque */}
                <div className="p-5 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border-b border-gray-700/50">
                  <h3 className="text-white font-bold mb-3 flex items-center gap-2">
                    <Clock size={18} className="text-secondary" />
                    Horários de Culto
                  </h3>
                  <div className="space-y-2">
                    {worshipTimes.map((item, index) => (
                      <div key={index} className="flex justify-between items-center p-3 rounded-lg bg-white/5">
                        <div>
                          <p className="text-white font-medium text-sm">{item.day}</p>
                          <p className="text-white/60 text-xs">{item.type}</p>
                        </div>
                        <span className="text-secondary font-bold text-sm">{item.time}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Menu Items */}
                <div className="p-5">
                  <h3 className="text-white/80 mb-4 text-sm font-semibold uppercase tracking-wider">Navegação</h3>
                  <div className="space-y-1">
                    {menuItems.map((item) => (
                      <div key={item.name}>
                        {item.submenu ? (
                          <div className="mb-1">
                            <button
                              onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                              className="w-full flex items-center justify-between p-4 rounded-xl hover:bg-white/5 transition-colors"
                            >
                              <div className="flex items-center gap-3">
                                <div className="text-secondary">{item.icon}</div>
                                <span className="font-medium text-white">{item.name}</span>
                              </div>
                              <ChevronDown className={`w-4 h-4 text-white/40 transition-transform duration-300 ${
                                activeDropdown === item.name ? 'rotate-180' : ''
                              }`} />
                            </button>
                            
                            <AnimatePresence>
                              {activeDropdown === item.name && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: 'auto' }}
                                  exit={{ opacity: 0, height: 0 }}
                                  className="overflow-hidden"
                                >
                                  <div className="pl-12 space-y-1 py-2">
                                    {item.submenu.map((subItem) => (
                                      <button
                                        key={subItem.name}
                                        onClick={subItem.action}
                                        className="w-full text-left flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
                                      >
                                        <span className="text-secondary text-lg">{subItem.icon}</span>
                                        <span className="text-white/90">{subItem.name}</span>
                                      </button>
                                    ))}
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        ) : item.isExternal ? (
                          <RouterLink
                            to={item.href}
                            onClick={() => setIsMenuOpen(false)}
                            className="w-full text-left flex items-center gap-3 p-4 rounded-xl hover:bg-white/5 transition-colors group cursor-pointer"
                          >
                            <div className="text-secondary group-hover:scale-110 transition-transform">
                              {item.icon}
                            </div>
                            <span className="font-medium text-white">{item.name}</span>
                          </RouterLink>
                        ) : (
                          <button
                            onClick={item.action}
                            className="w-full text-left flex items-center gap-3 p-4 rounded-xl hover:bg-white/5 transition-colors group cursor-pointer"
                          >
                            <div className="text-secondary group-hover:scale-110 transition-transform">
                              {item.icon}
                            </div>
                            <span className="font-medium text-white">{item.name}</span>
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Social Media & Actions */}
                <div className="p-5 border-t border-gray-700/50 space-y-5">
                  {/* Social Media */}
                  <div>
                    <h3 className="text-white/80 mb-3 text-sm font-semibold uppercase tracking-wider">Redes Sociais</h3>
                    <div className="flex justify-center gap-3">
                      {socialIcons.map((social, index) => (
                        social.href ? (
                          <a
                            key={index}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`w-14 h-14 rounded-xl ${social.color} flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border border-white/20`}
                            aria-label={social.label}
                          >
                            {social.icon}
                          </a>
                        ) : (
                          <motion.button
                            key={index}
                            onClick={() => {
                              social.onClick();
                              setIsMenuOpen(false);
                            }}
                            className={`w-14 h-14 rounded-xl ${social.color} flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border border-white/20`}
                            aria-label={social.label}
                            whileTap={{ scale: 0.9 }}
                          >
                            {social.icon}
                          </motion.button>
                        )
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-3">
                    <motion.button
                      onClick={() => {
                        navigateToSection('mapa-localizacao');
                        setIsMenuOpen(false);
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full bg-gradient-to-r from-secondary to-yellow-600 text-white py-4 rounded-xl font-bold shadow-lg text-base flex items-center justify-center gap-3 hover:shadow-2xl hover:shadow-secondary/30 transition-all"
                    >
                      <MapPin className="w-5 h-5" />
                      Visite-nos
                    </motion.button>
                    
                    <motion.button
                      onClick={() => {
                        openWhatsApp('informacoes');
                        setIsMenuOpen(false);
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 rounded-xl font-medium shadow-lg text-base flex items-center justify-center gap-3 hover:shadow-2xl hover:shadow-green-500/30 transition-all"
                    >
                      <MessageCircle className="w-5 h-5" />
                      Fale Conosco no WhatsApp
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </header>
      
      {/* Espaço fixo para compensar o header */}
      <div className="h-[80px] lg:h-[85px]"></div>
    </>
  );
};

export default Header;