import os
import requests

API_KEY = os.environ.get("WEATHER_API_KEY")
API_URI = "https://api.openweathermap.org/data/2.5/weather"
LANGUAGE = "pt_br"
UNITS = "metric"


def get_data_from_city(city):
    r = requests.get(
        '{}?q={}&appid={}&lang={}&units={}'.format(
            API_URI, city, API_KEY, LANGUAGE, UNITS))
    return r.json()

def get_data_from_coordinates(lat, lon):
    r = requests.get(
        '{}?lat={}&lon={}&appid={}&lang={}&units={}'.format(
            API_URI, lat, lon, API_KEY, language, units))
    return r.json()