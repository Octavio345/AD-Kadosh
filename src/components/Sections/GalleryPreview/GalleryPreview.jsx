// src/components/Sections/GalleryPreview/GalleryPreview.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Image, ChevronRight, Calendar, Users, 
  Church, Cross, ZoomIn, MessageCircle 
} from 'lucide-react';

const GalleryPreview = () => {
  const [hoveredImage, setHoveredImage] = useState(null);

  // Imagens em destaque para mostrar na home
  const featuredImages = [
    {
      id: 4,
      src: '/images/5.jpeg',
      title: 'Culto de Domingo',
      category: 'cultos',
      description: 'Momento da palavra'
    },
    {
      id: 5,
      src: '/images/4.jpeg',
      title: 'Vozes que Clamam',
      category: 'ministerios',
      description: 'Círculo de oração Vozes que Clamam.'
    },
    {
      id: 1,
      src: '/images/1.jpeg',
      title: 'Batismo',
      category: 'batismos',
      description: 'Um Batismo abençoado'
    },
    {
      id: 2,
      src: '/images/2.jpeg',
      title: 'Culto de Domingo',
      category: 'cultos',
      description: 'Momento de oração'
    }
  ];

  // Número de telefone
  const whatsappNumber = '5517996493144';

  // Função para abrir WhatsApp
  const openWhatsApp = (imageTitle) => {
    const message = encodeURIComponent(
      `Olá! Vi a foto "${imageTitle}" na galeria da Assembleia de Deus Ministério Kadosh e gostaria de mais informações.`
    );
    const url = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Cabeçalho da Seção */}
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block p-3 bg-primary/10 rounded-2xl mb-4"
          >
            <Image className="w-8 h-8 md:w-10 md:h-10 text-primary" />
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary mb-4">
            Nossa <span className="text-secondary">Galeria</span>
          </h2>
          
          <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto">
            Momentos especiais que marcaram nossa história. Confira alguns registros 
            dos nossos cultos, eventos e ministérios.
          </p>
        </div>

        {/* Grid de Fotos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
          {featuredImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onHoverStart={() => setHoveredImage(image.id)}
              onHoverEnd={() => setHoveredImage(null)}
              className="group relative bg-white rounded-xl md:rounded-2xl shadow-lg overflow-hidden cursor-pointer"
            >
              {/* Imagem */}
              <div className="relative h-64 md:h-72 overflow-hidden">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = `https://via.placeholder.com/400x500/4f46e5/ffffff?text=${encodeURIComponent(image.title)}`;
                  }}
                />
                
                {/* Overlay com informações */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredImage === image.id ? 1 : 0 }}
                  className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"
                >
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        image.category === 'cultos' ? 'bg-blue-500' :
                        image.category === 'ministerios' ? 'bg-purple-500' :
                        'bg-green-500'
                      }`}>
                        {image.category === 'cultos' ? 'Cultos' :
                         image.category === 'ministerios' ? 'Ministérios' :
                         'Batismos'}
                      </span>
                    </div>
                    
                    <h3 className="font-bold text-lg mb-1">{image.title}</h3>
                    <p className="text-sm text-gray-200 mb-3 line-clamp-2">{image.description}</p>
                    
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        openWhatsApp(image.title);
                      }}
                      className="flex items-center gap-2 text-sm bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded-lg transition-colors w-full justify-center"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Info via WhatsApp</span>
                    </button>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Estatísticas e Call to Action */}
        <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-6 md:p-8 text-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-center">
            {/* Estatísticas */}
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">+100 Fotos</h3>
              <p className="text-white/80">Registros especiais</p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>Desde 2020</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span>Sempre campanhas novas</span>
              </div>
              <div className="flex items-center gap-2">
                <Church className="w-5 h-5" />
                <span>2 Ministérios</span>
              </div>
            </div>
            
            {/* Botão para galeria completa */}
            <div className="text-center md:text-right">
              <Link
                to="/galeria"
                className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-full font-medium hover:shadow-lg transition-shadow group"
              >
                <span>Ver Galeria Completa</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default GalleryPreview;