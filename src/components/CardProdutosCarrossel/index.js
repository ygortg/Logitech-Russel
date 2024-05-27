import Botao from '../Botao'; // Importa o componente Botao
import './style.css'; // Importa os estilos CSS específicos para o carrossel de produtos
import { useNavigate } from 'react-router-dom'; // Importa o hook useNavigate para navegação
import '../CardProdutos/style.css'; // Importa estilos CSS adicionais, se necessário

function ProdutoCardCarrossel(props) {
  
  const navigate = useNavigate(); // Inicializa o hook useNavigate para controlar a navegação

  // Função que será chamada ao clicar no botão de comprar
  const handleBuyClick = () => {
    // Navega para a página do produto com o id do produto e passa o estado com as props
    navigate(`/produto/${props.id}`, { state: props });
  };

  return (
    <div className='cardProdutos-carrossel'>
      <div className="imagem-produto">
        <img src={props.imagem} alt={props.produto}/>
      </div>
      
      <div className="texto-produto">
        <p className='descricao-produto'>{props.descricao}</p>
        
        <div className="valores">
          <p className='promocao'>{props.promocao}</p>
          <p className='valor-produto-carrossel'>{props.valor}</p>
          <p className='desconto'>Com 20% de desconto no PIX</p>
        </div>
      </div>
      <Botao onClick={handleBuyClick}/> {/* Passa a função handleBuyClick como prop para Botao */}
    </div>
  );
}

export default ProdutoCardCarrossel;
