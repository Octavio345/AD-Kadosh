import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  X, ChevronLeft, ChevronRight, Calendar, 
  Users, Church, Cross, Heart, Image,
  ZoomIn, Download, Share2, Filter, MessageCircle, Home,
  Phone // Adicionei o ícone Phone
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [filter, setFilter] = useState('all');

  // Adicione o número de telefone aqui
  const whatsappNumber = '5517996493144';

  // Imagens da galeria - organizadas por categoria
  const galleryImages = [
    // Cultos e Eventos
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
      title: 'Culto',
      category: 'cultos',
      description: 'Quinta-feira de oração e intercessão.',
      featured: false
    },
    // Ministérios
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
    { id: 'all', name: 'Todas as Fotos', count: galleryImages.length, icon: <Image /> },
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
    document.body.style.overflow = 'hidden'; // Previne scroll
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

  // Função para compartilhar
  const shareImage = () => {
    if (navigator.share && selectedImage) {
      navigator.share({
        title: `${selectedImage.title} - Assembleia de Deus Ministério Kadosh`,
        text: selectedImage.description,
        url: window.location.href,
      });
    } else {
      // Fallback para copiar link
      navigator.clipboard.writeText(window.location.href);
      alert('Link copiado para a área de transferência!');
    }
  };

  // Função para baixar imagem (simulado)
  const downloadImage = () => {
    if (selectedImage) {
      const link = document.createElement('a');
      link.href = selectedImage.src;
      link.download = `ad-kadosh-${selectedImage.title.toLowerCase().replace(/\s+/g, '-')}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  // Função para abrir WhatsApp - USANDO O NÚMERO DEFINIDO
  const openWhatsApp = () => {
    const message = encodeURIComponent(
      `Olá! Vi a foto "${selectedImage?.title}" na galeria da Assembleia de Deus Ministério Kadosh e gostaria de mais informações.`
    );
    const url = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
        {/* Header da Galeria */}
        <header className="relative bg-gradient-to-r from-primary via-primary/90 to-secondary py-16 md:py-24">
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
          
          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div className="text-center">
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-block p-3 bg-white/20 backdrop-blur-sm rounded-2xl mb-6"
              >
                <Image className="w-12 h-12 text-white" />
              </motion.div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
                Galeria de <span className="text-secondary">Fotos</span>
              </h1>
              
              <p className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto mb-8">
                Registros especiais dos cultos, eventos e ministérios da 
                Assembleia de Deus Ministério Kadosh. Cada foto conta uma história de fé!
              </p>
              
              {/* Adicionei o número de telefone aqui também */}
              <div className="flex flex-wrap items-center justify-center gap-4 text-white/80">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span>Desde 2020</span>
                </div>
                <div className="w-1 h-1 bg-white/50 rounded-full"></div>
                <div className="flex items-center gap-2">
                  <Image className="w-5 h-5" />
                  <span>{galleryImages.length} Fotos</span>
                </div>
                <div className="w-1 h-1 bg-white/50 rounded-full"></div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  <span>7 Categorias</span>
                </div>
                <div className="w-1 h-1 bg-white/50 rounded-full"></div>
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  <span>(17) 99649-3144</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Wave */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120">
              <path 
                fill="#ffffff" 
                fillOpacity="1" 
                d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
              ></path>
            </svg>
          </div>
        </header>

        {/* Filtros de Categoria */}
        <section className="py-8 md:py-12 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-primary flex items-center gap-2">
                  <Filter className="w-6 h-6 text-secondary" />
                  Nossa Galeria
                </h2>
                <p className="text-gray-600">Filtre por categoria para encontrar suas fotos favoritas</p>
              </div>
              
              <div className="flex items-center gap-2">
                <span className="text-gray-600 font-medium">Filtrar:</span>
                <div className="flex flex-wrap gap-2">
                  {categories.map(category => (
                    <button
                      key={category.id}
                      onClick={() => setFilter(category.id)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all text-sm ${
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
            </div>
          </div>
        </section>

        {/* Grid de Fotos */}
        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4 sm:px-6">
            {filteredImages.length === 0 ? (
              <div className="text-center py-16">
                <Image className="w-20 h-20 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-600 mb-2">Nenhuma foto encontrada</h3>
                <p className="text-gray-500">Tente selecionar outra categoria</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredImages.map((image, index) => (
                  <motion.div
                    key={image.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ y: -5 }}
                    className="group relative bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300"
                    onClick={() => openLightbox(image, index)}
                  >
                    {/* Badge de Destaque */}
                    {image.featured && (
                      <div className="absolute top-3 right-3 z-10">
                        <span className="bg-secondary text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                          Destaque
                        </span>
                      </div>
                    )}
                    
                    {/* Imagem */}
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={image.src}
                        alt={image.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = `https://via.placeholder.com/400x300/4f46e5/ffffff?text=${encodeURIComponent(image.title)}`;
                        }}
                      />
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="flex items-center gap-2 text-white">
                            <ZoomIn className="w-5 h-5" />
                            <span className="text-sm font-medium">Clique para ampliar</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Informações */}
                    <div className="p-4">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-bold text-primary text-lg truncate">{image.title}</h3>
                        <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                          image.category === 'cultos' ? 'bg-blue-100 text-blue-600' :
                          image.category === 'ministerios' ? 'bg-purple-100 text-purple-600' :
                          image.category === 'eventos' ? 'bg-amber-100 text-amber-600' :
                          image.category === 'batismos' ? 'bg-green-100 text-green-600' :
                          image.category === 'social' ? 'bg-pink-100 text-pink-600' :
                          'bg-gray-100 text-gray-600'
                        }`}>
                          {categories.find(c => c.id === image.category)?.name}
                        </span>
                      </div>
                      
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">{image.description}</p>
                      
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <span>{image.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Image className="w-4 h-4" />
                          <span>Ver foto</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
            
            {/* Contador de Fotos */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="text-center md:text-left">
                  <p className="text-gray-600">
                    Mostrando <span className="font-bold text-primary">{filteredImages.length}</span> de{' '}
                    <span className="font-bold text-primary">{galleryImages.length}</span> fotos
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    Categoria selecionada: <span className="font-medium">
                      {categories.find(c => c.id === filter)?.name}
                    </span>
                  </p>
                </div>
                
                <div className="flex items-center justify-center gap-4">
                  <button
                    onClick={() => setFilter('all')}
                    className="px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-medium hover:shadow-lg transition-shadow"
                  >
                    Ver Todas as Fotos
                  </button>
                  <button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="px-6 py-3 bg-white text-primary border-2 border-primary rounded-full font-medium hover:bg-primary/5 transition-colors"
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
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Image className="w-8 h-8" />
                <h3 className="text-2xl font-serif font-bold">Galeria de Fotos</h3>
              </div>
              
              <p className="text-white/80 mb-4 max-w-2xl mx-auto">
                Assembleia de Deus Ministério Kadosh • Av. José Emídio de Faria, 2198 • Mirassol/SP
              </p>
              
              {/* Adicionei a informação do telefone */}
              <div className="flex items-center justify-center gap-4 mb-6 text-white/80">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span className="font-medium">(17) 99649-3144</span>
                </div>
                <div className="w-1 h-1 bg-white/50 rounded-full"></div>
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4" />
                  <span className="font-medium">WhatsApp</span>
                </div>
              </div>
              
              <div className="flex flex-wrap justify-center gap-6 mb-6">
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
              
              <p className="text-white/60 text-sm">
                © {new Date().getFullYear()} Assembleia de Deus Ministério Kadosh. Todos os direitos reservados.
              </p>
            </div>
          </div>
        </footer>

        {/* Lightbox */}
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <div 
              className="relative max-w-6xl w-full max-h-[90vh] bg-white rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Botão Fechar */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Botões de Navegação */}
              <button
                onClick={goToPrev}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-black/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Contador */}
              <div className="absolute top-4 left-4 z-10 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                {currentIndex + 1} / {filteredImages.length}
              </div>

              {/* Imagem */}
              <div className="h-[70vh] flex items-center justify-center p-8">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="max-h-full max-w-full object-contain rounded-lg"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = `https://via.placeholder.com/800x600/4f46e5/ffffff?text=${encodeURIComponent(selectedImage.title)}`;
                  }}
                />
              </div>

              {/* Informações */}
              <div className="bg-white p-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-primary mb-2">{selectedImage.title}</h3>
                    <div className="flex items-center gap-4 text-gray-600 mb-2">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{selectedImage.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          selectedImage.category === 'cultos' ? 'bg-blue-100 text-blue-600' :
                          selectedImage.category === 'ministerios' ? 'bg-purple-100 text-purple-600' :
                          selectedImage.category === 'eventos' ? 'bg-amber-100 text-amber-600' :
                          selectedImage.category === 'batismos' ? 'bg-green-100 text-green-600' :
                          selectedImage.category === 'social' ? 'bg-pink-100 text-pink-600' :
                          'bg-gray-100 text-gray-600'
                        }`}>
                          {categories.find(c => c.id === selectedImage.category)?.name}
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-700">{selectedImage.description}</p>
                  </div>
                  
                  <div className="flex gap-2">
                    <button
                      onClick={downloadImage}
                      className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                      title="Baixar imagem"
                    >
                      <Download className="w-4 h-4" />
                      <span className="hidden sm:inline">Baixar</span>
                    </button>
                    <button
                      onClick={shareImage}
                      className="flex items-center gap-2 px-4 py-2 bg-secondary text-white rounded-lg hover:bg-secondary/90 transition-colors"
                      title="Compartilhar"
                    >
                      <Share2 className="w-4 h-4" />
                      <span className="hidden sm:inline">Compartilhar</span>
                    </button>
                  </div>
                </div>
                
                {/* Miniaturas */}
                <div className="flex gap-2 overflow-x-auto py-2">
                  {filteredImages.map((img, index) => (
                    <button
                      key={img.id}
                      onClick={() => {
                        setSelectedImage(img);
                        setCurrentIndex(index);
                      }}
                      className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 ${
                        currentIndex === index ? 'border-primary' : 'border-transparent'
                      }`}
                    >
                      <img
                        src={img.src}
                        alt={img.title}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </>
  );
};

export default Gallery;