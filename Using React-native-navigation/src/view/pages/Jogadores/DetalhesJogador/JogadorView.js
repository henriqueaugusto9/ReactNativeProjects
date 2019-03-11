import React, { Component } from 'react'
import { View, StyleSheet, Image, ActivityIndicator, TouchableOpacity } from 'react-native'
import { IconeMaterial } from '../../../components/Icons'

export default class JogadorDetalheView extends Component {
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
        {
          this.props.state.imagem === null ?
            <IconeMaterial
              name={'person'}
              size={260}
              style={styles.imagemIcone}
            /> :
            <TouchableOpacity style={styles.container} onPress={() => this.props.detalheImagem(this.props.state.imagem, this.props.state.apelido)}>
              <Image
                source={{ uri: this.props.state.imagem }}
                style={styles.imagem}
              />
            </TouchableOpacity>
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 4.5,
    backgroundColor: 'white',
  },

  activity: {
    height: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },

  imagem: {
    flex: 1,
    resizeMode: 'cover',
  },

  imagemIcone: {
    position: 'absolute',
    alignSelf: 'center',
  }
})