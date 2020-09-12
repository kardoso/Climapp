import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { weatherIconUrl } from "../../constants";

export default function InfoClima({ data }) {
  return (
    <View style={styles.container}>
      {data?.main ? (
        <>
          <Text
            style={[styles.text, styles.tempText]}
          >{`${data?.main?.temp}°C`}</Text>
          <View style={styles.descriptionView}>
            <Text style={[styles.text, styles.descriptionText]}>
              {data?.weather[0].description}
            </Text>
            <Image
              source={{ uri: weatherIconUrl(data?.weather[0].icon) }}
              style={styles.descriptionImage}
            />
          </View>
          <Text
            style={[styles.text, styles.cityText]}
          >{`${data?.name}, ${data?.sys.country}`}</Text>
        </>
      ) : (
        <Text style={[styles.text, styles.loadingText]}>Carregando</Text>
      )}
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

  text: {
    color: "#fff",
  },

  tempText: {
    fontSize: 64,
  },

  descriptionView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  descriptionText: {
    fontSize: 24,
  },

  descriptionImage: {
    width: 50,
    height: 50,
  },

  cityText: {
    fontSize: 18,
  },

  loadingText: {
    fontSize: 18,
  },
});
