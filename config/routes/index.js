import React from 'react'
import {Platform} from 'react-native'
import {createStackNavigator, createTabNavigator} from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons'

import Home from '../../components/Home.react'
import Tweets from '../../components/Tweets.react'
import Search from '../../components/Search.react'

const HomeTabs = createTabNavigator({
  Trends: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: "Trends",
      tabBarIcon: ({ tintColor }) =>
        <Icon
          name={Platform.OS === "ios" ? "ios-trending-up" : "md-trending-up"}
          size={32} color={tintColor}
        />
    }
  },
  Search: {
    screen: Search,
    navigationOptions: {
      tabBarLabel: "Search",
      tabBarIcon: ({ tintColor }) =>
        <Icon
          name={Platform.OS === "ios" ? "ios-search" : "md-search"}
          size={32}
          color={tintColor}
        />
    }
  }
},
{
  swipeEnabled: true,
  tabBarOptions: {
    activeTintColor: "black",
    inactiveTintColor: "#A9A9A9",
    showIcon: true,
    style: {
      backgroundColor: "#F7F7F7"
    },
    indicatorStyle: {
      opacity: 0
    },
    tabStyle: {
      height: 40
    },
    showLabel: false
  },
  tabBarPosition: 'bottom'
})

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeTabs,
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
