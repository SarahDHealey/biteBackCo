'use strict';
import React, { Component } from 'react'
import { View, Text, StyleSheet, Navigator, Button} from 'react-native'

class Home extends Component {
	render() {
		return (
			<Navigator 
				initialRoute = {{ id: 'Page1' }}
				renderScene = {this.navigatorRenderScene}
				configureScene={(route, routeStack) =>
				Navigator.SceneConfigs.SwipeFromLeft}
			/>
		);
	}

	navigatorRenderScene(route, navigator) {
		switch (route.id) {
			case 'Page1':
				return (<Page1 navigator = {navigator} />)
			case 'Page2':
				return (<Page2 navigator = {navigator} />)
			case 'Page3':
				return (<Page3 navigator = {navigator} />)
		}
	}
}

class Page1 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.blocks}>
          <Button
            onPress={ () => this.props.navigator.push({ id: 'Page2'})}
            title="Bite Back"
            color="#841584"
            accessibilityLabel="Button to Report a Mosquito Encounter"
          />      
          <Text>Report a Mosquito Encounter</Text>
        </View>
        <View style={styles.blocks}>
          <Button
            onPress={ () => this.props.navigator.push({ id: 'Page3'})}
            title="See the Swarm"
            color="#841584"
            accessibilityLabel="Button to See the Mosquito Map"
          />      
          <Text>View the Mosquito Map</Text>
        </View>
      </View>
    );
  }
}
class Page2 extends Component {
  render() {
    return (
      <View style={styles.container}>
      <Text>-This is Page Two-</Text>
      <Text onPress={ () => this.props.navigator.push({ id: 'Page1'})}>-Go to Page One-</Text>
      </View>
    );
  }
}
class Page3 extends Component {
  render() {
    return (
      <View style={styles.container}>
      <Text>-This is Page Three-</Text>
      <Text onPress={ () => this.props.navigator.push({ id: 'Page1'})}>-Go to Page One-</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  blocks: {
    width: 300,
    margin: 10,
    backgroundColor: '#ccc',
    padding: 10,
    alignItems: 'center',
  },
});

module.exports = Home

  
