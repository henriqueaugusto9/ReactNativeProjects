import { View } from 'react-native'
import SiteClubeView from './clubeView'
import React, { Component } from 'react'
import { info } from '../../../config/config'

export default class SiteSocioViewController extends Component {

  state = {
    url: info.linkAssociacao
  }

  render() {
    return (
      <View>
        <SiteClubeView
          state={this.state}
        />
      </View>
    )
  }
}
