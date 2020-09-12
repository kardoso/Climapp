import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";

export default function InputCidade({
  novosDadosCidade,
  novosDadosLocalAtual,
}) {
  const [cidade, setCidade] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={[TextInput.style, styles.inputArea]}
          defaultValue={cidade}
          onChangeText={(text) => setCidade(text)}
          placeholder="Cidade. Ex: São Paulo"
        />
        <TouchableOpacity
          style={
            cidade === "" ? styles.searchButtonDisabled : styles.searchButton
          }
          onPress={() => {
            setCidade("");
            novosDadosCidade(cidade);
          }}
          disabled={cidade === ""}
        >
          <Text style={styles.buttonText}>Buscar</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.currentSearchButton}
        onPress={novosDadosLocalAtual}
      >
        <Text style={styles.buttonText}>Usar localização atual</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },

  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    margin: 8,
  },

  inputArea: {
    backgroundColor: "#fff",
    borderRadius: 4,
    paddingVertical: 16,
    paddingHorizontal: 16,
    width: "60%",
    height: "100%",
    textAlign: "left",
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    fontSize: 16,
  },

  searchButton: {
    backgroundColor: "#407886",
    borderRadius: 4,
    paddingVertical: 16,
    width: "20%",
    height: "100%",
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },

  searchButtonDisabled: {
    backgroundColor: "#4078868c",
    borderRadius: 4,
    paddingVertical: 16,
    width: "20%",
    height: "100%",
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },

  currentSearchButton: {
    borderRadius: 4,
    backgroundColor: "#407886",
    padding: 8,
    width: "80%",
  },

  buttonText: {
    color: "#fff",
    textTransform: "uppercase",
    textAlign: "center",
  },
});
