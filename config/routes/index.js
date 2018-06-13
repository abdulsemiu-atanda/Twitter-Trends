import React from 'react'
import {Platform} from 'react-native'
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation'

import Home from '../../components/Home.react'
import Tweets from '../../components/Tweets.react'

const AppNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Trends'
    }
  },
  Tweet: {
    screen: Tweets,
    navigationOptions: {
      title: 'Tweets'
    }
  }
}, {
  initialRouteName: 'Home',
})

export default AppNavigator
