import React, { Component } from "react"
import Bar from "../components/Bar"
import { View, Text } from "react-native"
import QuizList from "../components/QuizList"
import Button from "../components/Button"
import { globalStyle } from "../utils/common-styles"

export default class QuizContainer extends Component {
  state = {
    score: 0,
    showScore: false,
    currentIndex: 0,
    loading: true,
  };

  componentDidMount() {
    const { deck } = this.props;
    const { questions } = deck;
    this.setState({
      questions: questions,
      total: questions.length,
      loading: false,
    });
  }

  showNext() {
    let currentIndex = this.state.currentIndex;
    let next = currentIndex + 1;
    let isShowScore = next > this.state.total - 1;

    if (isShowScore) {
      this.setState({
        showScore: true,
      });
      return;
    } else {
      this.setState({
        currentIndex: next,
      });
    }
  }

  restartQuiz = () => {
    this.setState({
      score: 0,
      showScore: false,
      currentIndex: 0,
    });
  };

  answer(val) {
    if (val) {
      this.showNext();
      return;
    }

    this.setState((currentState) => ({
      score: currentState.score + 1,
    }));
    this.showNext();
  }

  render() {
    if (this.state.loading) {
      return null;
    }

    return (
      <View style={globalStyle.main}>
        <Bar onBackPressed={() => this.props.onBack()} />
        {this.state.showScore ? (
          <View>
            <Text style={globalStyle.title}>
              {" "}
              Your Score : {this.state.score}{" "}
            </Text>
            <View>
              <Button onPress={() => this.restartQuiz()} title="Restart Quiz" />
              <Button
                onPress={() => this.props.onBack()}
                title="Back to decks"
                type="secondary"
              />
            </View>
          </View>
        ) : (
          <View>
            {!this.state.loading && (
              <QuizList
                questions={this.state.questions}
                total={this.state.total}
                index={this.state.currentIndex}
              />
            )}

            <View>
              <Button onPress={() => this.answer(false)} title="Correct" />
              <Button onPress={() => this.answer(true)} title="Incorrect"
              />
            </View>
          </View>
        )}
      </View>
    );
  }
}
