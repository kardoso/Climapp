import React, { useState } from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const searchIcon = <FontAwesomeIcon icon={faSearch} />;
const mapMarkerIcon = <FontAwesomeIcon icon={faMapMarkerAlt} />;

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
            {searchIcon}
          </button>
        </form>
      </div>
      <button className="currentLocal" onClick={novosDadosLocalAtual}>
        Localização atual {mapMarkerIcon}
      </button>
    </div>
  );
}

export default InputLocal;
