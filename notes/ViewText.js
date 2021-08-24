import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={[styles.boldText, styles.whiteText]}>
          Hello React Native World!
        </Text>
      </View>
      <View style={styles.content}>
        <Text>Lorem Ipsum Dolor Sit Amet</Text>
        <Text style={styles.boldText}>Lorem Ipsum Dolor Sit Amet</Text>
        <Text>Lorem Ipsum Dolor Sit Amet</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  boldText: {
    fontWeight: "bold",
  },
  whiteText: {
    color: "white",
  },
  header: {
    backgroundColor: "dodgerblue",
    padding: 20,
  },
  content: {
    backgroundColor: "yellow",
    padding: 20,
  },
});
