import React, { Component } from "react"
import { View, Text, StyleSheet } from "react-native"
import Bar from "../components/Bar"
import { globalStyle as styles } from "../utils/common-styles"
import ActionView from "../components/ActionView"
import { connect } from "react-redux"

class DeckHome extends Component {
  goBack = () => {
    const { navigation } = this.props
    navigation.push("home")
  }

  startQuiz = () => {
    const { navigation, id } = this.props
    console.log(id)
    navigation.navigate("quiz", {
      id,
    })
  }

  createCard = () => {
    const { navigation, id } = this.props
    navigation.navigate("addcard", {
      id,
    })
  }

  render() {
    const { deck, cards } = this.props

    return (
      <View style={styles.main}>
        <Bar
          title={deck.title ?? "Deck Title"}
          subtitle={`${cards} cards`}
          onBackPressed={this.goBack}
        />
        <View style={[localStyles.row, { justifyContent: 'space-between'}]}>
          
          <ActionView
            style={[localStyles.iosBtn, {borderTopRightRadius: 0, borderBottomRightRadius: 0}]}
            title="Start Quiz"
            iconName="ios-clock"
            onPressed={this.startQuiz}
          />
          <ActionView
            style={[localStyles.iosBtn, {borderTopRightRadius: 0, borderBottomRightRadius: 0}]}
            title="Add Question"
            iconName="ios-add-circle-outline"
            onPressed={this.createCard}
          />
          
        </View>

      </View>
    )
  }
}

const localStyles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
  iosBtn: {
    backgroundColor: "#fff",
    borderColor: "#292477",
    borderWidth: 1,
    borderRadius: 3,
    padding: 5,
    paddingLeft: 25,
    paddingRight: 25,
  },

}) 

const mapStateToProps = ({ decks }, { route }) => {
  const { id } = route.params
  const deck = decks[id]

  return {
    id,
    deck,
    cards: deck.questions.length,
  }
}


export default connect(mapStateToProps)(DeckHome);
