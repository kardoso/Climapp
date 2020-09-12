import React from "react";
import "./style.css";
import { weatherIconUrl } from "../../constants";

function InfoClima({ data }) {
  return (
    <div className="infoClima" data-testid="info-component">
      {data?.main ? (
        <>
          <div className="weather">
            <div className="temp">
              <p data-testid="temp">{`${Math.round(data.main?.temp)}°C`}</p>
            </div>
            <div className="description">
              <p data-testid="description">{data.weather[0].description}</p>
              <img
                data-testid="icon"
                src={weatherIconUrl(data.weather[0].icon)}
                alt={data.weather[0].icon}
              />
            </div>
          </div>
          <p
            className="location"
            data-testid="location"
          >{`${data.name}, ${data.sys.country}`}</p>
        </>
      ) : (
        <div className="loading">
          <p>Carregando...</p>
        </div>
      )}
    </div>
  );
}

export default InfoClima;
