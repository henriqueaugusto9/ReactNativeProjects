import axios from 'axios'
import React, { Component } from 'react'
import ConfrontosView from './ControntosView'
import { info, lerDadosUsuario } from '../../../../../config/config'
import ConfrontosViewFutebol from './ConfrontosViewFutebol'
import { apiConfrontos } from '../../../../../routes/routes'

export default class ConfrontosViewController extends Component {
  state = {
    jogos: [],
    vitorias: [],
    empates: [],
    derrotas: [],
    partida: [],
    loading: false,
    corPrimaria: info.colors.primary
  }

  componentDidMount() {
    this.loading(true)
    this.getConfrontos()
  }

  loading(value) {
    this.setState({ loading: value })
  }

  mudarEstados(lista) {
    this.setState({
      jogos: lista.qtdJogos,
      empates: lista.empates,
      vitorias: lista.derrotas,
      derrotas: lista.vitorias,
      partida: lista.confrontos
    })
  }

  async getConfrontos() {
    try {
      const { token } = await lerDadosUsuario()
      const resp = await axios.get(`${apiConfrontos}?id=${this.props.id}&idClube=${info.id}`,
        { headers: { authentication: token } }
      )
      await this.mudarEstados(resp.data.content)
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

  tratarDia(dataApi) {
    const data = new Date(dataApi)
    const dia = data.getUTCDate()
    return dia
  }

  tratarMes(dataApi) {
    const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
    const data = new Date(dataApi)
    const mes = data.getUTCMonth()
    return meses[mes]
  }

  tratarSemana(dataApi) {
    const semana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado']
    const data = new Date(dataApi)
    const day = data.getUTCDay()
    const week = semana[day]
    return week
  }

  render() {
    return (
      info.nomeEsporte === 'Futebol' ?
        <ConfrontosViewFutebol
          state={this.state}
          tratarDia={this.tratarDia}
          tratarMes={this.tratarMes}
          tratarSemana={this.tratarSemana}
        /> :
        <ConfrontosView
          state={this.state}
          tratarDia={this.tratarDia}
          tratarMes={this.tratarMes}
          tratarSemana={this.tratarSemana}
        />
    )
  }
}