import React, { useState } from "react";
import Svg, { G, Path, Text, TSpan } from "react-native-svg";
import * as GestureHandler from "react-native-gesture-handler";
import * as d3Shape from "d3-shape";
import color from "randomcolor";
const { PanGestureHandler, State } = GestureHandler;
import {
  Alert,
  StyleSheet,
  Text as RNText,
  View,
  Button as RNButton,
  Dimensions,
  Animated,
} from "react-native";
import Color from "../Components/Color";
const { width } = Dimensions.get("screen");
const numberOfSegments = 10;
const wheelSize = width * 0.9;
const oneTurn = 360;
const angleBySegment = oneTurn / numberOfSegments;
const angleOffset = angleBySegment / 2;
let angle1 = new Animated.Value(0);
let angleEnd;

let getWinnerIndex = () => {
  const deg = Math.abs(Math.round(angleEnd % oneTurn));
  return Math.floor(deg / angleBySegment);
};
const makeWheel = () => {
  const data2 = [
    { number: 1, name: "Locke" },
    { number: 1, name: "Reyes" },
    { number: 1, name: "Ford" },
    { number: 1, name: "Jarrah" },
    { number: 1, name: "Shephard" },
    { number: 1, name: "Kwon" },
    { number: 1, name: "Ford" },
    { number: 1, name: "Jarrah" },
    { number: 1, name: "Shephard" },
    { number: 1, name: "Kwon" },
  ];
  //const arcs = d3Shape.pie()(data);
  const arcs = d3Shape.pie().value(function (d) {
    return d.number;
  })(data2);

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
  return (
    <View>
      <Animated.View
        style={{
          alignItems: "center",
          justifyContent: "center",
          transform: [
            {
              rotate: angle1.interpolate({
                inputRange: [-oneTurn, 0, oneTurn],
                outputRange: [`-${oneTurn}deg`, `0deg`, `${oneTurn}deg`],
              }),
            },
          ],
        }}
      >
        <Svg
          width={wheelSize}
          height={wheelSize}
          viewBox={`0 0 ${width} ${width}`}
          style={{ transform: [{ rotate: `-${angleOffset}deg` }] }}
        >
          <G y={width / 2} x={width / 2}>
            {wheel.map((arc, i) => {
              const [x, y] = arc.centroid;
              const number = arc.value.toString();
              const number2 = ["a", "b", "c", "d", "f"];
              return (
                <G key={`arc-${i}`}>
                  <Path d={arc.path} fill={arc.color} />
                  <G
                    rotation={(i * oneTurn) / numberOfSegments + angleOffset}
                    origin={`${x},${y}`}
                  >
                    <Text
                      x={x}
                      y={y - 70}
                      fill="white"
                      textAnchor="middel"
                      fontSize={26}
                    >
                      <TSpan x={x + 12} dy={26}>
                        : )
                      </TSpan>
                    </Text>
                  </G>
                </G>
              );
            })}
          </G>
        </Svg>
      </Animated.View>
    </View>
  );
};
const a = () => {
  Array.from({ length: number2.length }).map((_, j) => {
    return (
      <TSpan x={x} dy={26} key={`arc-${i}-slice-${j}`}>
        {number2[1]}
      </TSpan>
    );
  });
};
const Spin = ({ setScreen, data }) => {
  let delayInMilliseconds = 4000;
  let RandomNum;
  let size = data.length;
  let onPan = ({ nativeEvent }) => {
    if (nativeEvent.state == State.END) {
      const { velocityY } = nativeEvent;
      Animated.decay(angle1, {
        velocity: velocityY / 1000,
        deceleration: 0.999,
        useNativeDriver: true,
      }).start(() => {
        //do sth here
      });

      RandomNum = Math.floor(Math.random() * size);

      setTimeout(function () {
        Alert.alert(
          data[RandomNum].text,
          "",
          [
            {
              text: "OK",
              onPress: () => console.log("OK Pressed"),
            },
          ],
          { cancelable: false }
        );
      }, delayInMilliseconds);
    }
  };

  return (
    <View style={styles.container}>
      <PanGestureHandler onHandlerStateChange={onPan}>
        <View>{renderSvgWheel()}</View>
      </PanGestureHandler>
      <View>
        <RNText style={styles.text}>Spin the Wheel</RNText>
      </View>
      <View style={styles.button}>
        <RNButton
          color={Color.c2}
          onPress={() => setScreen(1)}
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
  text: {
    fontSize: 36,
    fontFamily: "Cochin",
    color: Color.c2,
  },
});
export default Spin;
