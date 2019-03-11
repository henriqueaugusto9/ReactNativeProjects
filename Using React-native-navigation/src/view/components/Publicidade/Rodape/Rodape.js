import React, { Component } from 'react'
import { TouchableOpacity, Image, StyleSheet } from 'react-native'
import { IconeMaterialComunity } from '../../Icons/index'

export default class Rodape extends Component {
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
                onPress={() => [this.props.abrirLink(this.state.titulo, this.state.link), this.setState({visivel: false})]}
                style={styles.container}
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
    container: {
        height: 60,
        width: '100%',
        position: 'absolute',
        bottom: 0
    },

    imagem: {
        flex: 1,
        resizeMode: 'cover'
    },

    fechar: {
        position: 'absolute',
        zIndex: 1,
        alignSelf: 'flex-end'
    }
})