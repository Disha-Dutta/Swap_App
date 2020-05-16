import React from "react";
import { StyleSheet, Text, View, ScrollView, Dimensions } from "react-native";

export default function Horizontal() {
  return (
    <ScrollView horizontal={true} pagingEnabled={true} style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.innerText}>Welcome to Priyeah's App</Text>
      </View>
      <View style={[styles.wrapper, styles.designBackground]}>
        <Text style={styles.innerText}>Designer 🎨</Text>
      </View>
      <View style={[styles.wrapper, styles.devBackgoround]}>
        <Text style={styles.innerText}>Developer 👩‍💻</Text>
      </View>
      <View style={[styles.wrapper, styles.blogBackground]}>
        <Text style={styles.innerText}>Blogger ✍🏻</Text>
      </View>
      <View style={[styles.wrapper, styles.natureBackground]}>
        <Text style={styles.innerText}>Calm Girl ❤️</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {},
  wrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    backgroundColor: "#0e76a8",
  },
  designBackground: {
    backgroundColor: "#C004D9",
  },
  devBackgoround: {
    backgroundColor: "#5A13F2",
  },
  blogBackground: {
    backgroundColor: "#AB05F2",
  },
  natureBackground: {
    backgroundColor: "#2745F2",
  },
  innerText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
});
