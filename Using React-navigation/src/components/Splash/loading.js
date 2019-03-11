import React, { Component } from 'react'
import {
  ActivityIndicator,
} from 'react-native'

class Loading extends Component {
  render() {
    return (
      <ActivityIndicator size="large" color='white' />
    )
  }
}
export default Loading
