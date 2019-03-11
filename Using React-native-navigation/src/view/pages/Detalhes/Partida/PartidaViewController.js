import React, { Component } from 'react'
import { Alert, View, AsyncStorage } from 'react-native'
import PartidaView from './PartidaView'
import { apiPartidaDetalhes } from '../../../../routes/routes'
import axios from 'axios'
import { info, lerDadosUsuario } from '../../../../config/config'

export default class PartidaViewController extends Component {

  state = {
    dados: [],
    idPartida: this.props.idPartida,
    mandante: '',
    visitante: '',
    loading: false,
    corPrimaria: info.colors.primary
  }

  componentDidMount() {
    this.buscaJogo()
  }

  carregamento() {
    this.setState({
      loading: true
    })
  }

  async buscaJogo() {
    try {
      this.carregamento()
      const { token } = await lerDadosUsuario()
      const resp = await axios.get(`${apiPartidaDetalhes}${this.state.idPartida}`,
        {
          headers: { authentication: token }
        })
      this.atualizaLista(
        resp.data.content,
        resp.data.content.clubeMandante,
        resp.data.content.clubeVisitante
      )
    } catch (error) {
      if (error.response.data.statusCode === 500) {
        Alert.alert(
          'Erro',
          'Serviço temporariamente indisponível'
        )
      }
    }
  }

  atualizaLista(novaLista, mandante, visitante) {
    this.setState({
      loading: false,
      dados: novaLista,
      mandante: mandante,
      visitante: visitante
    })
  }

  converteData(dataApi) {
    var data = new Date(dataApi)
    var dia = ('0' + (data.getUTCDate())).slice(-2)
    var mes = ('0' + (data.getMonth() + 1)).slice(-2)
    var ano = data.getFullYear()
    data = `${dia}/${mes}/${ano}`
    return data
  }

  render() {
    return (
      <View style={{
        flex: 2,
        backgroundColor: info.colors.primary,
      }}>
        <PartidaView
          state={this.state}
          converteData={this.converteData}
        />
      </View>
    )
  }
}
