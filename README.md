# Climapp
Climapp é uma aplicação que exibe o clima de acordo com a localização atual ou clima referente a uma cidade específica. É utilizada a API [Open Weather Map para](https://openweathermap.org/api) para pesquisar as cidades e coordenadas.

<br/>

## Backend

O backend da aplicação é feito em Python 3, utilizando o micro-framework Flask.

Para executar a aplicação é preciso instalar os requerimentos da seguinte forma: `pip install -r requirements.txt`, após isso basta utilizar o comando `python app.py`.

Para executar os testes é preciso definir a variável de ambiente `WEATHER_API_KEY`, com a Api key do site Open Weather Map, ou alterar com o valor da key no próprio arquivo `weather_api.py`. E finalmente executar o arquivo tests.py com o comando `python tests.py`.

O backend está disponível em: https://climappbackend.herokuapp.com/

A rota principal retorna dados recebendo o nome da cidade ou dados de latitude e longitude. Exemplo de como a rota pode ser utilizada:

- `/?cidade=sao paulo`
- `/?lat=-1.5&lon=45`

<br/>

## Frontend Web

A aplicação web utiliza React.

Para executar testes use o comando `yarn test` e pressione "a" para executar todos os testes.

Para executar a aplicação é preciso instalar as dependências com o comando `yarn install`, após isso basta utilizar o comando `yarn start`.

A aplicação web pode ser acessada a partir de: https://climapp-web.netlify.app/

<br/>

## Frontend Mobile

O aplicativo mobile utiliza React Native, utilizando Expo.

Para executar a aplicação é preciso instalar o Expo de forma global e as dependências do projeto, utilize o comando `npm install --global expo-cli` para instalar o expo e `yarn install` para as dependências, após isso basta utilizar o comando `yarn start`.

O aplicativo não está publicado em nenhuma loja oficial, mas pode ser encontrado em https://expo.io/@kkardoso/Climapp e ser acessado através do aplicativo Expo no Android, ou através do navegador.

Não há uma suíte de testes para o projeto mobile.