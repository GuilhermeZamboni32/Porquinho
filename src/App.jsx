import React, { useState } from "react";
import "./App.css";

function App() {
  const [produto, setProduto] = useState(0);
  const [moedas1Real, setMoedas1Real] = useState(0);
  const [moedas50Centavos, setMoedas50Centavos] = useState(0);
  const [moedas25Centavos, setMoedas25Centavos] = useState(0);
  const [moedas10Centavos, setMoedas10Centavos] = useState(0);
  const [moedas5Centavos, setMoedas5Centavos] = useState(0);
  const [mensagem, setMensagem] = useState("");

  const calcularTotal = () => {
    const totalReais =
      moedas1Real +
      moedas50Centavos * 0.5 +
      moedas25Centavos * 0.25 +
      moedas10Centavos * 0.1 +
      moedas5Centavos * 0.05;

    if (totalReais >= produto) {
      setMensagem(`Você tem R$ ${totalReais.toFixed(2)}. Isso é suficiente para comprar o produto!`);
    } else {
      setMensagem(`Você tem R$ ${totalReais.toFixed(2)}. Isso NÃO é suficiente para comprar o produto.`);
    }
  };

  return (
    <div className="container">
      <h1>Cofrinho</h1>
      <label>
        Valor do Produto (R$):
        <input
          type="number"
          value={produto}
          onChange={(e) => setProduto(parseFloat(e.target.value))}
        />
      </label>

      <label>
        Moedas de 1 Real:
        <input
          type="number"
          value={moedas1Real}
          onChange={(e) => setMoedas1Real(parseInt(e.target.value))}
        />
      </label>

      <label>
        Moedas de 50 Centavos:
        <input
          type="number"
          value={moedas50Centavos}
          onChange={(e) => setMoedas50Centavos(parseInt(e.target.value))}
        />
      </label>

      <label>
        Moedas de 25 Centavos:
        <input
          type="number"
          value={moedas25Centavos}
          onChange={(e) => setMoedas25Centavos(parseInt(e.target.value))}
        />
      </label>

      <label>
        Moedas de 10 Centavos:
        <input
          type="number"
          value={moedas10Centavos}
          onChange={(e) => setMoedas10Centavos(parseInt(e.target.value))}
        />
      </label>

      <label>
        Moedas de 5 Centavos:
        <input
          type="number"
          value={moedas5Centavos}
          onChange={(e) => setMoedas5Centavos(parseInt(e.target.value))}
        />
      </label>

      <button onClick={calcularTotal}>Verificar</button>
      <p>{mensagem}</p>
    </div>
  );
}

export default App;
