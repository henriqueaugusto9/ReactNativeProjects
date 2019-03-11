import axios from 'axios'
import React, { Component } from 'react'
import { info, lerDadosUsuario } from '../../../../../config/config'
import CalendarioView from './CalendarioView'
import { Alert, View, AsyncStorage } from 'react-native'
import { apiProximasPartidas } from '../../../../../routes/routes'

export default class CalendarioViewController extends Component {

  state = {
    partidas: [],
    loading: true,
    corPrimaria: info.colors.primary
  }

  componentDidMount() {
    this.buscaProximasPartidas()
  }

  buscaProximasPartidas = async () => {
    try {
      const { token } = await lerDadosUsuario()
      const resp = await axios.get(`${apiProximasPartidas}/${info.id}`, {
        headers: { authentication: token }
      })
      this.setState({ partidas: resp.data.content })
      this.carregando(false)
    } catch (error) {
      if (error.response.data.statusCode === 500) {
        Alert.alert(
          'Erro',
          'Serviço temporariamente indisponível'
        )
      }
    }
  }

  buscaDia(dataApi) {
    const data = new Date(dataApi)
    const dia = data.getUTCDate()
    return dia
  }

  buscaMes(dataApi) {
    const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
    const data = new Date(dataApi)
    const mes = data.getUTCMonth()
    return meses[mes]
  }

  buscaSemana(dataApi) {
    const semana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado']
    const data = new Date(dataApi)
    const day = data.getUTCDay()
    const week = semana[day]
    return week
  }

  carregando(value) {
    this.setState({ loading: value })
  }

  render() {
    return (
      <View>
        <CalendarioView
          state={this.state}
          buscaDia={this.buscaDia}
          buscaMes={this.buscaMes}
          buscaSemana={this.buscaSemana}
          carregando={this.loading}
        />
      </View>
    )
  }
}
