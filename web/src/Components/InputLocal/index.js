import React, { useState } from "react";

function InputLocal({ novosDadosCidade, novosDadosLocalAtual }) {
  const [cidade, definirCidade] = useState("");

  const pesquisarDados = () => {
    novosDadosCidade(cidade);
    definirCidade("");
  };

  return (
    <div className="inputLocal" data-testid="input-component">
      <div className="search">
        <input
          type="text"
          value={cidade}
          onChange={(e) => definirCidade(e.target.value)}
        ></input>
        <button onClick={pesquisarDados}>Pesquisar</button>
      </div>
      <button className="currentLocal" onClick={novosDadosLocalAtual}>
        Localização atual
      </button>
    </div>
  );
}

export default InputLocal;
