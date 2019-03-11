import React from 'react'
import { Alert, View } from 'react-native'
import HistoricoPartidasView from './HistoricoPartidasView.js'
import { info, lerDadosUsuario } from '../../../config/config'
import axios from 'axios'
import { apiTemporadasClube, apiPartidasTemporada, apiBuscaPublicidade } from '../../../routes/routes.js'
import { Navigation } from 'react-native-navigation'
import NavigationController from '../../navigationController'
import { BackHandler, ToastAndroid } from 'react-native'
import TelaInteira from '../../components/Publicidade/TelaInteira/TelaInteira'
import Rodape from '../../components/Publicidade/Rodape/Rodape'

export const data = (dataInicial, dataFinal) => {
  let inicioTemporada = new Date(dataInicial)
  let fimTemporada = new Date(dataFinal)
  let hoje = new Date()
  if (hoje > inicioTemporada && hoje < fimTemporada) {
    return '(Atual)'
  } else {
    return ''
  }
}

let out = 0

export default class HistoricoViewController extends NavigationController {

  constructor(props) {
    super(props)
    Navigation.events().bindComponent(this)
    this.state = {
      telaInteira: false,
      rodape: false,
      imagem: '',
      link: '',
      titulo: '',
      lista: [],
      loading: false,
      activityCor: info.colors.primary,
    }
    this.buscarPublicidade()
  }

  navigationButtonPressed({ buttonId }) {
    super.navigationButtonPressed({ buttonId }, this.props.componentId)
  }

  componentDidMount() {
    this.buscaTemporadas()
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton)
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton)
  }

  componentWillMount() {
    this.buscarPublicidade()
  }

  buscarPublicidade = async () => {
    const { token } = await lerDadosUsuario()
    const resp = await axios.get(`${apiBuscaPublicidade}?idClube=${info.id}&idTela=3`,
      {
        headers: { authentication: token }
      })
    if (resp.data.content !== null) {
      this.atualizaPublicidade(resp.data.content)
    }
  }

  atualizaPublicidade = (conteudo) => {
    this.setState({
      link: conteudo.link,
      imagem: conteudo.imagem,
      titulo: conteudo.nome
    })
    if (conteudo.idTipoTela == 1) {
      this.setState({
        telaInteira: true,
        rodape: false,
      })
    } else if (conteudo.idTipoTela == 2) {
      this.setState({
        telaInteira: false,
        rodape: true,
      })
    }
  }

  abrirLink(titulo, link) {
    container.navigation.TelaPublicidade('Home', link, info.corPrimaria, titulo)
  }

  handleBackButton() {
    if (out === 1) {
      BackHandler.exitApp()
      out = 0
    } else if (out < 2) {
      ToastAndroid.show('Pressione novamente para sair', ToastAndroid.SHORT)
      out += 1
      return true
    }
  }

  carregamento() {
    this.setState({
      loading: true
    })
  }

  async buscaTemporadas() {
    try {
      this.carregamento()
      const { token } = await lerDadosUsuario()
      const resp = await axios.get(`${apiTemporadasClube}${info.id}`,
        {
          headers: { authentication: token }
        })
      await resp.data.content.map(item => (
        this.buscaCampeonatos(item)
      ))
      this.atualizaTemporadas()
    } catch (error) {
      if (error.response.data.statusCode === 500) {
        Alert.alert(
          'Erro',
          'Serviço temporariamente indisponível'
        )
      }
    }
  }

  atualizaTemporadas() {
    this.setState({
      loading: false
    })
  }

  async buscaCampeonatos(temporada) {
    try {
      this.carregamento()
      const { token } = await lerDadosUsuario()
      const resp = await axios.get(`${apiPartidasTemporada}?idTemporada=${temporada.id}&idClube=${info.id}`,
        {
          headers: { authentication: token }
        })
      this.montarLista(resp.data.content, temporada)
    } catch (error) {
      if (error.response.data.statusCode === 500) {
        Alert.alert(
          'Erro',
          'Serviço temporariamente indisponível'
        )
      }
    }
  }

  montarLista(campeonatos, temporada) {
    let novaLista = [...this.state.lista]
    this.trataData(campeonatos)
    novaLista.push(
      {
        temporada: temporada,
        campeonatos: campeonatos
      }
    )
    this.setState({
      lista: novaLista
    })
  }

  trataData(campeonatos) {
    campeonatos.map(campeonato => (
      campeonato.partidas.map(partida => (
        partida.data = `${this.buscaSemana(partida.data)}, ${this.buscaDia(partida.data)} de ${this.buscaMes(partida.data)}`
      ))
    ))
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

  render() {
    return (
      <View>
        <HistoricoPartidasView
          state={this.state}
        />
        <TelaInteira
          visivel={this.state.telaInteira}
          link={this.state.link}
          imagem={this.state.imagem}
          titulo={this.state.titulo}
          abrirLink={this.abrirLink}
        />
        <Rodape
          visivel={this.state.rodape}
          link={this.state.link}
          imagem={this.state.imagem}
          titulo={this.state.titulo}
          abrirLink={this.abrirLink}
        />
      </View>
    )
  }
}
