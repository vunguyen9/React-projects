import React, { Component } from "react";
import { Text, View } from "react-native";
import { textPrimary } from "../utils/colors";
import { Feather } from "@expo/vector-icons";
import { globalStyle as styles } from "../utils/common-styles";
import { connect } from "react-redux";

class DeckItem extends Component {
  render() {
    const { deck, cards, id } = this.props;

    return (
      <View style={styles.deckItem}>
        <View style={styles.deckInfo}>
          <Text style={styles.deckCards}>{cards} cards</Text>
          <Text style={styles.deckTitle}>{deck.title}</Text>
        </View>
        <Feather name="arrow-right-circle" color={textPrimary} size={24} />
      </View>
    );
  }
}

const mapStateToProps = ({ decks }, { id }) => {
  const deck = decks[id];
  return {
    deck,
    cards: deck.questions.length,
  };
};

export default connect(mapStateToProps)(DeckItem);
