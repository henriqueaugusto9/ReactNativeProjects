import React, { Component } from 'react'
import { View, StyleSheet, Text, Image, ActivityIndicator, TouchableOpacity } from 'react-native'
import { IconeMaterialComunity } from '../../../../../../components/Icons'

export default class DesempenhoView extends Component {
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
        <View style={[styles.head, this.props.state.corFundo]}>
          <View style={styles.dadosJogador}>
            <Text style={styles.nome}>{this.props.state.jogador.nome}</Text>
            <Text style={styles.textoDados}>Camisa #{this.props.state.jogador.numeroCamisa}</Text>
            <Text style={styles.textoDados}>{this.props.state.jogador.nomePosicao}</Text>
            <Text style={styles.textoDados}>{this.props.state.jogador.altura}m</Text>
            <Text style={styles.textoDados}>{this.props.trataIdade(this.props.state.jogador.dataNascimento)} anos</Text>
          </View>

          <View style={styles.imagem}>
            <View style={styles.containerFoto}>
              {
                this.props.state.jogador.imagem !== null ?
                  <TouchableOpacity
                    style={styles.containerFoto}
                    onPress={() => this.props.detalheImagem(this.props.state.jogador.imagem, `${this.props.state.jogador.apelido} #${this.props.state.jogador.numeroCamisa}`)}>
                    <Image
                      source={{ uri: this.props.state.jogador.imagem }}
                      style={styles.picture}
                    />
                  </TouchableOpacity> : null
              }
            </View>
          </View>
        </View>
        <Text style={[styles.titulo, this.props.state.corFonte]}>Desempenho na partida</Text>
        {
          this.props.state.dados.length !== 0 ?
            this.props.state.dados.map(item => (
              <View key={item.nome} style={styles.resultados}>
                <Text style={styles.itemDesempenho}>{item.nome}</Text>
                <Text style={styles.valorItemDesempenho}>{this.props.verificaTipo(item)}</Text>
              </View>
            )) :
            <Text style={styles.semInfo}>Ainda não há informações cadastradas!</Text>
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#FFFFFF'
  },

  activity: {
    height: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },

  head: {
    paddingTop: 20,
    paddingLeft: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start'
  },

  titulo: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 20,
  },

  resultados: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20
  },

  nome: {
    fontSize: 16,
    color: '#FFFFFF',
    marginBottom: 10
  },

  textoDados: {
    fontSize: 16,
    color: '#FFFFFF',
    marginBottom: 10
  },

  picture: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover'
  },

  containerFoto: {
    width: 165,
    height: 170,
    overflow: 'hidden',
  },

  itemDesempenho: {
    fontSize: 15,
    color: '#000000'
  },

  valorItemDesempenho: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#000000'
  },

  semInfo: {
    textAlign: 'center',
  }

})