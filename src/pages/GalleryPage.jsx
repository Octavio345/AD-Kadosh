// src/pages/GalleryPage.jsx
import React from 'react';
import { Helmet } from 'react-helmet';
import Gallery from '../components/Sections/Gallery/Gallery';
import Header from '../components/Layout/Header/Header';

const GalleryPage = () => {
  return (
    <>
      <Helmet>
        <title>Galeria de Fotos | Igreja Kadosh</title>
        <meta name="description" content="Galeria de fotos da Igreja Kadosh - Registros especiais dos cultos, eventos e ministérios." />
        <meta name="keywords" content="galeria, fotos, cultos, eventos, ministérios, batismos, igreja Kadosh" />
        <link rel="canonical" href="https://igrejakadosh.com/galeria" />
      </Helmet>
      <Header />
      <Gallery />
    </>
  );
};

export default GalleryPage;