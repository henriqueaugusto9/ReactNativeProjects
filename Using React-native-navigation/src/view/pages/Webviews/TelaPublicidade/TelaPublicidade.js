import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { WebView } from 'react-native-webview'

export default class TelaPublicidade extends Component {
  render() {
    return (
      <View style={styles.container}>
        <WebView
          source={{ uri: this.props.propriedade }}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    padding: 10,
    backgroundColor: '#fff',
  },

})