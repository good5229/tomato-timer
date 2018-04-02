import React, { Component } from "react";
import { View, StyleSheet, Text, StatusBar } from "react-native";
import Button from "../Button";

class Timer extends Component {
  render() {
    const { isPlaying, elapsedTime, timerDuration, startTimer, restartTimer, addSecond } = this.props;
    return (
        <View style={styles.container}>
        <StatusBar barStyle={"light-content"} />
        <View style={styles.upper}>
            <Text style={styles.time}>{formatTime(timerDuration - elapsedTime)}</Text>
        </View>
        <View style={styles.lower}>
            {!isPlaying && (
                <Button iconName={"play-circle"} onPress={startTimer} />
            )}
            {isPlaying && (
                <Button iconName={"stop-circle"} onPress={restartTimer} />
            )}
        </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#CE0B24"
  },
  lower: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 25,
    paddingRight: 25
  },
  upper: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center"
  },
  time: {
    color: "white",
    fontSize: 120,
    fontWeight: "100"
  }
});

export default Timer;