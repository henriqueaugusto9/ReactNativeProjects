import React, { Component } from 'react'
import { Alert, View } from 'react-native'
import JogoAtualView from './JogoAtualView'
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
    if (lista.partida2 === null && lista.partida1 === null) {
      this.semRegistros()
    } else if (lista.partida2 === null && lista.partida1.length === 1 || lista.partida2 === null) {
      this.atualizaLista(
        lista.partida1[0],
        lista.partida1[0].clubeMandante,
        lista.partida1[0].clubeVisitante
      )
    } else {
      this.atualizaLista(
        lista.partida2[0],
        lista.partida2[0].clubeMandante,
        lista.partida2[0].clubeVisitante
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
      visitante: visitante,
      background: {
        backgroundColor: info.colors.primary
      }
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

  converteData(dataApi) {
    let data = new Date(dataApi)
    let dia = ('0' + (data.getUTCDate())).slice(-2)
    let mes = ('0' + (data.getMonth() + 1)).slice(-2)
    let ano = data.getFullYear()
    data = `${dia}/${mes}/${ano}`
    return data
  }

  verDetalhes(nome, prop) {
    container.navigation.Detalhes('Home', nome, prop, info.corPrimaria)
  }

  render() {
    return (
      <View>
        <JogoAtualView
          state={this.state}
          buscaDia={this.buscaDia}
          buscaSemana={this.buscaSemana}
          buscaMes={this.buscaMes}
          converteData={this.converteData}
          verDetalhes={this.verDetalhes}
        />
      </View>
    )
  }
}
