import axios from 'axios'
import React, { Component } from 'react'
import { View } from 'react-native'
import { Alert, AsyncStorage, StyleSheet } from 'react-native'
import JogadorDetalheView from './JogadorView'
import { apiJogadorIndividual } from '../../../../routes/routes'
import Tab from './TabView'
import { info, lerDadosUsuario } from '../../../../config/config'
import {container} from '../../../../ioc/container'

export default class JogadorDetalheViewController extends Component {

  state = {
    imagem: null,
    dadosTemporada: [],
    loading: false,
    corPrimaria: info.colors.primary,
    apelido: ''
  }

  componentDidMount() {
    this.getImagem()
  }

  carregamento(){
    this.setState({
      loading: true
    })
  }

  getImagem = async () => {
    try {
      this.carregamento()
      const { token } = await lerDadosUsuario()
      const resp = await axios.get(`${apiJogadorIndividual}/${this.props.propriedade}`,
        {
          headers: { authentication: token }
        })
      this.atualizaDados(resp.data.content)
    } catch (error) {
      if (error.response.data.statusCode === 500) {
        Alert.alert(
          'Erro',
          'Serviço temporariamente indisponível'
        )
      }
    }
  }

  atualizaDados(dados){
    this.setState({
      imagem: dados.imagem,
      apelido: `${dados.apelido} #${dados.numeroCamisa}`,
      loading: false
    })
  }

  detalheImagem(idImagem, nome){
    container.navigation.DetalheImagem('Jogadores', idImagem, info.corPrimaria, nome)
  }

  trataIdade(data) {
    let milissegundos = Date.now() - new Date(data)
    return Math.floor(milissegundos / 1000 / 60 / 60 / 24 / 365.25)
  }

  render() {
    return (
      <View style={styles.container}
      >
        <JogadorDetalheView
          state={this.state}
          detalheImagem={this.detalheImagem}
        />
        <Tab
          id={this.props.propriedade}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 2
  }
})
