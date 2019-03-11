import React, { Component } from 'react'
import InformacoesView from './InformacoesView'
import { Alert, AsyncStorage } from 'react-native'
import { apiJogadorIndividual } from '../../../../../routes/routes'
import { info, lerDadosUsuario } from '../../../../../config/config'
import axios from 'axios'

export default class InformacoesViewController extends Component {

  state={
    dadosJogador: [],
    corPrimaria: info.colors.primary,
    loading: false
  }

  componentDidMount(){
    this.buscarInformacoes()
  }

  carregamento(){
    this.setState({
      loading: true
    })
  }
  buscarInformacoes = async () =>{
    try{
      this.carregamento()
      const { token } = await lerDadosUsuario()
      const resp = await axios.get(`${apiJogadorIndividual}/${this.props.id}`,
        {
          headers: { authentication: token } 
        })
      this.atualizaInfo(resp.data.content)
    } catch (error) {
      if (error.response.data.statusCode === 500) {
        Alert.alert(
          'Erro',
          'Serviço temporariamente indisponível'
        )
      }
    }
  }

  atualizaInfo(lista){
    this.setState({
      loading: false,
      dadosJogador: lista
    })
  }

  trataIdade(data) {
    let milissegundos = Date.now() - new Date(data)
    return Math.floor(milissegundos / 1000 / 60 / 60 / 24 / 365.25)
  }

  render() {
    return (
      <InformacoesView
        state={this.state}
        trataIdade={this.trataIdade}
      />
    )
  }
}