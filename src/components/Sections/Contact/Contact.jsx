import React from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, Phone, Mail, Clock,
  MessageCircle, Facebook, Instagram,
  Youtube, Cross
} from 'lucide-react';

const Contact = () => {
  const whatsappNumber = '5517996493144'; // Número do WhatsApp

  // Função para gerar mensagem personalizada para WhatsApp
  const generateWhatsAppMessage = (messageType = '') => {
    let message = '';
    
    if (messageType === 'oracao') {
      message = `Olá! Vi no site da Assembleia de Deus Ministério Kadosh e gostaria de pedir oração.`;
    } else if (messageType === 'visitar') {
      message = `Olá! Vi no site da Assembleia de Deus Ministério Kadosh e gostaria de visitar a igreja. Poderia me informar mais detalhes?`;
    } else {
      message = `Olá! Vi no site da Assembleia de Deus Ministério Kadosh e gostaria de obter mais informações sobre a igreja. Poderia me ajudar?`;
    }
    
    return encodeURIComponent(message);
  };

  // Função para abrir WhatsApp com mensagem personalizada
  const openWhatsApp = (messageType = '') => {
    const message = generateWhatsAppMessage(messageType);
    const url = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-12 md:py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          id="fale-conosco"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-semibold mb-4">
            Fale Conosco
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
            Entre em <span className="text-secondary">Contato</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Venha nos visitar, participe dos nossos cultos ou entre em contato através dos canais abaixo.
            Estamos aqui para servir você e sua família!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          {/* Mapa */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="h-96 md:h-full rounded-2xl overflow-hidden shadow-xl border border-gray-200"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d437.71566131113804!2d-49.51161339088669!3d-20.8122582428154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bdafa905ab492f%3A0xd4d5f74695cf19b7!2sAssembl%C3%A9ia%20de%20Deus%20Minist%C3%A9rio%20Kadosh!5e0!3m2!1spt-BR!2sbr!4v1770236447484!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização da Assembleia de Deus Ministério Kadosh"
            />
          </motion.div>

          {/* Informações de Contato */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-6 md:p-8 shadow-xl border border-gray-200"
          >
            <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
              <Cross className="w-6 h-6 text-secondary" />
              Informações de Contato
            </h3>

            <div className="space-y-6">
              {/* Endereço */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-1">Endereço</h4>
                  <p className="text-gray-700">
                    Assembleia de Deus Ministério Kadosh<br />
                    Av. José Emídio de Faria, Nº 2184<br />
                    Bairro Moreira, Mirassol - SP<br />
                    CEP: 15130-000
                  </p>
                </div>
              </div>

              {/* Horários */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-1">Horários de Culto</h4>
                  <div className="space-y-2">
                    <p className="text-gray-700">
                      <strong className="text-secondary">Quinta-feira:</strong> 19:30h (Campanha - Sempre uma nova)
                    </p>
                    <p className="text-gray-700">
                      <strong className="text-secondary">Domingo:</strong> 18:30h (Culto da Família)
                    </p>
                    <p className="text-primary font-semibold">
                      <strong>Santa Ceia:</strong> Todo 2º Domingo do mês
                    </p>
                  </div>
                </div>
              </div>

              {/* Telefone */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-1">Telefone e WhatsApp</h4>
                  <p className="text-gray-700 text-lg font-semibold">(17) 99649-3144</p>
                  <p className="text-gray-600 text-sm mt-1">
                    Atendimento de segunda a sexta, das 8h às 18h
                  </p>
                  <motion.button
                    onClick={() => openWhatsApp()}
                    className="inline-flex items-center gap-2 mt-3 bg-green-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-600 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <MessageCircle className="w-4 h-4" />
                    Falar no WhatsApp
                  </motion.button>
                </div>
              </div>

              {/* Redes Sociais */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Instagram className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-1">Redes Sociais</h4>
                  <p className="text-gray-600 mb-3 text-sm">
                    Siga-nos e fique por dentro de todas as novidades!
                  </p>
                  <div className="flex gap-4">
                    <a 
                      href="https://www.instagram.com/ad_ministerio_kadosh/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-500 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform"
                      aria-label="Instagram"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a 
                      href="https://www.facebook.com/adzonasul.mirassol.1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform"
                      aria-label="Facebook"
                    >
                      <Facebook className="w-5 h-5" />
                    </a>
                    <a 
                      href="https://www.youtube.com/@adkadoshmirassol7212"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-800 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform"
                      aria-label="YouTube"
                    >
                      <Youtube className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Botões de Ação */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <motion.button
                  onClick={() => window.open('https://www.google.com/maps/dir/?api=1&destination=Av.+José+Emídio+de+Faria,+2184+-+Moreira,+Mirassol+-+SP', '_blank')}
                  className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <MapPin className="w-5 h-5" />
                  Traçar Rota no Google Maps
                </motion.button>

                <motion.button
                  onClick={() => openWhatsApp('visitar')}
                  className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <MessageCircle className="w-5 h-5" />
                  Quero Visitar a Igreja
                </motion.button>
              </div>

              {/* Botão de Pedido de Oração */}
              <div className="mt-4">
                <motion.button
                  onClick={() => openWhatsApp('oracao')}
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Cross className="w-5 h-5" />
                  Fazer Pedido de Oração
                </motion.button>
                <p className="text-center text-gray-600 text-sm mt-2">
                  Nossa equipe de intercessão está pronta para orar por você!
                </p>
              </div>
            </div>

            {/* Mensagem de Boas-Vindas */}
            <div className="mt-8 bg-gradient-to-r from-primary/5 to-secondary/5 p-4 rounded-lg border border-primary/10">
              <h4 className="font-bold text-primary mb-2 flex items-center gap-2">
                <Cross className="w-4 h-4" />
                Você é Bem-Vindo(a)!
              </h4>
              <p className="text-gray-700 text-sm">
                Seja para participar dos cultos, conhecer nossos ministérios, ou simplesmente 
                buscar uma palavra de conforto e esperança, você tem um lugar especial aqui na 
                Assembleia de Deus Ministério Kadosh.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Seção de Contato Emergencial */}
        <motion.div
          id="contato-emergencial"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 md:mt-16"
        >
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-6 md:p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Precisa de Ajuda Urgente?
            </h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Em caso de necessidade pastoral urgente ou apoio espiritual imediato, 
              entre em contato conosco a qualquer momento.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                onClick={() => openWhatsApp('emergencia')}
                className="bg-white text-primary px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-all flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Urgente
              </motion.button>
              <a
                href="tel:+5517996493144"
                className="border-2 border-white text-white px-6 py-3 rounded-full font-bold hover:bg-white/10 transition-all flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Ligar Agora: (17) 99649-3144
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;