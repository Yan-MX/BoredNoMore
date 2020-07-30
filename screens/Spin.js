import * as React from "react";
import Svg, { G, Path, Text, TSpan } from "react-native-svg";

import * as GestureHandler from "react-native-gesture-handler";
import * as d3Shape from "d3-shape";
import color from "randomcolor";
import { snap } from "@popmotion/popcorn";
const { PanGestureHandler, State } = GestureHandler;

import {
  StyleSheet,
  Text as RNText,
  View,
  Button as RNButton,
  Dimensions,
} from "react-native";
import Color from "../Components/Color";
const { width } = Dimensions.get("screen");
const numberOfSegments = 10;
const wheelSize = width * 0.9;
const makeWheel = () => {
  console.log("makeWheel is called");
  const data = Array.from({ length: numberOfSegments }).fill(1);
  const arcs = d3Shape.pie()(data);
  const colors = color({
    luminosity: "light",
    count: numberOfSegments,
  });
  return arcs.map((arc, index) => {
    console.log("arcs.map is");
    const instance = d3Shape
      .arc()
      .padAngle(0.01)
      .outerRadius(width / 2)
      .innerRadius(20);
    return {
      path: instance(arc),
      color: colors[index],
      value: Math.round(Math.random() * 10 + 1) * 200,
      centroid: instance.centroid(arc),
    };
  });
};
let wheel = makeWheel();
const renderSvgWheel = () => {
  console.log("renderSvgWheel is called");
  return (
    <View>
      <Svg
        width={wheelSize}
        height={wheelSize}
        viewBox={`0 0 ${width} ${width}`}
      >
        <G y={width / 2} x={width / 2}>
          {wheel.map((arc, i) => {
            return (
              <G key={`arc-${i}`}>
                <Path d={arc.path} fill={arc.color} />
              </G>
            );
          })}
        </G>
      </Svg>
    </View>
  );
};
const Spin = (props) => {
  return (
    <View style={styles.container}>
      <View>{renderSvgWheel()}</View>
      <View style={styles.button}>
        <RNButton
          color={Color.c2}
          onPress={() => props.setScreen(1)}
          title="back"
        ></RNButton>
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
  container2: { flex: 1, backgroundColor: Color.c4 },
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
