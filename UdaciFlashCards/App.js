import React, { Component } from "react";
import * as Font from "expo-font";
import AppNavigation from "./nav/AppNavigation";
import { AppLoading } from "expo";
import { View, Dimensions } from "react-native";
import AppStatusBar from "./nav/AppStatusBar"
import { primary } from "./utils/colors"
import { Provider } from "react-redux"
import { createStore } from "redux"
import reducers from "./redux/reducers"
import middleware from "./redux/middleware"
import { clearLocalNotification, setLocalNotification } from "./utils/helper"
const store = createStore(reducers, middleware)

const customFonts = {
  LexendDeca: require("./assets/fonts/LexendDeca.ttf"),
}



export default class App extends Component {
  state = {
    fontsLoaded: false,
  };

  async componentDidMount() {
    this._loadFontsAsync()
    setLocalNotification()
  }

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  render() {
    if (!this.state.fontsLoaded) {
      return <AppLoading />;
    }
    return (
      <Provider store={store}>
        <View
          style={{
            width: Dimensions.get("window").width,
            height: Dimensions.get("window").height,
          }}
        >
          <AppStatusBar backgroundColor={primary} barStyle="dark-content" />
          <AppNavigation />
        </View>
      </Provider>
    );
  }
}
