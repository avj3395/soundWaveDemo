import React from "react";
import { StyleSheet, View } from "react-native";
import { STICK_MARGIN, STICK_WIDTH } from "./constants";

export default function WaveForms(props) {
  return (
    <View
      style={[styles.container, props.reversed && styles.containerReversed]}
    >
      {props.waveForms.map((value, index) => (
        <View key={index} style={[styles.stick, { height: `${value}%` }]} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "flex-end",
    height: "100%",
  },
  containerReversed: {
    alignItems: "flex-start",
    opacity: 0.3,
  },
  stick: {
    backgroundColor: "white",
    width: STICK_WIDTH + 2,
    marginRight: STICK_MARGIN,
    borderRadius: 5,
  },
});
