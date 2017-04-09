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
} from 'react-native';

export default class biteBackCo extends Component {
  render() {
    return (
      <Navigator initialRoute = {{ id: 'Page2' }}
      renderScene = {this.navigatorRenderScene} />
    );
  }
  navigatorRenderScene(route, navigator) {
    switch (route.id) {
      case 'Page1':
        return (<Page1 navigator = {navigator} />)
      case 'Page2':
        return (<Page2 navigator = {navigator} />)
    }
  }
}

class Page1 extends Component {
  render() {
    return (
      <View>
        <Text>-This is Page One-</Text>
        <Text onPress={ () => this.props.navigator.push({ id: 'Page2'})}>-Go to Page Two-</Text>
      </View>
    );
  }
}
class Page2 extends Component {
  render() {
    return (
      <View>
      <Text>-This is Page Two-</Text>
      <Text onPress={ () => this.props.navigator.push({ id: 'Page1'})}>-Go to Page One-</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});

AppRegistry.registerComponent('biteBackCo', () => biteBackCo);
