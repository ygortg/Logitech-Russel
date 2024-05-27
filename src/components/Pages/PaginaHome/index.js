import React from "react";
import ProdutoCard from "../../CardProdutos";
import ProdutoCardCarrossel from "../../CardProdutosCarrossel";
import "./style.css";

function Home() {
  return (
    <div id="home">
      <div className="secao-promocao">
        <img className="banner-img" src="/assets/Bannermobile.png" alt="Banner" />
        
        <div className="cardsProdutos">
          <ProdutoCard
            id={1}
            imagem="/assets/produto1.png"
            produto="Mouse Gamer Sem Fio Logitech G Pro X Superlight 2 com Lightspeed, 32000 DPI, Sensor Hero 2, com Bateria Recarregável, Preto"
            logoMarcaProduto="/assets/logoMarca.png"
            nomeMarcaProduto="Logitech"
            descricao="Mouse Gamer Sem Fio Logitech G Pro X Superlight 2 com Lightspeed, 32000 DPI, Sensor Hero 2, com Bateria Recarregável, Preto"
            promocao="R$ 1.529,48"
            valor="R$ 814,90"
          />
          <ProdutoCard
            id={2}
            imagem="/assets/produto2.png"
            produto="Mouse Gamer Sem Fio Logitech G502 LIGHTSPEED RGB LIGHTSYNC, Ajuste Peso, 11 Botões, Recarregável, Compatível POWERPLAY"
            logoMarcaProduto="/assets/logoMarca.png"
            nomeMarcaProduto="Logitech"
            descricao="Mouse Gamer Sem Fio Logitech G502 LIGHTSPEED RGB LIGHTSYNC, Ajuste Peso, 11 Botões, Recarregável, Compatível POWERPLAY"
            promocao="R$ 705,87"
            valor="R$ 499,99"
          />
          <ProdutoCard
            id={3}
            imagem="/assets/produto3.png"
            produto="Headset Gamer Sem Fio Logitech G Astro A30, Drivers 40mm, Bluetooth, PS e PC, Azul Escuro"
            logoMarcaProduto="/assets/logoMarca.png"
            nomeMarcaProduto="Logitech"
            descricao="Headset Gamer Sem Fio Logitech G Astro A30, Drivers 40mm, Bluetooth, PS e PC, Azul Escuro"
            promocao="R$ 1.999,99"
            valor="R$ 1.499,99"
          />
          <ProdutoCard
            id={4}
            imagem="/assets/produto4.png"
            produto="Caixa de som Logitech G560 com RGB LIGHTSYNC, Sistema 2.1 e Conexão Bluetooth, USB ou 3,5mm"
            logoMarcaProduto="/assets/logoMarca.png"
            nomeMarcaProduto="Logitech"
            descricao="Caixa de som Logitech G560 com RGB LIGHTSYNC, Sistema 2.1 e Conexão Bluetooth, USB ou 3,5mm"
            promocao="R$ 1.777,77"
            valor="R$ 999,90"
          />
        </div>
        
      </div>

      <div className="secao-produtos-carrossel">
        <div className="titulo">
          <h4>Placas de vídeo</h4>
          <span>HARDWARE</span>
        </div>

        <div className="carrossel">
          <ProdutoCardCarrossel
            id={5}
            imagem="/assets/produtoCarrossel1.png"
            produto="Placa de Vídeo RX 6600 CLD 8G ASRock AMD Radeon, 8GB, GDDR6"
            descricao="Placa de Vídeo RX 6600 CLD 8G ASRock AMD Radeon, 8GB, GDDR6"
            promocao="R$ 2.267,47"
            valor="R$ 1.349,99"
          />

          <ProdutoCardCarrossel
            id={6}
            imagem="/assets/produtoCarrossel2.png"
            produto="Placa de Vídeo RX 6750XT Gaming XFX Graphics Card AMD Radeon, 12GB GDDR6, Ray tracing, Fidelity FX"
            descricao="Placa de Vídeo RX 6750XT Gaming XFX Graphics Card AMD Radeon, 12GB GDDR6, Ray tracing, Fidelity FX"
            promocao="R$ 4.229,29"
            valor="R$ 2.999,99"
          />

          <ProdutoCardCarrossel
            id={7}
            imagem="/assets/produtoCarrossel3.png"
            produto="Placa de Vídeo RTX 4060 AERO OC Gigabyte NVIDIA GeForce, 8GB GDDR6, RGB, DLSS, Ray Tracing, Branco"
            descricao="Placa de Vídeo RTX 4060 AERO OC Gigabyte NVIDIA GeForce, 8GB GDDR6, RGB, DLSS, Ray Tracing, Branco"
            promocao="R$ 3.599,99"
            valor="R$ 2.499,99"
          />

          <ProdutoCardCarrossel
            id={8}
            imagem="/assets/produtoCarrossel4.png"
            produto="Placa de Vídeo RX 6600 CLD 8G ASRock AMD Radeon, 8GB, GDDR6"
            descricao="Placa de Vídeo RX 6600 CLD 8G ASRock AMD Radeon, 8GB, GDDR6"
            promocao="R$ 947,36"
            valor="R$ 799,99"
          />

          <ProdutoCardCarrossel
            id={9}
            imagem="/assets/produtoCarrossel5.png"
            produto="Placa de Vídeo Gigabyte Radeon RX 6600 EAGLE AMD, 8GB GDDR6, Preto"
            descricao="Placa de Vídeo Gigabyte Radeon RX 6600 EAGLE AMD, 8GB GDDR6, Preto"
            promocao="R$ 2.477,94"
            valor="R$ 1.399,99"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
