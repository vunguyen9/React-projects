import React, { Component } from "react"
import { Text, View, TouchableOpacity } from "react-native"
import { globalStyle } from "../utils/common-styles"
import DeckItem from "../components/DeckItem"
import { connect } from "react-redux"
import { handleInitialData } from "../redux/init_state"

class Home extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  viewDeckHome = (id) => {
    const { navigation } = this.props;

    navigation.navigate("deck", {
      id
    })
  }

  render() {
    const { decks } = this.props;
    return (
      <View style={globalStyle.main}>
        <Text style={globalStyle.title}>Your Decks</Text>
        {Object.keys(decks).map((id) => {
          return (
            <TouchableOpacity
              key={id}
              activeOpacity={0.8}
              onPress={() => this.viewDeckHome(id)}
            >
              <DeckItem id={id} />
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }
}

const mapStateToProps = ({ decks }) => ({ decks })

export default connect(mapStateToProps)(Home)
