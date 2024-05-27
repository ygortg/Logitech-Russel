import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importa o hook useNavigate para navegação
import BotaoLogitech from '../BotaoLogitech'; // Importa o componente BotaoLogitech
import './style.css'; // Importa os estilos CSS

function ProdutoCard(props) {
  const navigate = useNavigate(); // Inicializa o hook useNavigate para controlar a navegação

  // Função que será chamada ao clicar no botão de comprar
  const handleBuyClick = () => {
    // Navega para a página do produto com o id do produto e passa o estado com as props
    navigate(`/produto/${props.id}`, { state: props });
  };

  return (
    <div className='cardProdutos'>
      <div className="imagem-produto">
        <img src={props.imagem} alt={props.produto}/>
      </div>
      
      <div className="nome-marca">
        <img className='logoMarcaProduto' src={props.logoMarcaProduto} alt='Logo da Marca'/>
        <span className=''>{props.nomeMarcaProduto}</span>
      </div>

      <div className="texto-produto">
        <p className='descricao-produto'>{props.descricao}</p>
        
        <div className="valores">
          <p className='promocao'>{props.promocao}</p>
          <p className='valor-produto'>{props.valor}</p>
        </div>
      </div>
      <BotaoLogitech onClick={handleBuyClick} /> {/* Passa a função handleBuyClick como prop para BotaoLogitech */}
    </div>
  );
}

export default ProdutoCard;
