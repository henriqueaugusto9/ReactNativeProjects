import { View } from 'react-native'
import SiteClubeView from './clubeView'
import React, { Component } from 'react'
import { info } from '../../../config/config'


export default class SiteClubeViewController extends Component {

  state = {
    url: info.linkClube
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
