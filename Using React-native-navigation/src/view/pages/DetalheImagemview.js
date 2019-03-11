import React, { Component } from 'react'
import { View, Image, StyleSheet } from 'react-native'
import ImageViewer from 'react-native-image-zoom-viewer'

export default class DetalheImagemView extends Component {
  render() {
    const images = [{ url: this.props.propriedade }]
    return (
      <View style={styles.container}>
        <ImageViewer
          imageUrls={images} style={styles.imagem} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white'
  },

})