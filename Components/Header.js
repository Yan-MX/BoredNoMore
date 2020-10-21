import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Color from "./Color";
const Header = (props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{props.title}</Text>
      <Image
        style={styles.png3}
        source={require("../Components/pomeranian.png")}
        alt="png1"
      />
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 90,
    paddingTop: 36,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    shadowOpacity: 0.26,
    backgroundColor: Color.c4,
    flexDirection: "row",
  },
  headerTitle: {
    color: Color.c2,
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: "Cochin",
    textShadowColor: Color.c5,
    textShadowOffset: { width: 2, height: 1 },
    textShadowRadius: 10,
  },
  png3: {
    height: 40,
    width: 40,
    marginHorizontal: 15,
  },
});
export default Header;
