// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import GalleryPage from './pages/GalleryPage';
import ScrollToTop from './components/UI/ScrollToTop';
import WhatsAppFloat from './components/UI/WhatsAppFloat';
import './App.css';
import './styles/globals.css';

function App() {
  return (
    <Router>
       <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/galeria" element={<GalleryPage />} />
      </Routes>
      <WhatsAppFloat /> 
    </Router>
  );
}

export default App;