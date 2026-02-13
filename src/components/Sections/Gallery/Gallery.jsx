import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  X, ChevronLeft, ChevronRight, Calendar, 
  Users, Church, Cross, Heart, Image,
  ZoomIn, Filter, MessageCircle, Home,
  Phone
} from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [filter, setFilter] = useState('all');

  // Número de telefone
  const whatsappNumber = '5517996493144';

  // Imagens da galeria
  const galleryImages = [
    {
      id: 1,
      src: '/images/1.jpeg',
      title: 'Batismo',
      category: 'batismos',
      description: 'Um Batismo abençoado e de comunhão com Cristo.',
      featured: false
    },
    {
      id: 2,
      src: '/images/2.jpeg',
      title: 'Culto de Domingo',
      category: 'cultos',
      description: 'Momento de oração',
      featured: false
    },
    {
      id: 3,
      src: '/images/3.jpeg',
      title: 'Culto de Campanha',
      category: 'cultos',
      description: 'Quinta-feira de Campanha.',
      featured: false
    },
    {
      id: 4,
      src: '/images/5.jpeg',
      title: 'Culto de Domingo',
      category: 'cultos',
      description: 'Momento da palavra',
      featured: true
    },
    {
      id: 5,
      src: '/images/4.jpeg',
      title: 'Vozes que Clamam',
      category: 'ministerios',
      description: 'Círculo de oração Vozes que Clamam.',
      featured: true
    },
    {
      id: 6,
      src: '/images/6.jpeg',
      title: 'Congresso Das irmãs',
      category: 'cultos',
      description: 'Momento da pregação',
      featured: false
    },
  ];

  // Categorias
  const categories = [
    { id: 'all', name: 'Todas', count: galleryImages.length, icon: <Image /> },
    { id: 'cultos', name: 'Cultos', count: galleryImages.filter(img => img.category === 'cultos').length, icon: <Church /> },
    { id: 'ministerios', name: 'Ministérios', count: galleryImages.filter(img => img.category === 'ministerios').length, icon: <Users /> },
    { id: 'batismos', name: 'Batismos', count: galleryImages.filter(img => img.category === 'batismos').length, icon: <Cross /> },
  ];

  // Filtrar imagens
  const filteredImages = filter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  // Abrir lightbox
  const openLightbox = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
    document.body.style.overflow = 'hidden';
  };

  // Fechar lightbox
  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  // Navegar entre imagens
  const goToPrev = () => {
    setCurrentIndex(prev => {
      const newIndex = prev === 0 ? filteredImages.length - 1 : prev - 1;
      setSelectedImage(filteredImages[newIndex]);
      return newIndex;
    });
  };

  const goToNext = () => {
    setCurrentIndex(prev => {
      const newIndex = prev === filteredImages.length - 1 ? 0 : prev + 1;
      setSelectedImage(filteredImages[newIndex]);
      return newIndex;
    });
  };

  // Função para abrir WhatsApp
  const openWhatsApp = () => {
    const message = encodeURIComponent(
      `Olá! Vi a foto "${selectedImage?.title}" na galeria da Assembleia de Deus Ministério Kadosh e gostaria de mais informações.`
    );
    const url = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Header da Galeria */}
      <header className="relative bg-gradient-to-r from-primary via-primary/90 to-secondary py-12 md:py-24">
        <div className="absolute inset-0 opacity-10">
          {[...Array(20)].map((_, i) => (
            <Image
              key={i}
              className="absolute"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                transform: `rotate(${Math.random() * 360}deg)`,
              }}
            />
          ))}
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block p-3 bg-white/20 backdrop-blur-sm rounded-2xl mb-4 md:mb-6"
            >
              <Image className="w-10 h-10 md:w-12 md:h-12 text-white" />
            </motion.div>
            
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4 md:mb-6">
              Galeria de <span className="text-secondary">Fotos</span>
            </h1>
            
            <p className="text-white/90 text-base md:text-xl max-w-3xl mx-auto mb-6 md:mb-8 px-4">
              Registros especiais dos cultos, eventos e ministérios da 
              Assembleia de Deus Ministério Kadosh.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 text-white/80 text-sm md:text-base">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 md:w-5 md:h-5" />
                <span>Desde 2020</span>
              </div>
              <div className="w-1 h-1 bg-white/50 rounded-full"></div>
              <div className="flex items-center gap-2">
                <Image className="w-4 h-4 md:w-5 md:h-5" />
                <span>{galleryImages.length} Fotos</span>
              </div>
              <div className="w-1 h-1 bg-white/50 rounded-full"></div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 md:w-5 md:h-5" />
                <span>(17) 99649-3144</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 80">
            <path 
              fill="#ffffff" 
              fillOpacity="1" 
              d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,80L1360,80C1280,80,1120,80,960,80C800,80,640,80,480,80C320,80,160,80,80,80L0,80Z"
            ></path>
          </svg>
        </div>
      </header>

      {/* Filtros de Categoria - Mobile Otimizado */}
      <section className="py-6 md:py-12 bg-white sticky top-0 z-40 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="mb-4 md:mb-6">
            <h2 className="text-xl md:text-3xl font-bold text-primary flex items-center gap-2">
              <Filter className="w-5 h-5 md:w-6 md:h-6 text-secondary" />
              Nossa Galeria
            </h2>
            <p className="text-gray-600 text-sm md:text-base">Encontre suas fotos favoritas</p>
          </div>
          
          {/* Filtros Mobile - Scroll Horizontal */}
          <div className="flex md:hidden overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide">
            <div className="flex gap-2 flex-nowrap">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setFilter(category.id)}
                  className={`flex items-center gap-1 px-3 py-2 rounded-full font-medium transition-all text-sm whitespace-nowrap flex-shrink-0 ${
                    filter === category.id
                      ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <span className="text-base">{category.icon}</span>
                  <span>{category.name}</span>
                  <span className={`text-xs ${
                    filter === category.id ? 'text-white/80' : 'text-gray-500'
                  }`}>
                    ({category.count})
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Filtros Desktop */}
          <div className="hidden md:flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all ${
                  filter === category.id
                    ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span className="text-lg">{category.icon}</span>
                <span>{category.name}</span>
                <span className={`text-xs ${
                  filter === category.id ? 'text-white/80' : 'text-gray-500'
                }`}>
                  ({category.count})
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid de Fotos - Mobile Otimizado */}
      <section className="py-6 md:py-12">
        <div className="container mx-auto px-4">
          {filteredImages.length === 0 ? (
            <div className="text-center py-12 md:py-16">
              <Image className="w-16 h-16 md:w-20 md:h-20 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg md:text-xl font-semibold text-gray-600 mb-2">Nenhuma foto encontrada</h3>
              <p className="text-gray-500 text-sm md:text-base">Tente selecionar outra categoria</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -5 }}
                  className="group relative bg-white rounded-xl md:rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300"
                  onClick={() => openLightbox(image, index)}
                >
                  {/* Badge de Destaque */}
                  {image.featured && (
                    <div className="absolute top-2 right-2 z-10">
                      <span className="bg-secondary text-white px-2 py-1 rounded-full text-xs font-bold shadow-lg">
                        Destaque
                      </span>
                    </div>
                  )}
                  
                  {/* Imagem */}
                  <div className="relative h-48 md:h-64 overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = `https://via.placeholder.com/400x300/4f46e5/ffffff?text=${encodeURIComponent(image.title)}`;
                      }}
                    />
                    
                    {/* Overlay Mobile Otimizado */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-3 left-3 right-3">
                        <div className="flex items-center gap-1 text-white">
                          <ZoomIn className="w-4 h-4 md:w-5 md:h-5" />
                          <span className="text-xs md:text-sm font-medium">Toque para ampliar</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Informações */}
                  <div className="p-3 md:p-4">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-bold text-primary text-base md:text-lg truncate pr-2">{image.title}</h3>
                      <span className={`text-xs px-2 py-1 rounded-full flex-shrink-0 ${
                        image.category === 'cultos' ? 'bg-blue-100 text-blue-600' :
                        image.category === 'ministerios' ? 'bg-purple-100 text-purple-600' :
                        'bg-green-100 text-green-600'
                      }`}>
                        {categories.find(c => c.id === image.category)?.name}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 text-xs md:text-sm mb-2 line-clamp-2">{image.description}</p>
                    
                    <div className="flex items-center text-xs text-gray-500">
                      <div className="flex items-center gap-1">
                        <Image className="w-3 h-3 md:w-4 md:h-4" />
                        <span>Ver foto</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
          
          {/* Contador de Fotos */}
          <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-gray-200">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="text-center md:text-left">
                <p className="text-gray-600 text-sm md:text-base">
                  Mostrando <span className="font-bold text-primary">{filteredImages.length}</span> de{' '}
                  <span className="font-bold text-primary">{galleryImages.length}</span> fotos
                </p>
                <p className="text-xs md:text-sm text-gray-500 mt-1">
                  Categoria: <span className="font-medium">
                    {categories.find(c => c.id === filter)?.name}
                  </span>
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={() => setFilter('all')}
                  className="w-full sm:w-auto px-4 py-2 md:px-6 md:py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-medium hover:shadow-lg transition-shadow text-sm md:text-base"
                >
                  Ver Todas as Fotos
                </button>
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="w-full sm:w-auto px-4 py-2 md:px-6 md:py-3 bg-white text-primary border border-primary rounded-full font-medium hover:bg-primary/5 transition-colors text-sm md:text-base"
                >
                  Voltar ao Topo
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer da Galeria */}
      <footer className="bg-gradient-to-r from-primary via-primary/90 to-secondary text-white py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4 md:mb-6">
              <Image className="w-6 h-6 md:w-8 md:h-8" />
              <h3 className="text-xl md:text-2xl font-serif font-bold">Galeria de Fotos</h3>
            </div>
            
            <p className="text-white/80 mb-4 text-sm md:text-base max-w-2xl mx-auto">
              Assembleia de Deus Ministério Kadosh • Av. José Emídio de Faria, 2198 • Mirassol/SP
            </p>
            
            <div className="flex items-center justify-center gap-3 md:gap-4 mb-6 text-white/80 text-sm md:text-base">
              <div className="flex items-center gap-1 md:gap-2">
                <Phone className="w-3 h-3 md:w-4 md:h-4" />
                <span className="font-medium">(17) 99649-3144</span>
              </div>
              <div className="w-1 h-1 bg-white/50 rounded-full"></div>
              <div className="flex items-center gap-1 md:gap-2">
                <MessageCircle className="w-3 h-3 md:w-4 md:h-4" />
                <span className="font-medium">WhatsApp</span>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-3 md:gap-6 mb-6 text-sm md:text-base">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setFilter(category.id)}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  {category.name}
                </button>
              ))}
            </div>
            
            <p className="text-white/60 text-xs md:text-sm">
              © {new Date().getFullYear()} Assembleia de Deus Ministério Kadosh. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>

      {/* Lightbox Mobile Otimizado */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-2 md:p-4"
          onClick={closeLightbox}
        >
          <div 
            className="relative w-full max-w-4xl max-h-[95vh] bg-white rounded-xl md:rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botão Fechar */}
            <button
              onClick={closeLightbox}
              className="absolute top-2 right-2 md:top-4 md:right-4 z-10 w-8 h-8 md:w-10 md:h-10 bg-black/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <X className="w-4 h-4 md:w-6 md:h-6" />
            </button>

            {/* Botões de Navegação Mobile */}
            <button
              onClick={goToPrev}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 w-8 h-8 md:w-10 md:h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <ChevronLeft className="w-4 h-4 md:w-6 md:h-6" />
            </button>
            
            <button
              onClick={goToNext}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 w-8 h-8 md:w-10 md:h-10 bg-black/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <ChevronRight className="w-4 h-4 md:w-6 md:h-6" />
            </button>

            {/* Contador */}
            <div className="absolute top-2 left-2 md:top-4 md:left-4 z-10 bg-black/50 text-white px-2 py-1 rounded-full text-xs md:text-sm">
              {currentIndex + 1} / {filteredImages.length}
            </div>

            {/* Imagem Principal */}
            <div className="h-[50vh] md:h-[60vh] flex items-center justify-center p-4 md:p-8">
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="max-h-full max-w-full object-contain rounded-lg"
                loading="lazy"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = `https://via.placeholder.com/800x600/4f46e5/ffffff?text=${encodeURIComponent(selectedImage.title)}`;
                }}
              />
            </div>

            {/* Informações */}
            <div className="bg-white p-4 md:p-6">
              <div className="mb-4">
                <h3 className="text-lg md:text-2xl font-bold text-primary mb-1 md:mb-2">{selectedImage.title}</h3>
                
                <div className="flex items-center flex-wrap gap-2 md:gap-4 text-gray-600 mb-2 text-sm md:text-base">
                  <div className="flex items-center gap-1">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      selectedImage.category === 'cultos' ? 'bg-blue-100 text-blue-600' :
                      selectedImage.category === 'ministerios' ? 'bg-purple-100 text-purple-600' :
                      'bg-green-100 text-green-600'
                    }`}>
                      {categories.find(c => c.id === selectedImage.category)?.name}
                    </span>
                  </div>
                </div>
                <p className="text-gray-700 text-sm md:text-base">{selectedImage.description}</p>
              </div>
              
              {/* Botão WhatsApp */}
              <div className="flex justify-center mb-4">
                <button
                  onClick={openWhatsApp}
                  className="flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors w-full justify-center"
                >
                  <MessageCircle className="w-4 h-4 md:w-5 md:h-5" />
                  <span className="font-medium">Mais informações no WhatsApp</span>
                </button>
              </div>
              
              {/* Miniaturas - Mobile Scroll */}
              <div className="flex gap-2 overflow-x-auto py-2 -mx-2 px-2">
                {filteredImages.map((img, index) => (
                  <button
                    key={img.id}
                    onClick={() => {
                      setSelectedImage(img);
                      setCurrentIndex(index);
                    }}
                    className={`flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-lg overflow-hidden border-2 ${
                      currentIndex === index ? 'border-primary' : 'border-transparent'
                    }`}
                  >
                    <img
                      src={img.src}
                      alt={img.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Gallery;