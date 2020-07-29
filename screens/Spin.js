import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Button,
} from "react-native";
import Color from "../Components/Color";
const Spin = ({ setScreen }) => {
  return (
    <View style={styles.container}>
      <Text>Spin Wheel</Text>
      <View style={styles.button}>
        <Button
          color={Color.c1}
          onPress={() => setScreen(1)}
          title="back"
        ></Button>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.c4,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
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
});
export default Spin;
