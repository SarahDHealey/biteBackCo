/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */


//instantiate navigator in the main component
//create a function to render a scene (a component)
//create page 1 component
//create page 2 component
//Register component page 2 in render scene component
//create a function to switch component on press
//error you must wrap the text components inside a main element
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  Button,
} from 'react-native';

import ViewContainer from './app/components/ViewContainer'
import Home from './app/components/Home'
import StatusBarBackground from './app/components/StatusBarBackground'


export default class biteBackCo extends Component {
  render() {
    return (
      <ViewContainer>
        <StatusBarBackground />
        <Text style={{backgroundColor: "gold"}}>{` BiteBackCo - Your resource for mosquito control`}</Text>
        <Home />
      </ViewContainer>
    )
  }
}

AppRegistry.registerComponent('biteBackCo', () => biteBackCo);
