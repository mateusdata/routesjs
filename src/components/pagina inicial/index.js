import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const HomePage = () => (
  <div className="main">

    <h1>Escoha seu caminho em JavaScript</h1>

    <div className="conteudo-opcoes">
      <Link className="opcao-front-end" to='/front-end'>Front-end</Link>
      <Link className="opcao-back-end" to='/back-end'>Back-end</Link>
    </div>
  </div>
)
export default HomePage;