import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View, Button } from "react-native";

const App = () => {
  const [counter, setCounter] = useState(0);

  const updateCounter = (type) => {
    if (type === "increment") setCounter(counter + 1);
    else setCounter(counter - 1);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Current counter: {counter}</Text>
      </View>
      <View style={styles.buttonGroupContainer}>
        <View style={styles.buttonContainer}>
          <Button
            color="green"
            title="Increment"
            onPress={() => {
              updateCounter("increment");
            }}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            color="red"
            title="Decrement"
            onPress={() => {
              updateCounter("decrement");
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  buttonGroupContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  buttonContainer: {
    marginHorizontal: 10,
  },
});

export default App;
