import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
