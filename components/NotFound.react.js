import React, {Component} from 'react'
import {View, Text, Platform, StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

class NotFound extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Icon style={styles.icon} name={Platform.OS === 'ios' ? 'ios-construct' : 'md-construct'} size={40} color='rgb(0,0,0)' />
        <Text style={styles.message}>Oops! no search results found for {this.props.term}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F7F7F7'
  },
  icon: {
    alignSelf: 'center'
  },
  message: {
    fontSize: 17,
    textAlign: 'center'
  }
})

export default NotFound
