import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import Color from "../Components/Color";
import Item from "./Item";

const Customize = ({ setScreen, data, remove, add }) => {
  const [content, setContent] = useState("");
  const changeHandler = (enteredText) => {
    setContent(enteredText);
  };
  const backHandler = () => {
    setScreen(1);
  };
  const startHandler = () => {
    setScreen(4);
  };
  const addHandler = () => {
    add((currentList) => [
      ...currentList,
      { text: content, key: data.length + 1 },
    ]);
    setContent("");
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <Text style={styles.text1}>
          Customize the messages that the spinning wheel shows:)
        </Text>

        <View>
          <TextInput
            placeholder="Enter a message"
            style={styles.input}
            onChangeText={changeHandler}
            value={content}
          />
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={addHandler}
          title="Add"
        >
          <Text style={{ fontSize: 18 }}>Add</Text>
        </TouchableOpacity>

        <ScrollView style={{ height: 220 }}>
          {data.map((goal) => (
            <Item
              goal={goal.text}
              key={goal.key}
              remove={remove.bind(this, goal.key)}
            />
          ))}
        </ScrollView>

        <TouchableOpacity
          style={styles.button}
          onPress={startHandler}
          title="Start Spinning"
        >
          <Text style={{ fontSize: 18 }}>Start Spinning</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={backHandler}
          title="back"
        >
          <Text style={{ fontSize: 18 }}>Back</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.c4,
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 30,
  },
  text1: {
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "Cochin",
  },
  input: {
    width: 200,
    height: 40,
    borderBottomColor: "black",
    borderBottomWidth: 1,
    padding: 10,
    marginTop: 10,
    fontSize: 20,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    fontSize: 10,
    borderWidth: 1,
    borderColor: Color.c1,
    margin: 10,
    width: 150,
    height: 30,
    borderRadius: 20,
    fontFamily: "Cochin",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.26,
  },
});
export default Customize;
