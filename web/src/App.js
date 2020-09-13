import React, { useState, useEffect } from "react";
import "./App.css";
import { apiURI } from "./constants";
import InfoClima from "./Components/InfoClima";
import InputLocal from "./Components/InputLocal";

function App() {
  const [dadosClima, definirDadosClima] = useState({});

  useEffect(() => {
    definirDadosComLocalAtual();
  }, []);

  const definirDadosComLocalAtual = () => {
    let latitude;
    let longitude;

    definirDadosClima({});

    navigator.geolocation.getCurrentPosition((pos) => {
      latitude = pos.coords.latitude;
      longitude = pos.coords.longitude;

      fetch(`${apiURI}?lat=${latitude}&lon=${longitude}`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          definirDadosClima(data);
        });
    });
  };

  const definirDadosComCidade = (cidade) => {
    definirDadosClima({});

    fetch(`${apiURI}?cidade=${cidade}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        definirDadosClima(data);
      });
  };

  return (
    <div className="App">
      <div className="background"></div>
      <InfoClima data={dadosClima} />
      <InputLocal
        novosDadosCidade={definirDadosComCidade}
        novosDadosLocalAtual={definirDadosComLocalAtual}
      />
      <p class="credits-text">
        Imagem por{" "}
        <a
          href="https://unsplash.com/photos/YM3gGbx_LhU"
          target="_blank"
          rel="noopener noreferrer"
        >
          Josh Sorenson
        </a>
      </p>
    </div>
  );
}

export default App;
