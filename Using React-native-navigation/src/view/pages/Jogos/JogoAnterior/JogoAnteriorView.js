import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, ActivityIndicator, TouchableOpacity } from 'react-native'
import { info } from '../../../../config/config'

export default class JogoAtualView extends Component {
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

    if (this.props.state.semRegistros) {
      return (
        <View style={[styles.semConfrontos, this.props.state.background]}>
          <Text style={styles.informacao}>Ainda não temos confrontos!</Text>
        </View>
      )
    }

    return (
      <View style={styles.container}>
        <Text
          style={styles.descricao}>{`${this.props.state.dados.nomeCampeonato} - ${this.props.state.dados.fase} - ${this.props.state.dados.rodada} rodada`}
        </Text>
        <Text style={styles.informacao}>
          {
            `${this.props.buscaSemana(this.props.state.dados.data)}, ${this.props.buscaDia(this.props.state.dados.data)} de ${this.props.buscaMes(this.props.state.dados.data)}`
          }
        </Text>
        <View style={styles.confronto}>
          <View style={styles.clube}>
            <View style={styles.containerImagem}>
              <Image source={{ uri: this.props.state.mandante.logo }} style={styles.imagemClube} />
            </View>
            <Text style={styles.descricao}>{this.props.state.mandante.apelido}</Text>
          </View>

          <View style={styles.infoPrincipal}>
            <View style={styles.detalhes}>
              <TouchableOpacity
                onPress={() => this.props.verDetalhes(`${this.props.state.mandante.apelido} X ${this.props.state.visitante.apelido}`, this.props.state.dados.id)}
                style={[styles.botaoDetalhes, { backgroundColor: info.colors.primary }]}
              >
                <Text style={styles.textoDetalhes}>DETALHES</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.descricaoPartida}>PARTIDA ENCERRADA</Text>
          </View>

          <View style={styles.clube}>
            <View style={styles.containerImagem}>
              <Image source={{ uri: this.props.state.visitante.logo }} style={styles.imagemClube} />
            </View>
            <Text style={styles.descricao}>{this.props.state.visitante.apelido}</Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'center'
  },

  activity: {
    height: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },

  semConfrontos: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },

  informacao: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFFFFF'
  },

  data: {
    fontSize: 14,
    color: '#FFFFFF',
    textAlign: 'center'
  },

  local: {
    fontSize: 13,
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 10
  },

  confronto: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginBottom: 10
  },

  infoPrincipal: {
    alignItems: 'center',
    marginTop: 10,
  },

  icone: {
    marginHorizontal: 10,
  },

  descricao: {
    fontSize: 14,
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center'
  },

  clube: {
    alignItems: 'center',
    width: 80,
    height: 80
  },

  containerImagem: {
    width: 80,
    height: 80
  },

  imagemClube: {
    flex: 1,
    height: null,
    width: null,
    resizeMode: 'contain',
    marginBottom: 10
  },

  detalhes: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  pontos: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },

  botaoDetalhes: {
    height: 30,
    width: 90,
    borderRadius: 3,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10
  },

  textoDetalhes: {
    color: '#FFF',
    fontSize: 14
  },

  descricaoPartida: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginTop: 5
  }

})