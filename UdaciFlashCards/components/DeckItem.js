import React, { Component } from "react"
import { Text, View } from "react-native"
import { textPrimary } from "../utils/colors"
import { Ionicons } from '@expo/vector-icons'
import { globalStyle as styles } from "../utils/common-styles"
import { connect } from "react-redux"


const DeckItem = ({deck, cards, id}) => {
    return (
      <View style={styles.deckItem}>
        <View style={styles.deckInfo}>
          <Text style={styles.deckCards}>{cards} cards</Text>
          <Text style={styles.deckTitle}>{deck.title}</Text>
        </View>
        <Ionicons name="ios-arrow-dropright" color={textPrimary} size={24} />
      </View>
    )
  }


const mapStateToProps = ({ decks }, { id }) => {
  const deck = decks[id];
  return {
    deck,
    cards: deck.questions.length,
  }
}

export default connect(mapStateToProps)(DeckItem);
