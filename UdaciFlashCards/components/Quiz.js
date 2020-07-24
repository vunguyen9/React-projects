import React, { Component } from "react"
import { connect } from "react-redux"
import QuizContainer from "./QuizContainer"


class Quiz extends Component {
  

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
