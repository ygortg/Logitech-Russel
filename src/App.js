import React from 'react'; // Importa a biblioteca React
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importa componentes do react-router-dom para criar o roteamento
import Home from './components/Pages/PaginaHome'; // Importa o componente da página inicial
import PaginaProduto from './components/Pages/PaginaProduto'; // Importa o componente da página do produto

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Define a rota para a página inicial */}
        <Route path="/" element={<Home />} />
        {/* Define a rota para a página do produto com um parâmetro dinâmico 'id' */}
        <Route path="/Produto/:id" element={<PaginaProduto />} />
      </Routes>
    </Router>
  );
};

export default App;
