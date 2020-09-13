import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, View, Image, Keyboard, Text, Linking } from "react-native";
import { apiURI } from "./constants";
import InfoClima from "./components/InfoClima";
import InputCidade from "./components/InputCidade";

import * as Location from "expo-location";
import * as Permissions from "expo-permissions";

export default function App() {
  const [dadosCidade, setDadosCidade] = useState();
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    definirDadosComLocalAtual();
  }, []);

  const getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== "granted") {
      setErrorMessage("Localização não foi permitida");
      return;
    } else {
      setErrorMessage("");
    }

    let loc = await Location.getCurrentPositionAsync({
      accuracy: Location.Accuracy.Highest,
    });
    const { latitude, longitude } = loc.coords;
    fetch(`${apiURI}?cidade=${latitude}&lon=${longitude}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setDadosCidade(data);
      });
  };

  const definirDadosComLocalAtual = () => {
    setErrorMessage("");
    setDadosCidade({});
    Keyboard.dismiss();
    getLocationAsync();
  };

  const definirDadosComCidade = (cidade) => {
    setErrorMessage("");
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
      <InfoClima data={dadosCidade} errorMessage={errorMessage} />
      <InputCidade
        novosDadosCidade={definirDadosComCidade}
        novosDadosLocalAtual={definirDadosComLocalAtual}
      />
      <Text style={styles.creditsText}>
        Imagem por{" "}
        <Text
          style={styles.linkText}
          onPress={() =>
            Linking.openURL("https://unsplash.com/photos/YM3gGbx_LhU")
          }
        >
          Josh Sorenson
        </Text>
      </Text>
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

  creditsText: {
    position: "absolute",
    bottom: 0,
    color: "rgba(255, 255, 255, 0.2)",
    margin: 16,
  },

  linkText: {
    color: "#40788681",
  },
});
