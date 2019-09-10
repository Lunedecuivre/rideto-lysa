import React, { Component } from "react";
import { View, Button, StyleSheet } from "react-native";
import Register from "./components/register";
import LoginView from "./components/login";
import { createSwitchNavigator, createAppContainer } from "react-navigation"; // create switch navigation with authentication flow and main app
import { createStackNavigator } from "react-navigation-stack";
import AuthContainer from "./ViewsHandler";
import FlashMessage from "react-native-flash-message";

class App extends React.Component {
  render() {
    return (
      <View>
        <AuthContainer />
        <FlashMessage position="top" />
      </View>
    );
  }
}

export default App;
