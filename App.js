import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Start from "./screens/Start";
import Color from "./Components/Color";
import Header from "./Components/Header";
import Spin from "./screens/Spin";
import Customize from "./screens/Customize";
export default function App() {
  const [screen, setScreen] = useState(1);

  let content;
  switch (screen) {
    case 2:
      content = <Spin setScreen={setScreen} />;
      break;
    case 3:
      content = <Customize setScreen={setScreen} />;
      break;
    default:
      content = <Start setScreen={setScreen} />;
      break;
  }
  return (
    <View style={styles.container}>
      <Header title="BoredNoMore" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.c4,
  },
});
