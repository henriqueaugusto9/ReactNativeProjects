import React, { Component } from 'react'
import { Alert, View, AsyncStorage } from 'react-native'
import InformacoesViewBasquete from './InformacoesViewBasquete'
import InformacoesViewFutebol from './InformacoesViewFutebol'
import { info, lerDadosUsuario } from '../../../../../config/config'
import { apiInformacoesHome } from '../../../../../routes/routes'
import axios from 'axios'

export default class Informacoes extends Component {
  state = {
    lista: [],
    loading: false,
    campeonatos: [],
    esporte: info.nomeEsporte,
    corPrimaria: info.colors.primary
  }

  componentDidMount() {
    this.buscaInfo()   
  }

  carregamento() {
    this.setState({
      loading: true
    })
  }

  async buscaInfo() {
    try {
      this.carregamento()
      const { token } = await lerDadosUsuario()
      const resp = await axios.get(`${apiInformacoesHome}${info.id}`,
        {
          headers: { authentication: token }
        })
      this.atualizaInfo(resp.data.content)
    } catch (error) {
      if (error.response.data.statusCode === 500){
        Alert.alert(
          'Erro',
          'Serviço temporariamente indisponível'
        )
      }
    }
  }

  atualizaInfo(lista) {
    this.setState({
      loading: false,
      lista: lista,
      campeonatos: lista.campeonatos
    })
  }

  render() {
    return (
      <View>
        {
          this.state.esporte === 'Futebol' ?
            <InformacoesViewFutebol
              state={this.state}
            /> :
            <InformacoesViewBasquete
              state={this.state}
            />
        }
      </View>
    )
  }
}
