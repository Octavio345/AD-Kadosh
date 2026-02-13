import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cross, Flame, BookOpen, Home,
  Church, Calendar, Users, Music,
  MapPin, Star, ArrowRight,
  HeartHandshake, Mic2, Users2,
  Heart, Target, Clock, Navigation,
  MessageCircle,
  Instagram,
  Facebook,
  Youtube,
  Video,
  Globe
} from 'lucide-react';
import { Link } from 'react-scroll';

const About = () => {
  const values = [
    { icon: <Cross />, title: 'Santidade', desc: 'Vida separada e consagrada a Deus' },
    { icon: <Flame />, title: 'Pentecostes', desc: 'Batismo no Espírito Santo com evidência de línguas' },
    { icon: <BookOpen />, title: 'Sã Doutrina', desc: 'Ensino fiel das escrituras sagradas' },
    { icon: <HeartHandshake />, title: 'Comunhão', desc: 'Amor e unidade entre os irmãos' },
  ];

  const beliefs = [
    'Inspiração divina da Bíblia Sagrada',
    'Trindade: Pai, Filho e Espírito Santo',
    'Salvação pela fé em Jesus Cristo',
    'Batismo nas águas por imersão',
    'Batismo no Espírito Santo',
    'Cura divina e milagres',
    'Santa Ceia como memorial',
    'Volta premilenial de Cristo',
    'Ressurreição dos mortos',
    'Juízo final e vida eterna'
  ];

  const currentYear = new Date().getFullYear();
  const foundationYear = 2020;
  const yearsOfMinistry = currentYear - foundationYear;

  const stats = [
    { number: '2020', label: 'Ano de Fundação', icon: <Calendar />, description: '19 de Maio de 2020' },
    { number: `${yearsOfMinistry}+`, label: 'Anos de Ministério', icon: <Church />, description: 'Desde nossa fundação' },
    { number: '1+', label: 'Ministérios Ativos', icon: <Users />, description: 'Servindo a comunidade' },
    { number: '100+', label: 'Vidas Transformadas', icon: <Heart />, description: 'Pelo poder de Deus' },
  ];

  // Ministérios fundadores
  const foundingMinistries = [
    {
      id: 1,
      name: 'Mocidade Yeshua',
      description: 'Ministério de jovens que desde o primeiro culto lidera a adoração e evangelismo entre a juventude.',
      logo: '/assets/images/logo-mocidade-yeshua.png',
      icon: <Users2 className="w-6 h-6 text-secondary" />,
      color: 'from-blue-500 to-cyan-400',
      textColor: 'text-blue-600'
    },
    {
      id: 2,
      name: 'Vozes que Clamam',
      description: 'Círculo de oração que estabeleceu a base de intercessão e guerra espiritual da igreja.',
      logo: '/assets/images/logo-vozes-que-clamam.png',
      icon: <Music className="w-6 h-6 text-secondary" />,
      color: 'from-purple-500 to-pink-400',
      textColor: 'text-purple-600'
    }
  ];


  const liveStreamLinks = [
    {
      platform: 'Instagram',
      icon: <Instagram className="w-6 h-6" />,
      url: 'https://www.instagram.com/ad_ministerio_kadosh/',
      color: 'from-purple-600 via-pink-500 to-orange-400',
      description: 'Transmissões ao vivo de todos os cultos',
      liveText: 'AO VIVO'
    },
    {
      platform: 'Facebook',
      icon: <Facebook className="w-6 h-6" />,
      url: 'https://www.facebook.com/adzonasul.mirassol.1',
      color: 'from-blue-600 to-blue-800',
      description: 'Cultos transmitidos ao vivo',
      liveText: 'AO VIVO'
    },
    {
      platform: 'YouTube',
      icon: <Youtube className="w-6 h-6" />,
      url: 'https://www.youtube.com/@ozielism',
      color: 'from-red-600 to-red-700',
      description: 'Canal do Pastor Oziel com mensagens',
      liveText: 'AO VIVO'
    }
  ];

  // Função para abrir WhatsApp do Pastor
  const openPastorWhatsApp = () => {
    const pastorNumber = '5517996493144'; // Número do Pastor Oziel
    const message = `Olá, Pastor Oziel! Vi seu perfil no site da Assembleia de Deus Ministério Kadosh e gostaria de conversar com o senhor. 

• Tenho interesse em conhecer melhor a igreja
• Gostaria de orientação espiritual
• Quero saber mais sobre os cultos

Aguardo seu retorno. Que Deus abençoe!`;

    const url = `https://wa.me/${pastorNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  // Função para abrir WhatsApp geral
  const openWhatsApp = (messageType) => {
    const whatsappNumber = '5517996493144';
    let message = '';
    
    if (messageType === 'horarios') {
      message = `Olá! Vi no site da Assembleia de Deus Ministério Kadosh e gostaria de confirmar os horários de culto.`;
    } else if (messageType === 'lideranca') {
      message = `Olá! Vi no site da Assembleia de Deus Ministério Kadosh e gostaria de conhecer melhor a liderança da igreja. Poderia me informar?`;
    } else {
      message = `Olá! Vi no site da Assembleia de Deus Ministério Kadosh e gostaria de obter mais informações.`;
    }
    
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="about" className="py-12 md:py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          id="sobre-historia"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-semibold mb-4">
            Nossa História
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
            Assembleia de Deus <span className="text-secondary">Ministério Kadosh</span>
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 mb-4">
              Fundada em <strong className="text-secondary">19 de Maio de 2020</strong>, a Assembleia de Deus Ministério Kadosh 
              nasceu em um tempo desafiador, mas com a certeza do chamado divino.
            </p>
            <p className="text-lg text-gray-700">
              <strong className="text-secondary">"Kadosh"</strong> significa <strong className="text-secondary">"Santo ao Senhor"</strong> - este é nosso lema e compromisso. 
              Buscamos viver em santidade e ser instrumentos de renovação espiritual.
            </p>
          </div>
        </motion.div>

        {/* História em Timeline */}
        <div className="max-w-5xl mx-auto mb-12 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl md:rounded-3xl shadow-xl overflow-hidden border border-gray-100"
          >
            {/* Timeline Header */}
            <div className="bg-gradient-to-r from-primary to-secondary p-6 md:p-8 text-center">
              <div className="inline-block px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full">
                <h3 className="text-xl md:text-2xl font-bold text-white">
                  <Calendar className="inline w-5 h-5 md:w-6 md:h-6 mr-2" />
                  19 de Maio de 2020
                </h3>
              </div>
              <p className="text-white/90 mt-4 text-base md:text-lg">
                O início de uma jornada abençoada
              </p>
            </div>

            {/* História */}
            <div className="p-6 md:p-8">
              <div className="space-y-8">
                {/* Ponto 1: Fundação */}
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/4">
                    <div className="bg-primary/10 p-4 rounded-2xl text-center">
                      <Home className="w-10 h-10 md:w-12 md:h-12 text-secondary mx-auto mb-3" />
                      <h4 className="font-bold text-primary text-lg">FUNDAÇÃO</h4>
                      <p className="text-sm text-gray-600">19/05/2020</p>
                    </div>
                  </div>
                  <div className="md:w-3/4">
                    <h3 className="text-2xl font-bold text-primary mb-3">
                      Nosso Humilde Começo
                    </h3>
                    <p className="text-gray-700 mb-4">
                      No dia <strong className="text-secondary">19 de Maio de 2020</strong> foi fundada a 
                      Igreja Evangélica Assembleia de Deus Ministério Kadosh. O primeiro culto 
                      aconteceu no fundo de uma casa, sob a liderança do{' '}
                      <strong className="text-primary">Pastor Presidente Oziel Oliveira Silva</strong>.
                    </p>
                    <div className="bg-gray-50 p-4 rounded-xl border-l-4 border-secondary">
                      <p className="text-gray-700 italic">
                        "No primeiro culto, a mocidade Yeshua e o grupo do círculo de oração 
                        'Vozes que Clamam' entoaram cânticos ao Senhor, estabelecendo desde 
                        o início nosso compromisso com a adoração genuína."
                      </p>
                    </div>
                  </div>
                </div>

                {/* Ponto 2: Localização */}
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/4">
                    <div className="bg-secondary/10 p-4 rounded-2xl text-center">
                      <MapPin className="w-10 h-10 md:w-12 md:h-12 text-secondary mx-auto mb-3" />
                      <h4 className="font-bold text-primary text-lg">LOCALIZAÇÃO</h4>
                      <p className="text-sm text-gray-600">Desde 2020</p>
                    </div>
                  </div>
                  <div className="md:w-3/4">
                    <h3 className="text-2xl font-bold text-primary mb-3">
                      Local de Fundação e Atual Endereço
                    </h3>
                    <p className="text-gray-700 mb-4">
                      A Assembleia de Deus Ministério Kadosh foi fundada no dia <strong className="text-secondary">19 de Maio de 2020</strong> 
                      e desde então permanece no mesmo local:{' '}
                      <strong className="text-primary">Av. José Emídio de Faria, Nº 2198 - Moreira, Mirassol-SP</strong>.
                    </p>
                    <p className="text-gray-700">
                      Este endereço tem sido testemunha de milagres, conversões e vidas transformadas pelo poder de Deus. 
                      Aqui estabelecemos nossa base ministerial e continuamos crescendo na graça e no conhecimento de Cristo.
                    </p>
                  </div>
                </div>

                {/* Ponto 3: Ministérios Fundadores com Logos */}
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/4">
                    <div className="bg-primary/10 p-4 rounded-2xl text-center">
                      <Mic2 className="w-10 h-10 md:w-12 md:h-12 text-secondary mx-auto mb-3" />
                      <h4 className="font-bold text-primary text-lg">MINISTÉRIOS FUNDADORES</h4>
                      <p className="text-sm text-gray-600">Desde 2020</p>
                    </div>
                  </div>
                  <div className="md:w-3/4">
                    <h3 className="text-2xl font-bold text-primary mb-3">
                      Fundamentos Ministeriais
                    </h3>
                    <div className="space-y-6">
                      {foundingMinistries.map((ministry) => (
                        <motion.div
                          key={ministry.id}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          whileHover={{ y: -5 }}
                          className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow"
                        >
                          <div className="flex flex-col sm:flex-row">
                            {/* Logo Container */}
                            <div className="sm:w-1/3 p-4 flex items-center justify-center bg-gradient-to-br from-primary/5 to-secondary/5">
                              <div className="relative w-32 h-32 sm:w-40 sm:h-40 p-4">
                                <div className={`absolute inset-0 bg-gradient-to-br ${ministry.color} opacity-10 rounded-lg`} />
                                <img 
                                  src={ministry.logo}
                                  alt={`Logo ${ministry.name}`}
                                  className="relative w-full h-full object-contain p-2"
                                  onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = `https://via.placeholder.com/200x200?text=${encodeURIComponent(ministry.name)}`;
                                  }}
                                />
                              </div>
                            </div>
                            
                            {/* Informações do Ministério */}
                            <div className="sm:w-2/3 p-4 sm:p-6">
                              <div className="flex items-center gap-3 mb-3">
                                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${ministry.color} flex items-center justify-center`}>
                                  <div className="text-white">
                                    {ministry.icon}
                                  </div>
                                </div>
                                <h4 className={`text-xl font-bold ${ministry.textColor}`}>
                                  {ministry.name}
                                </h4>
                              </div>
                              <p className="text-gray-700 mb-4">
                                {ministry.description}
                              </p>
                              <div className="flex items-center text-sm text-gray-500">
                                <Calendar className="w-4 h-4 mr-2" />
                                <span>Ativo desde 19/05/2020</span>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* NOVA SEÇÃO: Cultos ao vivo nas redes sociais */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-20"
        >
          <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-secondary/5 rounded-2xl md:rounded-3xl p-6 md:p-8 border border-primary/20">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                  <Video className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-primary">
                  Cultos <span className="text-secondary">Ao Vivo</span>
                </h3>
              </div>
              <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                Não pode vir pessoalmente? <strong className="text-primary">Todos os nossos cultos são transmitidos ao vivo! </strong> 
                  Acompanhe nossas redes sociais e participe conosco virtualmente.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
              {liveStreamLinks.map((platform, index) => (
                <motion.a
                  key={platform.platform}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className={`bg-gradient-to-br ${platform.color} backdrop-blur-sm rounded-xl p-5 md:p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/20 relative overflow-hidden group`}
                >
                  {/* Badge ao vivo */}
                  <div className="absolute top-3 right-3">
                    <span className="bg-white/20 text-white text-xs px-2 py-1 rounded-full font-bold backdrop-blur-sm">
                      {platform.liveText}
                    </span>
                  </div>

                  {/* Ícone da plataforma */}
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <div className="text-white">
                      {platform.icon}
                    </div>
                  </div>

                  {/* Nome da plataforma */}
                  <h4 className="text-xl font-bold text-white mb-2">{platform.platform}</h4>
                  
                  {/* Descrição */}
                  <p className="text-white/90 text-sm mb-4">{platform.description}</p>

                  {/* Botão de acesso */}
                  <div className="mt-4">
                    <span className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-lg text-sm font-semibold backdrop-blur-sm group-hover:bg-white/30 transition-colors">
                      Acessar {platform.platform}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>

                  {/* Efeito de brilho ao passar mouse */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                </motion.a>
              ))}
            </div>

            {/* Nota importante */}
            <div className="mt-8 text-center">
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-3 rounded-xl border border-primary/20">
                <Globe className="w-5 h-5 text-primary" />
                <p className="text-sm text-gray-700">
                  <strong>Importante:</strong> No YouTube, acompanhe pelo canal pessoal do Pastor Oziel. 
                  As transmissões são feitas diretamente de nossa igreja!
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA de Visitação */}
        <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl md:rounded-3xl p-6 md:p-12 relative overflow-hidden mb-12">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              {[...Array(15)].map((_, i) => (
                <div
                  key={i}
                  className="absolute"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                >
                  <Cross className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
              ))}
            </div>
            
            <div className="relative z-10">
              <h3 className="text-2xl md:text-4xl font-bold text-white mb-4 md:mb-6">
                Venha nos Visitar!
              </h3>
              <p className="text-white/90 text-base md:text-lg mb-4 md:mb-6 max-w-2xl mx-auto">
                <strong>Endereço:</strong> Av. José Emídio de Faria, 2198 - Moreira, Mirassol-SP
              </p>
              <p className="text-white/90 text-base md:text-lg mb-8 md:mb-10 max-w-2xl mx-auto">
                Se você está em Mirassol ou região, venha conhecer nossa igreja. 
                Temos cultos poderosos onde a presença de Deus se manifesta, vidas são transformadas 
                e o fogo pentecostal continua ardendo!
              </p>
            </div>
            
          </div>

        {/* Localização Compacta e Quadrada */}
        <motion.div
          id="mapa-localizacao"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 max-w-2xl mx-auto"
        >
          <h3 className="text-3xl font-bold text-primary text-center mb-8">
            Nossa <span className="text-secondary">Localização</span>
          </h3>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
            {/* Mapa Quadrado */}
            <div className="relative aspect-square w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d437.71566131113804!2d-49.51161339088669!3d-20.8122582428154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bdafa905ab492f%3A0xd4d5f74695cf19b7!2sAssembl%C3%A9ia%20de%20Deus%20Minist%C3%A9rio%20Kadosh!5e0!3m2!1spt-BR!2sbr!4v1770236447484!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização"
                className="absolute inset-0"
              />
            </div>
            
            {/* Informações Mínimas */}
            <div className="p-4">
              <div className="flex flex-col items-center text-center gap-3">
                <div className="flex items-center gap-2 text-gray-700 mb-2">
                  <MapPin className="w-4 h-4 text-secondary" />
                  <span className="font-medium">Av. José Emídio de Faria, 2198 - Mirassol/SP</span>
                </div>
                
                <div className="flex gap-2">
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=Av.+José+Emídio+de+Faria,+2198+-+Moreira,+Mirassol+-+SP"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors flex items-center gap-2"
                  >
                    <MapPin className="w-3 h-3" />
                    Google Maps
                  </a>
                  <a
                    href="https://waze.com/ul?ll=-20.812258,-49.511613&navigate=yes"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors flex items-center gap-2"
                  >
                    <MapPin className="w-3 h-3" />
                    Waze
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white p-4 md:p-6 rounded-xl md:rounded-2xl shadow-lg text-center border border-gray-100 hover:shadow-xl transition-shadow"
            >
              <div className="text-secondary mb-3 flex justify-center">
                {stat.icon}
              </div>
              <div className="text-2xl md:text-3xl font-bold text-primary mb-1">{stat.number}</div>
              <div className="text-gray-800 font-medium mb-1 text-sm md:text-base">{stat.label}</div>
              <div className="text-gray-500 text-xs md:text-sm">{stat.description}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Missão e Valores */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-20">
          {/* Missão */}
          <motion.div
            id="missao-valores"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-secondary to-yellow-500 rounded-lg flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-primary">
                Nossa <span className="text-secondary">Missão</span>
              </h3>
            </div>
            
            <p className="text-gray-700 mb-6">
              A Assembleia de Deus Ministério Kadosh tem como missão <strong className="text-primary">propagar o evangelho 
              completo de Jesus Cristo</strong>, batizar os convertidos nas águas e orienta-lós a busca do <strong className="text-primary">batismo com Espírito Santo</strong>, ensinar a sã doutrina 
              apostólica e preparar o povo de Deus para a volta iminente de Cristo.
            </p>

            <div className="bg-primary/5 p-4 md:p-6 rounded-xl mb-6 border border-primary/10">
              <h4 className="font-bold text-primary mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                Cremos na:
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                {beliefs.slice(0, 6).map((belief, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                      index === 0 ? 'bg-green-100 text-green-600' :
                      index === 1 ? 'bg-blue-100 text-blue-600' :
                      index === 2 ? 'bg-red-100 text-red-600' :
                      index === 3 ? 'bg-purple-100 text-purple-600' :
                      index === 4 ? 'bg-orange-100 text-orange-600' :
                      'bg-pink-100 text-pink-600'
                    }`}>
                      {index === 0 ? '🌱' : 
                      index === 1 ? '💪' : 
                      index === 2 ? '🔴' : 
                      index === 3 ? '✨' : 
                      index === 4 ? '❤️' : 
                      '✝️'}
                    </div>
                    <span className="text-gray-700 text-sm leading-tight flex-1">{belief}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Valores */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-primary text-center mb-8">
              Nossos <span className="text-secondary">Pilares</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ 
                    y: -5,
                    boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
                  }}
                  className="bg-white p-4 md:p-6 rounded-xl md:rounded-2xl shadow border border-gray-100 text-center hover:border-secondary/30 transition-all group"
                >
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <div className="text-secondary text-xl md:text-2xl">
                      {value.icon}
                    </div>
                  </div>
                  <h4 className="text-lg md:text-xl font-bold text-primary mb-2">{value.title}</h4>
                  <p className="text-gray-600 text-sm md:text-base">{value.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Pastoral com Foto */}
        <motion.div
          id="pastoral"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-20"
        >
          <div className="bg-white rounded-2xl md:rounded-3xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="flex flex-col md:flex-row">
              {/* Foto do Pastor */}
              <div className="md:w-2/5 p-6 md:p-8 flex items-center justify-center bg-gradient-to-br from-primary/5 to-secondary/5">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white shadow-xl"
                >
                  <img 
                    src="/assets/images/pastor-oziel.png" 
                    alt="Pastor Presidente Oziel Oliveira Silva" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://via.placeholder.com/400x400/1a56db/ffffff?text=Pr.+Oziel";
                    }}
                  />
                </motion.div>
              </div>
              
              {/* Informações do Pastor */}
              <div className="md:w-3/5 p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-primary">
                    <span className="text-secondary">Pastor Presidente</span><br className="md:hidden" />
                    <span className="block mt-1">Pr. Oziel Oliveira Silva</span>
                  </h3>
                </div>
                
                <div className="space-y-4">
                  <p className="text-gray-700">
                    <strong className="text-primary">Fundador e Líder</strong> da Assembleia de Deus Ministério Kadosh desde sua fundação em 19 de Maio de 2020.
                  </p>
                  
                  <div className="bg-primary/5 p-4 rounded-xl border border-primary/10">
                    <p className="text-gray-700 italic mb-3">
                      "Desde 19 de Maio de 2020, temos testemunhado a fidelidade de Deus em cada etapa 
                      desta jornada. Do fundo de uma casa ao templo atual, vimos vidas transformadas, 
                      famílias restauradas e milagres acontecendo."
                    </p>
                    <p className="text-gray-700 italic">
                      Este é verdadeiramente um{' '}
                      <strong className="text-secondary">Tempo de Renovo</strong> que Deus está concedendo 
                      ao seu povo em Mirassol e região.
                    </p>
                  </div>
                  
                  <div className="pt-4">
                    <div className="flex flex-col sm:flex-row gap-3">
                      {/* Botão atualizado para abrir WhatsApp do Pastor */}
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={openPastorWhatsApp}
                        className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-full font-bold hover:shadow-xl transition-all text-sm md:text-base flex items-center justify-center gap-2 group"
                      >
                        <MessageCircle className="w-5 h-5" />
                        Fale com o Pastor
                        <motion.span
                          className="inline-block group-hover:translate-x-1 transition-transform"
                          animate={{ x: [0, 3, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          →
                        </motion.span>
                      </motion.button>
                      
                      {/* Botão alternativo para horários */}
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => openWhatsApp('horarios')}
                        className="border-2 border-primary text-primary px-6 py-3 rounded-full font-bold hover:bg-primary/5 transition-all text-sm md:text-base"
                      >
                        <Calendar className="inline w-4 h-4 mr-2" />
                        Horários
                      </motion.button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;