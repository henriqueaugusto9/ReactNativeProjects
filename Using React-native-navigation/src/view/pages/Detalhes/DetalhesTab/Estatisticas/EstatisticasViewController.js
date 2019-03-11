import axios from 'axios'
import React, { Component } from 'react'
import EstatisticasView from './EstatisticasView'
import { info, lerDadosUsuario } from '../../../../../config/config'
import EstatisticasViewFutebol from './EstatisticasViewFutebol'
import {
  Alert,
} from 'react-native'
import {
  apiPontuacaoPartida,
  apiEstatisticasPartida
} from '../../../../../routes/routes'

export default class EstatisticasViewController extends Component {

  state = {
    estatisticas: [],
    loading: false,
    tableData: [],
    mandante: [],
    visitante: [],
    siglaMandante: null,
    siglaVisitante: null,
    corPrimaria: info.colors.primary,
    corPrimariaFonte: {
      color: info.colors.primary
    }
  }

  componentDidMount() {
    this.loading(true)
    this.start()
  }

  loading(value) {
    this.setState({ loading: value })
  }

  async start() {
    await this.buscarPontuacao()
    await this.buscarEstatisticas()
  }

  conteudoTabela(lista) {
    if (lista[0].pontuacaoMandante.pontuacao == null && lista[0].pontuacaoMandante.pontuacao == null) {
      this.state.tableData.push(
        ['Períodos', '1º', '2º', '3º', '4º', 'Total'],
        [
          `${lista[0].pontuacaoMandante.sigla}`,
          '-', '-', '-', '-',
          this.pontuacaoMandante(lista)
        ],
        [
          `${lista[0].pontuacaoVisitante.sigla}`,
          '-', '-', '-', '-',
          this.pontuacaoVisitante(lista)
        ],
      )
      this.setState({
        siglaMandante: `${lista[0].pontuacaoMandante.sigla}`,
        siglaVisitante: `${lista[0].pontuacaoVisitante.sigla}`
      })
    } else {
      this.state.tableData.push(
        ['Períodos', '1º', '2º', '3º', '4º', 'Total'],
        [
          `${lista[0].pontuacaoMandante.sigla}`,
          `${lista[0].pontuacaoMandante.pontuacao[0].valor}`,
          `${lista[0].pontuacaoMandante.pontuacao[1].valor}`,
          `${lista[0].pontuacaoMandante.pontuacao[2].valor}`,
          `${lista[0].pontuacaoMandante.pontuacao[3].valor}`,
          this.pontuacaoMandante(lista)
        ],
        [
          `${lista[0].pontuacaoVisitante.sigla}`,
          `${lista[0].pontuacaoVisitante.pontuacao[0].valor}`,
          `${lista[0].pontuacaoVisitante.pontuacao[1].valor}`,
          `${lista[0].pontuacaoVisitante.pontuacao[2].valor}`,
          `${lista[0].pontuacaoVisitante.pontuacao[3].valor}`,
          this.pontuacaoVisitante(lista)
        ],
      )
      this.setState({
        siglaMandante: `${lista[0].pontuacaoMandante.sigla}`,
        siglaVisitante: `${lista[0].pontuacaoVisitante.sigla}`
      })
    }
  }

  gols(lista) {
    this.setState({
      mandante: lista[0].pontuacaoMandante,
      visitante: lista[0].pontuacaoVisitante,
    })
  }

  pontuacaoMandante(lista) {
    if (lista[0].pontuacaoMandante.pontuacaoPartida == null) {
      let soma = 0
      lista[0].pontuacaoMandante.pontuacao.map(item => (
        soma += item.valor
      ))
      return soma
    } else {
      let pontuacao = lista[0].pontuacaoMandante.pontuacaoPartida
      return pontuacao
    }
  }

  pontuacaoVisitante(lista) {
    if (lista[0].pontuacaoVisitante.pontuacaoPartida == null) {
      let soma = 0
      lista[0].pontuacaoVisitante.pontuacao.map(item => (
        soma += item.valor
      ))
      return soma
    } else {
      let pontuacao = lista[0].pontuacaoVisitante.pontuacaoPartida
      return pontuacao
    }
  }

  filhas(first, second) {
    return Math.floor((first * 100) / second)
  }

  async buscarPontuacao() {
    const { token } = await lerDadosUsuario()
    try {
      const resp = await axios.get(`${apiPontuacaoPartida}/${this.props.id}`,
        { headers: { authentication: token } })
      info.nomeEsporte === 'Futebol' ?
        await this.gols(resp.data.content) : await this.conteudoTabela(resp.data.content)
    } catch (error) {
      if (error.response.data.statusCode === 500) {
        Alert.alert(
          'Erro',
          'Serviço temporariamente indisponível'
        )
      }
    }
  }

  async buscarEstatisticas() {
    const { token } = await lerDadosUsuario()
    try {
      const resp = await axios.get(`${apiEstatisticasPartida}/${this.props.id}`,
        { headers: { authentication: token } })
      this.setState({ estatisticas: resp.data.content })
      this.loading(false)
    } catch (error) {
      if (error.response.data.statusCode === 500) {
        Alert.alert(
          'Erro',
          'Serviço temporariamente indisponível'
        )
      }
    }
  }

  render() {
    return (
      info.nomeEsporte === 'Futebol' ?
        <EstatisticasViewFutebol
          state={this.state}
          columns={this.columns}
          dataSource={this.dataSource}
          filhas={this.filhas}
        /> :
        <EstatisticasView
          state={this.state}
          columns={this.columns}
          dataSource={this.dataSource}
          filhas={this.filhas}
        />
    )
  }
}

