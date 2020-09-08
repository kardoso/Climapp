import React, { useState } from "react";

function InputLocal({ novosDadosCidade, novosDadosLocalAtual }) {
  const [cidade, definirCidade] = useState("");

  const pesquisarDados = (e) => {
    e.preventDefault();
    novosDadosCidade(cidade);
    definirCidade("");
  };

  return (
    <div className="inputLocal" data-testid="input-component">
      <div className="search">
        <form onSubmit={pesquisarDados}>
          <input
            type="text"
            value={cidade}
            onChange={(e) => definirCidade(e.target.value)}
          ></input>
          <button
            disabled={cidade === ""}
            type="submit"
            onClick={pesquisarDados}
          >
            Pesquisar
          </button>
        </form>
      </div>
      <button className="currentLocal" onClick={novosDadosLocalAtual}>
        Localização atual
      </button>
    </div>
  );
}

export default InputLocal;
