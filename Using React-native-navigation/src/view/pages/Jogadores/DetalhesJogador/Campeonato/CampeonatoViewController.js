import axios from 'axios'
import React, { Component } from 'react'
import CampeonatoView from './CampeonadoView'
import { Alert, AsyncStorage } from 'react-native'
import { apiJogadorCampeonato, apiJogadorDesempenho } from '../../../../../routes/routes'
import { info, lerDadosUsuario } from '../../../../../config/config'

export default class TemporadaView extends Component {

  state = {
    campeonato: [],
    estatisticas: [],
    titulo: 'titulo',
    content: 'conteudo ',
    loading: false,
    corPrimaria: info.colors.primary
  }

  componentDidMount() {
    this.start()
  }

  carregamento() {
    this.setState({
      loading: true
    })
  }

  async start() {
    await this.buscarCampeonato()
    await this.buscarEstatisticas()
  }

  buscarCampeonato = async () => {
    try {
      this.carregamento()
      const { token } = await lerDadosUsuario()
      const resp = await axios.get(`${apiJogadorCampeonato}?id=${this.props.id}`,
        {
          headers: { authentication: token }
        })
      this.atualizaCampeonato(resp.data.content)
    } catch (error) {
      if (error.response.data.statusCode === 500) {
        Alert.alert(
          'Erro',
          'Serviço temporariamente indisponível'
        )
      }
    }
  }

  atualizaCampeonato(lista) {
    this.setState({
      loading: false,
      campeonato: lista
    })
  }

  buscarEstatisticas = async () => {
    try {
      for (let i = 0; i < this.state.campeonato.length; i++) {
        let id = this.state.campeonato[i].id
        let { token } = await lerDadosUsuario()
        let resp = await axios.get(
          `${apiJogadorDesempenho}?id=${this.props.id}&idCampeonato=${id}`,
          {
            headers: { authentication: token }
          })
        await this.setState({ estatisticas: resp.data.content })
      }
    } catch (error) {
      if (error.response.data.statusCode === 500) {
        Alert.alert(
          'Erro',
          'Serviço temporariamente indisponível'
        )
      }
    }
  }

  verifyData(item) {
    if (item.filha1 != null) {
      return `${item.filha1}/${item.filha2} (${Math.floor((item.filha1 * 100) / item.filha2)}%)`
    } else if (item.porcentagem === true) {
      return item.valor.concat(' %')
    } else if (item.porcentagem != true) {
      if (item.tipoEstatistica == 'Tempo') {
        return item.valor.concat(' min')
      }
      else return item.valor
    }
  }

  render() {
    return (
      <CampeonatoView
        state={this.state}
        verifyData={this.verifyData}
      />
    )
  }
}
