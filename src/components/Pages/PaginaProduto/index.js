import React from "react"; // Importa a biblioteca React
import { useLocation, useNavigate } from "react-router-dom"; // Importa os hooks useLocation e useNavigate do react-router-dom
import "./style.css"; // Importa os estilos CSS específicos para a página do produto

function PaginaProduto() {
  const location = useLocation(); // Inicializa o hook useLocation para acessar a localização atual e estado passado
  const produto = location.state; // Obtém o estado (dados do produto) passado pela navegação
  const navigate = useNavigate(); // Inicializa o hook useNavigate para controlar a navegação

  // Função que será chamada ao clicar no botão de comprar
  const handleBuyClick = () => {
    // Navega para a página inicial
    navigate("/");
  };

  // Função que será chamada ao clicar no botão de adicionar ao carrinho
  const handleAddToCartClick = () => {
    // Navega para a página inicial
    navigate("/");
  };

  return (
    <div className="pagina-produto">
      <div className="produto-imagem">
        <img src={produto.imagem} alt={produto.produto} />
      </div>

      <div className="produto-detalhes">
        <h1>{produto.produto}</h1>
        
        <p>Vendido e entregue por <span className="marca">Logitech Brasil</span> | <span className="status">Em Estoque</span></p>
        
        <div className="produto-valores">
          <p className="valor">{produto.promocao}</p><br />
          <p className="promocao">{produto.valor}</p><br />
          <span>A vista no PIX</span>
        </div>

        <div className="produto-botoes">
          <button className="comprar-btn" onClick={handleBuyClick}>COMPRAR</button> {/* Chama handleBuyClick ao ser clicado */}
          <button className="carrinho-btn" onClick={handleAddToCartClick}>ADICIONAR AO CARRINHO</button> {/* Chama handleAddToCartClick ao ser clicado */}
        </div>
      </div>
    </div>
  );
}

export default PaginaProduto;
