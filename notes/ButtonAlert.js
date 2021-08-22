import React from "react";
import { Button, StyleSheet, View, Alert } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Button
        color="orange"
        title="Click Me"
        onPress={() => {
          Alert.alert("Message", "Hey, you have clicked the button", [
            {
              text: "It's cool!",
              onPress: () => {
                alert("I know right!");
              },
            },
            {
              text: "Yeah, I know",
              onPress: () => {
                Alert.alert(
                  "Oh, Okay",
                  "Come on, share the excitement with me!"
                );
              },
            },
          ]);
        }}
      />
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
});
