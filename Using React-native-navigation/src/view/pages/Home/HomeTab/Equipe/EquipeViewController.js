import axios from 'axios'
import EquipeView from './EquipeView'
import React, { Component } from 'react'
import { info, lerDadosUsuario } from '../../../../../config/config'
import { Alert, View, AsyncStorage } from 'react-native'
import { apiJogadores } from '../../../../../routes/routes'

export default class EquipeViewController extends Component {
  state = {
    dados: [],
    loading: false,
    navegacao: 'Jogador',
    corPrimaria: info.colors.primary
  }

  componentDidMount() {
    this.buscaJogadores()
  }

  carregamento() {
    this.setState({
      loading: true
    })
  }

  atualizaLista(novaLista) {
    this.setState({
      loading: false,
      dados: novaLista,
    })
  }

  async buscaJogadores() {
    try {
      this.carregamento()
      const { token } = await lerDadosUsuario()
      const resp = await axios.get(`${apiJogadores}${info.id}`,
        {
          headers: { authentication: token }
        })
      this.atualizaLista(resp.data.content)
    } catch (error) {
      if (error.response.data.statusCode === 500){
        Alert.alert(
          'Erro',
          'Serviço temporariamente indisponível'
        )
      }
    }
  }

  trataIdade(data) {
    let milissegundos = Date.now() - new Date(data)
    return Math.floor(milissegundos / 1000 / 60 / 60 / 24 / 365.25)
  }

  render() {
    return (
      <View>
        <EquipeView
          state={this.state}
          filtrarLista={this.filtrarLista}
          trataIdade={this.trataIdade}
          dados={this.state.dados}
        />
      </View>
    )
  }
}