import React, { Component } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { surface, textPrimary, primary, secondary } from "../utils/colors";

export default class QuizBox extends Component {
  state = {
    showAnswer: false,
  };

  toggleAnswer = () => {
    this.setState((currentState) => ({
      showAnswer: !currentState.showAnswer
    }));
  };

  render() {
    const { question, answer, index, total } = this.props;

    return (
      <View style={styles.quizBox}>
        <Text style={styles.counter}>{`${index}/${total}`}</Text>
        <Text style={styles.question}>{question}</Text>
        {this.state.showAnswer && <Text style={styles.counter}>{answer}</Text>}
        <TouchableOpacity onPress={() => this.toggleAnswer()}>
          <Text style={styles.flatButton}>
            {this.state.showAnswer ? "Hide Answer" : "View Answer"}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  quizBox: {
    padding: 30,
    backgroundColor: surface,
    borderRadius: 10,
    marginTop: 50,
  },
  counter: {
    fontFamily: "LexendDeca",
    color: primary,
    fontSize: 18,
    lineHeight: 22,
    marginTop: 10
  },
  question: {
    fontFamily: "LexendDeca",
    color: textPrimary,
    fontSize: 24,
    lineHeight: 36,
  },
  flatButton: {
    marginTop: 20,
    color: secondary,
    fontFamily: "LexendDeca",
    fontSize: 18,
    lineHeight: 22,
  },
});
