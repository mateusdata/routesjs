import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

/*import PaginaInicial from "../Pagina Inicial";
import PaginaFrontEnd from "../Pagina FrontEnd";
import PaginaBackEnd from "../Pagina BackEnd";*/

import HomePage from "../pagina inicial";
import PageFrontEnd from "../pagina frontend";
import PageBackEnd from "../pagina backend";


const Rotas = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<HomePage/>}/>
      <Route path="/front-end" element={<PageFrontEnd/>}/>
      <Route path='/back-end'  element={<PageBackEnd/>}/>
    </Routes>
  </BrowserRouter>
);

export default Rotas;