import unittest
import json
from app import app
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


class TestHome(unittest.TestCase):

    def setUp(self):
        self.app = app.test_client()

    def test_route(self):
        response = self.app.get('/')
        self.assertEqual(200, response.status_code)

    def test_get_city(self):
        response = self.app.get('/?cidade={}'.format(CIDADE_TESTE))
        self.assertEqual(200, json.loads(response.data)['cod'])

    def test_get_from_cache(self):
        self.app.get('/?cidade={}'.format(CIDADE_TESTE))
        response = self.app.get('/')
        self.assertEqual(200, json.loads(response.data)['cod'])
        self.assertEqual(CIDADE_TESTE, json.loads(response.data)['name'])

    def test_content_type(self):
        response = self.app.get('/')
        self.assertIn('application/json', response.content_type)

if __name__ == '__main__':
    unittest.main()
