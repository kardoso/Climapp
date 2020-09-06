import unittest
import json
from weather_api import get_data_from_city, get_data_from_coordinates

CIDADE_TESTE = "Belém"
LAT_TESTE = -1.46
LON_TESTE = -48.5


class TestApiCall(unittest.TestCase):

    def test_success_on_get_data_from_city(self):
        self.assertEqual(get_data_from_city(CIDADE_TESTE)['cod'], 200)

    def test_success_on_get_data_from_coordinates(self):
        self.assertEqual(get_data_from_coordinates(
            LAT_TESTE, LON_TESTE)['cod'], 200)

if __name__ == '__main__':
    unittest.main()
