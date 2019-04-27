import React from 'react'
import { StyleSheet, View, Button } from 'react-native'
import { createAppContainer, createStackNavigator } from 'react-navigation'
import BallToBox from './animations/BallToBox'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

class Menu extends React.Component {
  onPress = (viewName) => () => {
    this.props.navigation.navigate(viewName)
  }

  render () {
    return (
      <View style={styles.container}>
        <Button onPress={this.onPress('BallToBox')} title="Drop ball to box"></Button>
      </View>
    )
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: Menu
  },
  BallToBox: {
    screen: BallToBox
  }
}, {
  initialRouteName: 'Home'
})

export default createAppContainer(AppNavigator)
