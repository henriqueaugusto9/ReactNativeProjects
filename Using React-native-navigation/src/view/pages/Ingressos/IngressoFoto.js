import React from 'react'
import {
  StyleSheet,
  View,
  Image,
  Text,
} from 'react-native'
import { info } from '../../../config/config'
import { Navigation } from 'react-native-navigation'
import NavigationController from '../../navigationController'
import Share from 'react-native-share'
import RNFetchBlob from 'react-native-fetch-blob'

export default class IngressosFoto extends NavigationController {

  constructor(props) {
    super(props)
    Navigation.events().bindComponent(this)
  }

  navigationButtonPressed() {
    this.compartilharFoto()
  }

  carregando(value) {
    this.setState({ loading: value })
  }

  async compartilharFoto() {
    const fs = RNFetchBlob.fs
    let imagePath = null
    let link = this.props.propriedade
    let extensao = link.split('.')
    extensao = extensao[extensao.length - 1]
    let b64 = 'data:image/' + extensao + ';base64,'
    await RNFetchBlob.config({
      fileCache: true
    })
      .fetch('GET', link)
      .then(resp => {
        imagePath = resp.path()
        return resp.readFile('base64')
      })
      .then(base64Data => {
        b64 = b64 + base64Data
        return fs.unlink(imagePath)
      })
      
    const shareOptions = {
      title: 'Share file',
      url: b64,
    };
    return Share.open(shareOptions)
  }

  render() {
    return (
      <View style={styles.container}>
        {
          this.props.propriedade != null ?
            <Image source={{ uri: this.props.propriedade }} style={{ width: '100%', height: '100%' }} />
            :
            <Text style={{
              fontSize: 17,
              color: info.colors.primary
            }}>O ingresso desta partida ainda não foi cadastrado.</Text>
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    height: '100%',
    width: '100%',
    paddingHorizontal: 10
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 40,
    backgroundColor: 'white',
    height: 50,
  }
})

