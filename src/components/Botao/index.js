import './style.css';

function Botao({ onClick }) {
    return (  
        // O botão é um div com a classe 'botao' que executa a função onClick quando clicado
        <div className='botao' onClick={onClick}>
            COMPRAR
        </div>
  
    );
}
export default Botao;
