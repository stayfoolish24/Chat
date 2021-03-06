/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu'
})

const baseURL = ''

type Message = {
  id: string,
  body: string,
  user: {
    id: string,
    name: string,
    avatar: string
  },
  date: string
}

type State = {
  messages: Array<Message>
}
type Props = {}
export default class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      message: []
    }
  }

  componentDidMount() {
    fetch(baseURL + '/messages')
      .then(response => response.json())
      .then(json => this.setState({ messages: json.messages }))
      .catch(error => console.log(error))
  }

  render() {
    console.log(this.state.messages)
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
})
