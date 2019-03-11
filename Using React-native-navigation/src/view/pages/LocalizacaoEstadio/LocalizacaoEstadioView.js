import React, { Component } from 'react'
import {
  View,
  Text,
  WebView,
  StyleSheet,
  ActivityIndicator,
} from 'react-native'

export default class LocalizacaoEstadioView extends Component {
  render() {
    if (this.props.state.loading) {
      return (
        <View style={styles.activity}>
          <ActivityIndicator
            size={'large'}
            color={this.props.state.corPrimaria}
          />
        </View>
      )
    }
    return (
      <View style={styles.container}>     
        <WebView
          source={{ uri: this.props.state.link }}
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

  activity:{
    height: '100%',
    width: '100%',
    backgroundColor: '#FFFFFF',
    alignItems:'center',
    justifyContent: 'center'
  }
})