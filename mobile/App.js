import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { apiURI } from "./constants";
import InfoClima from "./components/InfoClima";

export default function App() {
  const [estado, setEstado] = useState();

  useEffect(() => {
    fetch(`${apiURI}?cidade=belem`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setEstado(data);
      });
  }, []);

  return (
    <View style={styles.container}>
      <InfoClima data={estado} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
