import React from "react";
import { weatherIconUrl } from "../../constants";

function InfoClima({ data }) {
  return (
    <div className="infoClima" data-testid="info-component">
      {data?.main ? (
        <>
          <p className="temp" data-testid="temp">{`${data.main?.temp}°C`}</p>
          <div className="description">
            <p data-testid="description">{data.weather[0].description}</p>
            <img
              data-testid="icon"
              src={weatherIconUrl(data.weather[0].icon)}
              alt={data.weather[0].icon}
            />
          </div>
          <p
            className="location"
            data-testid="location"
          >{`${data.name}, ${data.sys.country}`}</p>
        </>
      ) : (
        <p className="loading">Carregando...</p>
      )}
    </div>
  );
}

export default InfoClima;
