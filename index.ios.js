/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class biteBackCo extends Component {

  constructor(props) {
    super(props);
    this.state = {myText: "Hello World"};
  }
  
  changeMyText(value) {
    this.setState({ myText: value });
  }

  render() {
    return (
      <View>
        <Text>
          {this.state.myText}
        </Text>
        <Text onPress={ () => {this.changeMyText('Hello, Saturnus')}}>
          "change text to hello Saturnus"
        </Text>
        <Text onPress={ () => {this.changeMyText('Hello, Saturnus')}}>
          "change text to hello Saturnus"
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});

AppRegistry.registerComponent('biteBackCo', () => biteBackCo);
