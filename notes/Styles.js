import React from "react";
import {
  Button,
  StyleSheet,
  View,
  Platform,
  StatusBar,
  Text,
} from "react-native";

export default function App() {
  return (
    <View style={[styles.container, customStyle]}>
      <Text>Hello World!</Text>
    </View>
  );
}

// Why use StyleSheet.create?
// - Validates the style properties
// - Optimization behind the scenes by the React team <3

// Using array of styles: similar to multple classes on HTML and CSS
// NOTE: Repeat properties overwrite

let customStyle = { backgroundColor: "orange" };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
