from flask import Flask, request
from weather_api import get_data_from_city, get_data_from_coordinates

config = {
    "DEBUG": True
}

app = Flask('Climapp')
app.config.from_mapping(config)


@app.route('/')
def pagina_inicial():
    cidade = request.args.get('cidade', None)
    lat = request.args.get('lat', None)
    lon = request.args.get('lon', None)

    if cidade is not None:
        data = get_data_from_city(cidade)
    else:
        if lat is not None and lon is not None:
            data = get_data_from_coordinates(lat, lon)
        else:
            data = {
                "warning": "No data was returned"
            }

    return data


if __name__ == "__main__":
    app.run()
