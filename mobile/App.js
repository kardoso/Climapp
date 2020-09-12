import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, View, Image, Alert, Keyboard } from "react-native";
import { apiURI } from "./constants";
import InfoClima from "./components/InfoClima";
import InputCidade from "./components/InputCidade";

export default function App() {
  const [dadosCidade, setDadosCidade] = useState();

  useEffect(() => {
    fetch(`${apiURI}?cidade=belem`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setDadosCidade(data);
      });
  }, []);

  const definirDadosComLocalAtual = () => {
    Alert.alert("Local atual");
  };

  const definirDadosComCidade = (cidade) => {
    setDadosCidade({});
    Keyboard.dismiss();

    fetch(`${apiURI}?cidade=${cidade}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setDadosCidade(data);
      });
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.backgroundImage}
        source={{
          uri:
            "https://images.unsplash.com/photo-1583887547017-fbe85bd65ff2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=980&q=80",
        }}
      />
      <InfoClima data={dadosCidade} />
      <InputCidade
        novosDadosCidade={definirDadosComCidade}
        novosDadosLocalAtual={definirDadosComLocalAtual}
      />
      <StatusBar style="light" translucent={true} animated={true} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },

  backgroundImage: {
    resizeMode: "cover",
    width: "100%",
    height: "100%",
    position: "absolute",
    opacity: 0.6,
  },
});
