import React from 'react'
import {Platform} from 'react-native'
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation'

import Home from '../../components/Home.react'

const AppNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Trends'
    }
  }
}, {
  initialRouteName: 'Home',
})

export default AppNavigator