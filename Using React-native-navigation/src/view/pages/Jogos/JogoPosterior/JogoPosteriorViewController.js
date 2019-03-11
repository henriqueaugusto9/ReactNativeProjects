import React, { Component } from 'react'
import { Alert, View } from 'react-native'
import JogoPosteriorView from './JogoPosteriorView'
import { container } from '../../../../ioc/container'
import { apiPartidasHome } from '../../../../routes/routes'
import { info, lerDadosUsuario } from '../../../../config/config'
import axios from 'axios'

export default class JogoAtualViewController extends Component {

  state = {
    dados: [],
    semRegistros: false,
    mandante: [],
    visitante: [],
    loading: false,
    background: {
      backgroundColor: info.colors.primary
    },
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
      const resp = await axios.get(`${apiPartidasHome}${info.id}`,
        {
          headers: { authentication: token }
        })
      this.filtrarPartidas(resp.data.content)
    } catch (error) {
      if (error.response.data.statusCode === 500) {
        Alert.alert(
          'Erro',
          'Serviço temporariamente indisponível'
        )
      }
    }
  }

  filtrarPartidas(lista) {
    if (lista.partida3 === null) {
      this.semRegistros()
    } else {
      this.atualizaLista(
        lista.partida3[0],
        lista.partida3[0].clubeMandante,
        lista.partida3[0].clubeVisitante
      )
    }
  }

  semRegistros() {
    this.setState({
      loading: false,
      semRegistros: true
    })
  }

  atualizaLista(novaLista, mandante, visitante) {
    this.setState({
      loading: false,
      dados: novaLista,
      mandante: mandante,
      visitante: visitante
    })
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

  verDetalhes(nome, prop) {
    container.navigation.Detalhes('Home', nome, prop, info.corPrimaria)
  }


  render() {
    return (
      <View>
        <JogoPosteriorView
          buscaDia={this.buscaDia}
          buscaSemana={this.buscaSemana}
          buscaMes={this.buscaMes}
          state={this.state}
          verDetalhes={this.verDetalhes}
        />
      </View>
    )
  }
}
