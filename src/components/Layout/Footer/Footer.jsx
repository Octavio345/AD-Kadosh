import React from 'react';
import { 
  MapPin, Phone, Clock,
  Instagram, Facebook, Youtube, MessageCircle,
  Heart, Church, Users
} from 'lucide-react';
import { Link } from 'react-scroll';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const whatsappNumber = '5517996493144';

  const openWhatsApp = (message = '') => {
    const defaultMessage = `Olá! Vi no site da Assembleia de Deus Ministério Kadosh e gostaria de mais informações.`;
    const text = message || defaultMessage;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const quickLinks = [
    { name: 'Início', to: 'home' },
    { name: 'Sobre Nós', to: 'about' },
    { name: 'Nossos Ministérios', to: 'ministries' },
    { name: 'Horários de Culto', to: 'about' },
    { name: 'Localização', to: 'contact' },
    { name: 'Fale Conosco', to: 'contact' },
  ];

  const ministriesLinks = [
    { name: 'Vozes que Clamam', to: 'ministries' },
    { name: 'Mocidade Yeshua', to: 'ministries' },
    { name: 'Ministério de Louvor', to: 'ministries' },
    { name: 'Ação Social', to: 'ministries' },
    { name: 'Escola Bíblica', to: 'ministries' },
    { name: 'Evangelismo', to: 'ministries' },
  ];

  const worshipTimes = [
    { day: 'Quinta-feira', time: '19:30h', type: 'Culto de Oração' },
    { day: 'Domingo', time: '18:30h', type: 'Culto Dominical' },
    { day: '2º Domingo', time: '18:30h', type: 'Santa Ceia' },
  ];

  return (
    // FOOTER COM 100% EM TODAS AS DIREÇÕES
    <footer className="w-screen min-w-full mx-0 px-0 bg-gradient-to-r from-primary via-primary/90 to-secondary text-white">
      {/* Container PRINCIPAL sem padding lateral */}
      <div className="w-full">
        {/* Conteúdo COM padding interno apenas */}
        <div className="w-full px-6 sm:px-8 lg:px-12 py-8">
          {/* Grid - centralizado internamente */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 md:gap-12 max-w-7xl mx-auto">
            
            {/* Coluna 1 - Logo */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden shadow-xl border-4 border-white">
                  <img 
                    src="/logo.png"  // Caminho absoluto
                    alt="Assembleia de Deus Ministério Kadosh" 
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ transform: 'scale(1.1)', transformOrigin: 'center' }}
                  />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold">Assembleia de Deus</h3>
                  <p className="font-semibold">Ministério Kadosh</p>
                </div>
              </div>
              
              <p className="text-sm opacity-90">
                Fundada em 19 de Maio de 2020, comunidade comprometida com santidade e ensino bíblico.
              </p>
              
              <div className="flex gap-3">
                {['instagram.com/adkadosh_mirassol', 'facebook.com/adkadoshmirassol', 'youtube.com/@adkadosh'].map((url, i) => (
                  <a key={i} href={`https://${url}`} target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20">
                    {i === 0 && <Instagram className="w-4 h-4" />}
                    {i === 1 && <Facebook className="w-4 h-4" />}
                    {i === 2 && <Youtube className="w-4 h-4" />}
                  </a>
                ))}
                <button onClick={() => openWhatsApp()} className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20">
                  <MessageCircle className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Coluna 2 - Links */}
            <div>
              <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Users className="w-5 h-5" />
                Links Rápidos
              </h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link to={link.to} smooth={true} duration={500} className="opacity-90 hover:opacity-100 text-sm cursor-pointer block py-1">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Coluna 3 - Ministérios */}
            <div>
              <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Church className="w-5 h-5" />
                Ministérios
              </h4>
              <ul className="space-y-2">
                {ministriesLinks.map((ministry) => (
                  <li key={ministry.name}>
                    <Link to={ministry.to} smooth={true} duration={500} className="opacity-90 hover:opacity-100 text-sm cursor-pointer block py-1">
                      {ministry.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Coluna 4 - Horários */}
            <div>
              <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5" />
                Horários
              </h4>
              <div className="space-y-3">
                {worshipTimes.map((time) => (
                  <div key={time.day} className="bg-white/10 p-3 rounded">
                    <div className="flex justify-between">
                      <span className="font-semibold">{time.day}</span>
                      <span className="font-bold">{time.time}</span>
                    </div>
                    <p className="text-xs opacity-90 mt-1">{time.type}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-4 space-y-2">
                <div className="flex items-center gap-2 opacity-90">
                  <MapPin className="w-4 h-4 flex-shrink-0" />
                  <span className="text-sm">Av. José Emídio de Faria, 2198 - Mirassol/SP</span>
                </div>
                <div className="flex items-center gap-2 opacity-90">
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <span className="text-sm">(17) 99649-3144</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom - centralizado internamente */}
          <div className="mt-8 pt-6 border-t border-white/20 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div>
                <p className="text-sm opacity-80">
                  © {currentYear} Assembleia de Deus Ministério Kadosh. Todos os direitos reservados.
                </p>
                <p className="text-xs opacity-60 mt-1">
                  "Kadosh" significa "Santo ao Senhor" - Tempo de Renovo
                </p>
              </div>
              
              <div className="flex items-center gap-6">
                <Link to="home" smooth={true} duration={500}>
                  <button className="text-sm opacity-80 hover:opacity-100">
                    Voltar ao Topo ↑
                  </button>
                </Link>
                <a 
                  href="/politica-privacidade" 
                  className="text-sm opacity-80 hover:opacity-100"
                >
                  Política de Privacidade
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Linha final para estender para baixo */}
        <div className="w-full h-1 bg-gradient-to-r from-secondary/50 to-primary/50"></div>
      </div>
    </footer>
  );
};

export default Footer;