import React, { Component } from 'react'
import {View, Text, StyleSheet } from 'react-native'

export default class AuthenticationView extends Component {
  render() { 
    return (
      <View style={{ flex: 1, alignItems: 'center' }}>
        <Text style={styles.text} >{this.props.state.mensagem}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  text:{
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 20,
    color: 'white',
    top: 410,
  }
})