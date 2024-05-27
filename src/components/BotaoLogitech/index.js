import React from 'react';
import './style.css';

function BotaoLogitech({ onClick }) {
  return (
    // O botão é um div com a classe 'botao' que executa a função onClick quando clicado 
    <div className='botaoLigitech' onClick={onClick}>
      COMPRAR
    </div>
  );
}

export default BotaoLogitech;
