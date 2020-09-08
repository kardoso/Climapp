from flask import Flask, request
from flask_caching import Cache
from unidecode import unidecode
from weather_api import get_data_from_city, get_data_from_coordinates

config = {
    "DEBUG": True,
    "CACHE_TYPE": "simple",
    "CACHE_DEFAULT_TIMEOUT": 15 * 60
}

app = Flask('Climapp')
app.config.from_mapping(config)
cache = Cache(app)


@app.route('/')
def pagina_inicial():
    cidade = request.args.get('cidade', None)
    lat = request.args.get('lat', None)
    lon = request.args.get('lon', None)

    try:
        if cidade is not None:
            if (cache.get("climate_data") and
                comparar_case_insensitive_unidecode(
                    cache.get("climate_data")["name"], cidade
                )
            ):
                data = cache.get("climate_data")
            else:
                result = get_data_from_city(cidade)

                if result['cod'] != 200:
                    raise Exception("Cidade inválida")

                data = result
                cache.set("climate_data", data)
        else:
            if cache.get("climate_data") is not None and (
                lat == cache.get("climate_data")['coord']['lat'] and
                lon == cache.get("climate_data")['coord']['lon']
            ):
                data = cache.get("climate_data")
            else:
                result = get_data_from_coordinates(lat, lon)

                if result['cod'] != 200:
                    raise Exception("Coordenadas inválidas")

                data = result
                cache.set("climate_data", data)
    except Exception as e:
        data = cache.get("climate_data") or {
            "warning": "No data was returned"
        }
    finally:
        return data


def comparar_case_insensitive_unidecode(str1, str2):
    return unidecode(str1).lower() == unidecode(str2).lower()


if __name__ == "__main__":
    app.run()
