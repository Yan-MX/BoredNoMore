import React, { useState } from "react";
import { StyleSheet, View, Button, TextInput, Modal } from "react-native";

export default function Input({ add }) {
  const [goal, setGoal] = useState("");
  const [keynum, setKeynum] = useState(0);
  const changeHandler = (enteredText) => {
    setGoal(enteredText);
  };
  const addGoalHandler = () => {
    setKeynum((k) => k + 1);
    setGoalList((currentList) => [...currentList, { text: goal, key: keynum }]);
    console.log("added key index:", keynum);
    setGoal("");
    setMode(false);
  };
  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.search}>
        <TextInput
          placeholder="TO-DOs"
          style={styles.input}
          onChangeText={changeHandler}
          value={goal}
        />
        <View style={styles.buttons}>
          <Button title="add" onPress={addGoalHandler} />
          <Button
            title="cancle"
            color="purple"
            onPress={() => {
              setMode(false);
              setGoal("");
            }}
          />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  search: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    width: 200,
    borderBottomColor: "black",
    borderBottomWidth: 1,
    padding: 10,
  },
  buttons: {
    margin: "auto",
    width: "60%",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
});
