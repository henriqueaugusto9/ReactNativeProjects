import React, { Component } from 'react'
import { View } from 'react-native'
import NotificacoesView from './NotificacoesView'
import { Navigation } from 'react-native-navigation'
import NavigationController from '../../navigationController'
import { BackHandler, ToastAndroid } from 'react-native'

let out = 0

export default class NotificacoesViewController extends NavigationController {

  constructor(props) {
    super(props)
    Navigation.events().bindComponent(this)
  }

  navigationButtonPressed({ buttonId }) {
    super.navigationButtonPressed({ buttonId }, this.props.componentId)
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton)
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton)
  }

  handleBackButton() {
    if (out === 1) {
      BackHandler.exitApp()
      out = 0
    } else if ( out < 2) {
      ToastAndroid.show('Pressione novamente para sair', ToastAndroid.SHORT)
      out += 1
      return true
    }
  }

  render() {
    return (
      <View>
        <NotificacoesView />
      </View>
    )
  }
}
