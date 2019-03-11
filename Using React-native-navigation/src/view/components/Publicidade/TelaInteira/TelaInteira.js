import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity, Image, View } from 'react-native'
import { IconeMaterialComunity } from '../../Icons/index'

export default class Publicidade extends Component {

  state = {
    visivel: false,
    imagem: '',
    link: '',
    titulo: '',
  };

  componentWillReceiveProps() {
    this.setState({
      visivel: this.props.visivel,
      imagem: this.props.imagem,
      link: this.props.link,
      titulo: this.props.titulo,
    })
  }

  mostrarPublicidade() {
    if (this.state.visivel) {
      return (
        <TouchableOpacity 
        style={styles.container}
        onPress={() => [this.props.abrirLink(this.state.titulo, this.state.link), this.setState({visivel: false})]}
        >
          <TouchableOpacity
            onPress={() => this.setState({ visivel: false })}
            style={styles.fechar}>
            <IconeMaterialComunity
              name={'close'}
              size={20}
              color={'#FFF'}
            />
          </TouchableOpacity>
          <Image source={{ uri: this.state.imagem }} style={styles.imagem} />
        </TouchableOpacity>
      )
    } else {
      return null
    }
  }

  render() {
    return (
      this.mostrarPublicidade()
    )
  }
}
const styles = StyleSheet.create({
  fundo: {

    height: '100%',
    width: '100%',
    opacity: 0.4
  },

  container: {
    height: 300,
    width: 200,
    alignSelf: 'center',
    position: 'absolute',
    top: '10%',
  },

  imagem: {
    flex: 1,
    resizeMode: 'cover',
  },

  fechar: {
    position: 'absolute',
    zIndex: 1,
    alignSelf: 'flex-end'
  }
})
