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
  View,
  ScrollView,
  Dimensions,
} from 'react-native';

export default class biteBackCo extends Component {
  render() {
    return (
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.container}>
          <View style={styles.box}>
            <Text>Box1</Text>
          </View>
          <View style={styles.box}>
            <Text>Box2</Text>
          </View>
          <View style={styles.box}>
            <Text>Box3</Text>
          </View>
          <View style={styles.box}>
            <Text>Box4</Text>
          </View>
          <View style={styles.box}>
            <Text>Box5</Text>
          </View>
          <View style={styles.box}>
            <Text>Box6</Text>
          </View>
          <View style={styles.box}>
            <Text>Box7</Text>
          </View>
          <View style={styles.box}>
            <Text>Box8</Text>
          </View>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 2,
  },
  box: {
    margin: 2,
    width: Dimensions.get('window').width / 2 -6,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f1c40f',
    height: 200,
  },
});

AppRegistry.registerComponent('biteBackCo', () => biteBackCo);
