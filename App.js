import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Start from "./screens/Start";
import Color from "./Components/Color";
import Header from "./Components/Header";
import Spin from "./screens/Spin";
import Customize from "./screens/Customize";
export default function App() {
  const [screen, setScreen] = useState(1);
  const [CustomizeData, SetCustomizeData] = useState([
    { text: "red", key: 1 },
    { text: "blue", key: 2 },
    { text: "yellow", key: 3 },
  ]);
  const remove = (key) => {
    SetCustomizeData((current) => {
      if (key !== null) return current.filter((goal) => goal.key !== key);
    });
  };
  const data = [
    { text: "Why not take a nap?", key: 1 },
    { text: "Why not watch a movie?", key: 2 },
    { text: "Why not take a long bath or shower?", key: 3 },
    { text: "How about a walk in the nearby park?", key: 4 },
    {
      text:
        "Why not contact a friend whom you haven't spoken to in a long time?",
      key: 5,
    },
    { text: "Why not play some silly games?", key: 6 },
    { text: "why not learn a new language?", key: 7 },
    { text: "How about paint your nail or braid your hair?", key: 8 },
    { text: "How about have a tea?", key: 9 },
    { text: "How about listening to some podcast?", key: 10 },
  ];
  const info = [
    "Power Napping is the best",
    "An old movie!!",
    "Treat yourself, you deserve it",
    "Get some fresh air!",
    "Catch up with him or her",
    "How about the snake game?",
    "mmm try Doulingo?",
    "Look fantastic",
    "Nice and Warm",
    "Get some inspirations!",
  ];
  let content;
  switch (screen) {
    case 2:
      content = <Spin setScreen={setScreen} data={data} />;
      break;
    case 3:
      content = (
        <Customize
          setScreen={setScreen}
          data={CustomizeData}
          remove={remove}
          add={SetCustomizeData}
        />
      );
      break;
    case 4:
      content = <Spin setScreen={setScreen} data={CustomizeData} />;
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
