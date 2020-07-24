import React, { Component } from "react"
import Bar from "../components/Bar"
import Button from "../components/Button"
import { View, TextInput } from "react-native"
import { globalStyle as styles } from "../utils/common-styles"
import { handleCreateCard } from "../redux/actions"
import { connect } from "react-redux"

class AddQuestion extends Component {
  state = {
    question: "",
    answer: "",
  }

  goBack = () => {
    const { navigation } = this.props
    navigation.push("home")
  }

  onAnswerChanged = (answer) => {
    this.setState({
      answer,
    })
  }

  onQuestionChanged = (question) => {
    this.setState({
      question,
    })
  }

  

  createCard = () => {
    this.props.dispatch(
      handleCreateCard({
        id: this.props.id,
        question: this.state.question,
        answer: this.state.answer,
      })
    )
    this.goBack()
  }

  render() {
    return (
      <View style={styles.main}>
        <Bar title="Add Question" subtitle="" onBackPressed={this.goBack} />
        <TextInput
          style={styles.inputField}
          onChangeText={(text) => this.onQuestionChanged(text)}
          placeholder="Question"
          value={this.state.question}
        />
        <TextInput
          style={styles.inputField}
          onChangeText={(text) => this.onAnswerChanged(text)}
          placeholder="Answer"
          value={this.state.answer}
        />
        <Button
          onPress={this.createCard}
          title="Add Card"
          disabled={
            this.state.question.length === 0 && this.state.answer.length === 0
          }
        />
      </View>
    )
  }
}

const mapStateToProps = ({ decks }, { route }) => {
  const { id } = route.params
  return {
    id,
  }
}

export default connect(mapStateToProps)(AddQuestion)
