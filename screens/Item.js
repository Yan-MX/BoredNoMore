import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import Color from "../Components/Color";
export default function Item({ goal, remove }) {
  return (
    <TouchableOpacity activityOpacity={0.2} onPress={remove}>
      <View style={styles.listItem}>
        <Text>{goal}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    margin: 10,
    backgroundColor: Color.c5,
    borderColor: "lightblue",
    borderWidth: 1,
    width: 300,
  },
});
