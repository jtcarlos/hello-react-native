import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  Image,
  View,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>
      <Image style={styles.image} source={require("./assets/icon.png")} />
      <TouchableHighlight
        onPress={() => {
          console.log("You touched the image");
        }}
        onLongPress={() => {
          console.log("LONG PRESSSEDDDD");
        }}
      >
        <Image
          source={{
            uri: "https://picsum.photos/200/300",
            width: 200,
            height: 300,
          }}
        />
      </TouchableHighlight>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: 100,
    width: 100,
  },
});
