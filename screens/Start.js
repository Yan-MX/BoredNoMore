import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import Color from "../Components/Color";
export default function Start({ setScreen }) {
  const pressHandler = () => {
    setScreen(2);
  };
  const pressHandler2 = () => {
    setScreen(3);
  };

  return (
    <View style={styles.container2}>
      <View style={styles.card}>
        <Image
          style={styles.png2}
          source={require("../Components/b.png")}
          alt="png1"
        />
        <Text style={styles.text1}>I am bored...</Text>
        <Text style={styles.text1}>Can you find me something to do ...</Text>
      </View>
      <View>
        <TouchableOpacity
          style={styles.TouchableOpacity}
          onPress={pressHandler}
        >
          <Text style={styles.text}>Start</Text>
          <Image
            style={styles.png3}
            source={require("../Components/lotus.png")}
            alt="png1"
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.TouchableOpacity}
          onPress={pressHandler2}
        >
          <Text style={styles.text}>Customize</Text>
          <Image
            style={styles.png3}
            source={require("../Components/brain.png")}
            alt="png1"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container2: {
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: Color.c2,
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: "Cochin",
  },
  text1: {
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "Cochin",
  },
  TouchableOpacity: {
    color: Color.c1,
    borderWidth: 2,
    borderColor: Color.c1,
    margin: 10,
    width: 200,
    height: 40,
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Cochin",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.26,
    backgroundColor: Color.c4,
  },

  card: {
    width: "80%",

    marginVertical: 30,
    alignItems: "center",
    height: 300,
    justifyContent: "center",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    shadowOpacity: 0.26,
    backgroundColor: Color.c4,
    padding: 10,
    borderRadius: 15,
  },
  png: {
    height: 210,
    width: 140,
  },
  png2: {
    height: 110,
    width: 110,
    marginBottom: 20,
  },
  png3: {
    height: 25,
    width: 25,
    marginHorizontal: 15,
  },
});
