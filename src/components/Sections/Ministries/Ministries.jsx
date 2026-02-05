import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Users2, Mic2, Calendar, Clock, 
  HeartHandshake, MessageCircle, Sparkles,
  Target, Users, Cross, ChevronRight
} from 'lucide-react';

const Ministries = () => {
  const [activeTab, setActiveTab] = useState('fundadores');
  const whatsappNumber = '5517996493144';

  const generateWhatsAppMessage = (ministryTitle) => {
    const message = `Olá! Vi no site da Assembleia de Deus Ministério Kadosh e tenho interesse em participar do ministério ${ministryTitle}. Poderia me dar mais informações?`;
    return encodeURIComponent(message);
  };

  const openWhatsApp = (ministryTitle) => {
    const message = generateWhatsAppMessage(ministryTitle);
    const url = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const ministries = [
    {
      id: 'youth',
      title: 'Mocidade Yeshua',
      description: 'Ministério de jovens que desde o primeiro culto lidera a adoração e evangelismo entre a juventude.',
      icon: <Users2 className="w-6 h-6" />,
      color: 'from-blue-600 to-cyan-500',
      bgColor: 'bg-gradient-to-br from-blue-600/20 to-cyan-500/20',
      borderColor: 'border-blue-500/30',
      textColor: 'text-blue-600',
      logo: '/assets/images/logo-mocidade-yeshua.png',
      logoFallback: 'MY',
      schedule: 'Durante os cultos e eventos especiais',
      leader: 'Liderança jovem da igreja',
      category: 'fundadores',
      featured: true,
      established: '2020',
      activities: ['Louvor e adoração', 'Evangelismo', 'Estudos bíblicos', 'Confraternizações'],
      contact: 'Fale com a liderança após os cultos'
    },
    {
      id: 'prayer',
      title: 'Vozes que Clamam',
      description: 'Círculo de oração que estabeleceu a base de intercessão e guerra espiritual da igreja.',
      icon: <Mic2 className="w-6 h-6" />,
      color: 'from-purple-600 to-pink-500',
      bgColor: 'bg-gradient-to-br from-purple-600/20 to-pink-500/20',
      borderColor: 'border-purple-500/30',
      textColor: 'text-purple-600',
      logo: '/assets/images/logo-vozes-que-clamam.png',
      logoFallback: 'VQ',
      schedule: 'Quinta-feira 19:30h (Culto de Oração)',
      leader: 'Irmãos intercessores',
      category: 'fundadores',
      featured: true,
      established: '2020',
      activities: ['Intercessão', 'Guerra espiritual', 'Vigílias', 'Cadeias de oração'],
      contact: 'Participe do culto de oração'
    }
  ];

  return (
    <section id="ministries" className="relative py-20 bg-gradient-to-b from-white via-white to-gray-50/50 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-gradient-to-tr from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-primary/3 to-secondary/3 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Elegant Header */}
        <motion.div
          id="ministerios-fundadores"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-flex items-center justify-center mb-8"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-md opacity-50"></div>
              <div className="relative w-20 h-20 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center shadow-xl">
                <Users className="w-10 h-10 text-white" />
              </div>
            </div>
          </motion.div>

          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="inline-block px-6 py-3 bg-white/80 text-secondary rounded-full text-sm font-semibold mb-6 border border-primary/20 backdrop-blur-sm shadow-sm"
          >
            <Sparkles className="inline w-4 h-4 mr-2 text-secondary" />
            Ministérios Fundadores
          </motion.span>

          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-primary mb-6"
          >
            Nossos <span className="text-secondary relative">
              Fundamentos
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="absolute -bottom-2 left-0 h-1.5 bg-gradient-to-r from-primary to-secondary rounded-full"
              />
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed"
          >
            Desde nossa fundação em <span className="font-semibold text-primary">19 de Maio de 2020</span>, 
            estes ministérios têm sido os pilares que sustentam nossa igreja e testemunham 
            o poder de Deus em nossa comunidade.
          </motion.p>
        </motion.div>

        {/* Ministérios Cards com Logos */}
        <div className="relative">
          {/* Decorative Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/20 to-transparent -translate-y-1/2"></div>
          
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {ministries.map((ministry, index) => (
              <motion.div
                key={ministry.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ 
                  y: -10,
                  boxShadow: '0 25px 80px -20px rgba(0,0,0,0.12)'
                }}
                className="relative group"
              >
                {/* Card Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${ministry.color} opacity-0 group-hover:opacity-10 blur-xl rounded-3xl transition-opacity duration-500`}></div>
                
                <div className={`relative bg-white rounded-3xl shadow-2xl overflow-hidden border ${ministry.borderColor} backdrop-blur-sm transition-all duration-300`}>
                  {/* Card Header com Logo */}
                  <div className="relative">
                    {/* Logo Container - REMOVIDO O GRADIENTE */}
                    <div className={`${ministry.bgColor} p-8 md:p-10 relative overflow-hidden`}>
                      {/* Pattern Background */}
                      <div className="absolute inset-0 opacity-5">
                        {[...Array(20)].map((_, i) => (
                          <div
                            key={i}
                            className="absolute"
                            style={{
                              left: `${Math.random() * 100}%`,
                              top: `${Math.random() * 100}%`,
                            }}
                          >
                            <Cross className="w-4 h-4" />
                          </div>
                        ))}
                      </div>
                      
                      {/* Logo Display */}
                      <div className="relative flex flex-col md:flex-row items-center gap-8">
                        {/* Logo Box - REMOVIDOS OS DECORATIVE CORNERS COM GRADIENTE */}
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          className="relative w-48 h-48 md:w-56 md:h-56 flex-shrink-0"
                        >
                          {/* Logo Frame - SIMPLIFICADO */}
                          <div className="absolute inset-0 bg-white/90 backdrop-blur-sm rounded-2xl border-2 border-white/50 shadow-xl"></div>
                          
                          {/* Logo Image - GARANTINDO QUE O TEXTO NÃO SEJA CORTADO */}
                          <div className="relative w-full h-full flex items-center justify-center p-4 md:p-6">
                            <img 
                              src={ministry.logo} 
                              alt={`Logo ${ministry.title}`}
                              className="w-full h-full object-contain max-w-full max-h-full"
                              style={{ objectFit: 'contain' }}
                              onError={(e) => {
                                e.target.onerror = null;
                                e.target.style.display = 'none';
                                const fallback = e.target.parentNode.querySelector('.logo-fallback');
                                if (fallback) fallback.style.display = 'flex';
                              }}
                            />
                            
                            {/* Logo Fallback */}
                            <div 
                              className="logo-fallback hidden absolute inset-0 items-center justify-center p-4"
                              style={{ display: 'none' }}
                            >
                              <div className={`w-32 h-32 rounded-full bg-gradient-to-br ${ministry.color} flex items-center justify-center shadow-lg`}>
                                <span className="text-4xl font-bold text-white">{ministry.logoFallback}</span>
                              </div>
                            </div>
                          </div>
                          
                          {/* REMOVIDOS OS DECORATIVE CORNERS COM GRADIENTE */}
                        </motion.div>
                        
                        {/* Ministry Info - AJUSTADO PARA EVITAR CORTE DE TEXTO */}
                        <div className="flex-1 min-w-0"> {/* Adicionado min-w-0 para evitar overflow */}
                          <div className="mb-4">
                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-4">
                              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${ministry.color} flex items-center justify-center shadow-lg flex-shrink-0`}>
                                <div className="text-white">
                                  {ministry.icon}
                                </div>
                              </div>
                              <div className="flex-1 min-w-0">
                                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 break-words">{ministry.title}</h3>
                                <div className="flex flex-wrap items-center gap-2 mt-2">
                                  <span className="inline-flex items-center gap-1 bg-white/80 text-gray-700 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm whitespace-nowrap">
                                    <Calendar className="w-3 h-3 flex-shrink-0" />
                                    <span className="truncate">Desde 19/05/2020</span>
                                  </span>
                                  <span className="inline-flex items-center gap-1 bg-white/80 text-gray-700 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm whitespace-nowrap">
                                    <Target className="w-3 h-3 flex-shrink-0" />
                                    <span className="truncate">Ministério Fundador</span>
                                  </span>
                                </div>
                              </div>
                            </div>
                            
                            {/* Description com texto completo visível */}
                            <p className="text-gray-700 text-lg leading-relaxed break-words">
                              {ministry.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Ministry Stats */}
                    <div className="px-6 md:px-8 pt-6 pb-8"> {/* Ajustado padding para telas menores */}
                      <h4 className={`font-bold ${ministry.textColor} mb-4 flex items-center gap-2 text-lg`}>
                        <span className="w-2 h-2 rounded-full bg-current flex-shrink-0"></span>
                        Atividades Principais
                      </h4>
                      
                      <div className="flex flex-wrap gap-3 mb-8">
                        {ministry.activities.map((activity, idx) => (
                          <motion.span
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className={`px-4 py-2.5 ${ministry.bgColor} ${ministry.textColor} font-medium rounded-xl text-sm border ${ministry.borderColor} backdrop-blur-sm hover:shadow-md transition-shadow break-words max-w-full`}
                          >
                            {activity}
                          </motion.span>
                        ))}
                      </div>

                      {/* Info Grid */}
                      <div className="grid md:grid-cols-2 gap-6 mb-10">
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 }}
                          className={`${ministry.bgColor} p-5 rounded-2xl border ${ministry.borderColor} backdrop-blur-sm hover:shadow-md transition-shadow`}
                        >
                          <div className="flex items-center gap-4">
                            <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${ministry.color} flex items-center justify-center shadow-md flex-shrink-0`}>
                              <Clock className="w-6 h-6 text-white" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="text-sm text-gray-600 font-medium mb-1">Horários</div>
                              <div className="font-bold text-gray-900 text-lg break-words">{ministry.schedule}</div>
                            </div>
                          </div>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.4 }}
                          className={`${ministry.bgColor} p-5 rounded-2xl border ${ministry.borderColor} backdrop-blur-sm hover:shadow-md transition-shadow`}
                        >
                          <div className="flex items-center gap-4">
                            <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${ministry.color} flex items-center justify-center shadow-md flex-shrink-0`}>
                              <Users className="w-6 h-6 text-white" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="text-sm text-gray-600 font-medium mb-1">Como Participar</div>
                              <div className="font-bold text-gray-900 text-lg break-words">{ministry.contact}</div>
                            </div>
                          </div>
                        </motion.div>
                      </div>

                      {/* CTA Button */}
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => openWhatsApp(ministry.title)}
                        className={`w-full bg-gradient-to-r ${ministry.color} text-white font-bold py-5 rounded-2xl hover:shadow-xl transition-all duration-300 shadow-lg flex items-center justify-center gap-4 group/btn overflow-hidden`}
                      >
                        <div className="relative">
                          <HeartHandshake className="w-6 h-6" />
                          <motion.span
                            className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full"
                            animate={{ scale: [1, 1.8, 1] }}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                          />
                        </div>
                        <span className="text-lg font-semibold text-center break-words px-2">
                          Quero fazer parte deste ministério
                        </span>
                        <motion.div
                          className="w-6 h-6 flex-shrink-0"
                          animate={{ x: [0, 6, 0] }}
                          transition={{ repeat: Infinity, duration: 1.5 }}
                        >
                          <ChevronRight className="w-4 h-4" />
                        </motion.div>
                        
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700"></div>
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Elegant Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-24"
        >
          <div className="relative bg-gradient-to-br from-white via-white/95 to-white/90 rounded-3xl p-8 md:p-12 border border-primary/20 shadow-2xl overflow-hidden backdrop-blur-sm">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              {[...Array(15)].map((_, i) => (
                <div
                  key={i}
                  className="absolute"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    transform: `rotate(${Math.random() * 360}deg)`,
                  }}
                >
                  <Cross className="w-8 h-8" />
                </div>
              ))}
            </div>

            {/* Decorative Border */}
            <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-primary/10 via-transparent to-secondary/10 p-[2px]">
              <div className="absolute inset-0 rounded-3xl bg-white"></div>
            </div>

            <div className="relative z-10 text-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring" }}
                className="inline-block mb-8"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-2xl blur-md opacity-60"></div>
                  <div className="relative w-24 h-24 bg-gradient-to-r from-primary to-secondary rounded-2xl flex items-center justify-center shadow-xl">
                    <Calendar className="w-12 h-12 text-white" />
                  </div>
                </div>
              </motion.div>

              <h3 className="text-3xl md:text-4xl font-bold text-primary mb-6 break-words">
                Desde o <span className="text-secondary">Primeiro Culto</span>
              </h3>
              
              <p className="text-gray-600 mb-10 max-w-2xl mx-auto text-lg leading-relaxed break-words">
                Estes ministérios estiveram presentes no primeiro culto da Assembleia de Deus Ministério Kadosh, 
                em <span className="font-semibold text-primary">19 de Maio de 2020</span>, e continuam sendo fundamentais 
                para nossa vida espiritual e crescimento.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => openWhatsApp("Ministérios Fundadores")}
                  className="group relative bg-gradient-to-r from-primary to-secondary text-white font-bold px-8 py-4 rounded-xl hover:shadow-2xl transition-all duration-300 shadow-lg overflow-hidden min-w-[240px]"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative flex items-center justify-center gap-3">
                    <MessageCircle className="w-5 h-5" />
                    <span className="break-words text-center">Falar sobre os ministérios</span>
                  </span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => document.getElementById('sobre-historia')?.scrollIntoView({ behavior: 'smooth' })}
                  className="group relative bg-white text-primary font-bold px-8 py-4 rounded-xl hover:shadow-xl transition-all duration-300 border-2 border-primary shadow-lg overflow-hidden min-w-[240px]"
                >
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative flex items-center justify-center gap-3">
                    <Calendar className="w-5 h-5" />
                    <span className="break-words text-center">Conheça nossa história</span>
                  </span>
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Ministries;