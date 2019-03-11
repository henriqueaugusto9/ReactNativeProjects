import axios from 'axios'
import React from 'react'
import IngressosView from './IngressosView'
import { container } from '../../../ioc/container'
import { Navigation } from 'react-native-navigation'
import NavigationController from '../../navigationController'
import { info, lerDadosUsuario } from '../../../config/config'
import { Alert, BackHandler, ToastAndroid, View } from 'react-native'
import {
  apiTemporadasClube,
  apiPartidasTemporada,
  apiBuscaPublicidade
} from '../../../routes/routes'
import TelaInteira from '../../components/Publicidade/TelaInteira/TelaInteira'
import Rodape from '../../components/Publicidade/Rodape/Rodape'

let out = 0
export default class IngressosViewController extends NavigationController {

  constructor(props) {
    super(props)
    Navigation.events().bindComponent(this)
    this.state = {
      telaInteira: false,
      rodape: false,
      imagem: '',
      link: '',
      titulo: '',
      carregando: false,
      nomeTemporada: [],
      corPrimaria: info.colors.primary,
      lista: []
    }
    this.buscarPublicidade()
  }

  navigationButtonPressed({ buttonId }) {
    super.navigationButtonPressed({ buttonId }, this.props.componentId)
  }

  async componentDidMount() {
    await this.buscarTemporada()
    await this.buscarPartidas()
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton)
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton)
  }

  componentWillMount() {
    this.buscarPublicidade()
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

  carregando(value) {
    this.setState({ carregando: value })
  }

  alterarEstado(lista) {
    this.setState({ nomeTemporada: lista })
  }

  buscarTemporada = async () => {
    this.carregando(true)
    try {
      const { token, user } = await lerDadosUsuario()
      const resp = await axios.get(`${apiTemporadasClube}${info.id}?idUsuario=${user.id}`,
        {
          headers: { authentication: token }
        })
      this.alterarEstado(resp.data.content)
    } catch (error) {
      if (error.response.data.statusCode === 500) {
        Alert.alert(
          'Erro',
          'Serviço temporariamente indisponível'
        )
      }
    }
  }

  buscarPartidas = async () => {
    try {
      for (let i = 0; i < this.state.nomeTemporada.length; i++) {
        let id = this.state.nomeTemporada[i].id
        let { token, user } = await lerDadosUsuario()
        let resp = await axios.get(
          `${apiPartidasTemporada}?idTemporada=${id}&idClube=${info.id}&idUsuario=${user.id}`,
          {
            headers: { authentication: token }
          })
        await this.conteudoCollapse(resp.data.content, this.state.nomeTemporada[i])
        this.carregando(false)
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

  conteudoCollapse(partidas, temporada) {
    let novaLista = [...this.state.lista]
    novaLista.push(
      {
        temporada: temporada,
        partidas: partidas
      }
    )
    this.setState({
      lista: novaLista
    })
  }

  figura = (nome, prop, prop2) => {
    container.navigation.FotoIngresso('Ingressos', nome, prop, info.corPrimaria, prop2)
  }

  avisoIngresso() {
    Alert.alert(
      'Atenção:',
      'O ingresso desta partida ainda não foi cadastrado!'
    )
  }

  date(dataApi) {
    const data = new Date(dataApi)
    const dataUTC = `${('0' + data.getUTCDate()).slice(-2)}/${('0' + (data.getUTCMonth() + 1)).slice(-2)}/${data.getUTCFullYear()}`
    return dataUTC
  }

  buscarPublicidade = async () => {
    const { token } = await lerDadosUsuario()
    const resp = await axios.get(`${apiBuscaPublicidade}?idClube=${info.id}&idTela=5`,
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
    container.navigation.TelaPublicidade('Ingressos', link, info.corPrimaria, titulo)
  }


  render() {
    return (
      <View style={{ flex: 1 }}>
        <IngressosView
          state={this.state}
          figura={this.figura}
          date={this.date}
          avisoIngresso={this.avisoIngresso}
        />
        <TelaInteira
            visivel={this.state.telaInteira}
            link={this.state.link}
            imagem={this.state.imagem}
            titulo= {this.state.titulo}
            abrirLink={this.abrirLink}
          />
        <Rodape
          visivel={this.state.rodape}
          link={this.state.link}
          imagem={this.state.imagem}
          titulo= {this.state.titulo}
          abrirLink={this.abrirLink}
        />
      </View>
    )
  }
}