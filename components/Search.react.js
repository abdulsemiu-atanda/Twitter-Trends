import React, {Component} from 'react'
import {Text, TextInput, View, TouchableHighlight, StyleSheet, Dimensions, Alert, ToastAndroid, Platform} from 'react-native'

const {width, height} = Dimensions.get('screen')

class Search extends Component {
  constructor() {
    super()

    this.state = {text: ''}

    this.onChangeText = this.onChangeText.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChangeText(text) { this.setState({text}) }

  onSubmit() {
    if (this.state.text.trim() === '') {
      Platform.OS === 'ios' ? Alert.alert('Search box cannot be empty.') : ToastAndroid.show('Search box cannot be empty.', ToastAndroid.LONG)
    } else {
      this.props.navigation.navigate('Tweet', {query: this.state.text})
    }
  }
  
  render() {
    return (
      <View style={styles.container}>
        <TextInput onChangeText={this.onChangeText} style={styles.input} autoCapitalize='none' placeholder='What are you looking for?' />
        <TouchableHighlight style={styles.button} onPress={this.onSubmit}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableHighlight>
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
  input: {
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#D7D7D7',
    height: height * 0.05,
    width: width * 0.6
  },
  button: {
    alignSelf: 'center',
    backgroundColor: 'rgb(0, 132, 180)',
    marginTop: height * 0.01,
    width: width * 0.3,
    borderRadius: (width * 0.3) / 2,
    height: height * 0.04,
    padding: 5,
  },
  buttonText: {
    alignSelf: 'center',
    fontSize: 15,
    color: 'rgb(255,255,255)'
  }
})

export default Search