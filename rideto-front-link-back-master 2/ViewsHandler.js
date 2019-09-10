import React, { Component } from "react";
import { View, Button, StyleSheet } from "react-native";
import Register from "./components/register";
import LoginView from "./components/login";
import { createSwitchNavigator, createAppContainer } from "react-navigation"; // create switch navigation with authentication flow and main app
import { createStackNavigator } from "react-navigation-stack";

const AuthNavigator = createStackNavigator(
  {
    Login: { screen: LoginView },
    Register: { screen: Register }
  },
  {
    headerMode: "none"
  }
);

const SwitchNavigator = createSwitchNavigator(
  {
    Login: AuthNavigator
    //App: AppNavigator
  },
  {
    initialRouteName: "Login"
  }
);

const AuthContainer = createAppContainer(AuthNavigator);

export default AuthContainer;
