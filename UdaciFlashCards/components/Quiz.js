import React, { Component } from "react"
import { connect } from "react-redux"
import QuizContainer from "./QuizContainer"
import { clearLocalNotification, setLocalNotification } from "../utils/helper"

class Quiz extends Component {
  
  componentDidMount() {
    clearLocalNotification().then(setLocalNotification)
  }

  onBack = () => {
    const { navigation, id } = this.props;
    navigation.push("deck", {
      id,
    })
  }

  render() {
    return <QuizContainer deck={this.props.deck} onBack={this.onBack} />
  }
}

const mapStateToProps = ({ decks }, { route }) => {
  const { id } = route.params;

  return {
    deck: decks[id],
    id
  }
}

export default connect(mapStateToProps)(Quiz);
