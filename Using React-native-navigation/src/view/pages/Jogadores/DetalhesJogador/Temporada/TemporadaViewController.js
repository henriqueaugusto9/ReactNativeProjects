import axios from 'axios'
import React, { Component } from 'react'
import Futebol from './TemporadaFutebol'
import Basquete from './TemporadaBasquete'
import { Alert, AsyncStorage } from 'react-native'
import { info, lerDadosUsuario } from '../../../../../config/config'
import { apiJogadorDesempenho } from '../../../../../routes/routes'

export default class TemporadaView extends Component {
  state = {
    dadosFutebol: [],
    loading: false
  }

  componentDidMount() {
    this.buscarTemporada()
  }

  carregamento(){
    this.setState({
      loading: true
    })
  }

  buscarTemporada = async () => {
    try {
      this.carregamento()
      const { token } = await lerDadosUsuario()
      const resp = await axios.get(`${apiJogadorDesempenho}?id=${this.props.id}`,
        {
          headers: { authentication: token }
        })
      this.alterarEstado(resp.data.content)
    } catch (error) {
      if (error.response.data.statusCode === 500) {
        Alert.alert(
          'Erro',
          'Serviço temporariamente indisponível'
        )
      }
    }
  }

  alterarEstado(param) {
    this.setState({ 
      loading: false,
      dadosFutebol: param 
    })
  }

  filhas(first, second) {
    return Math.floor((first * 100) / second)
  }

  render() {
    return info.nomeEsporte === 'Futebol' ?
      <Futebol state={this.state} filhas={this.filhas} /> :
      <Basquete state={this.state} filhas={this.filhas} />
  }
}