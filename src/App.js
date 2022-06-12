import React from 'react';
import './App.css';
import Rotas from './components/rotas';
import Footer from './components/footer/App';
import Header from './components/header/app';

const App = () => (
  <div className="App">
    <Header/>
    <Rotas />
    <Footer/>
  </div>
);

export default App;




