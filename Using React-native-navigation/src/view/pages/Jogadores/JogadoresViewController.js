import React, { Component } from 'react'
import { Alert, View, AsyncStorage } from 'react-native'
import JogadoresView from './JogadoresView'
import { container } from '../../../ioc/container'
import axios from 'axios'
import { apiJogadores, apiBuscaPublicidade } from '../../../routes/routes'
import { info, lerDadosUsuario } from '../../../config/config'
import { Navigation } from 'react-native-navigation'
import NavigationController from '../../navigationController'
import { BackHandler, ToastAndroid } from 'react-native'
import TelaInteira from '../../components/Publicidade/TelaInteira/TelaInteira'
import Rodape from '../../components/Publicidade/Rodape/Rodape'

let out = 0

export default class JogadoresViewController extends NavigationController {
  constructor(props) {
    super(props)
    Navigation.events().bindComponent(this)
    this.buscarPublicidade()
  }

  componentDidMount() {
    this.buscaJogadores()
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

  navigationButtonPressed({ buttonId }) {
    super.navigationButtonPressed({ buttonId }, this.props.componentId)
  }
  state = {
    dados: [],
    loading: false,
    navegacao: 'Jogador',
    semRegistros: false,
    telaInteira: false,
    rodape: false,
    imagem: '',
    link: '',
    titulo: '',
    corTextoPrimaria: {
      color: info.colors.primary
    },
    corTextoSecundaria: {
      color: info.colors.secondary
    },
    corPrimaria: info.colors.primary,

  }

  buscarPublicidade = async () => {
    const { token } = await lerDadosUsuario()
    const resp = await axios.get(`${apiBuscaPublicidade}?idClube=${info.id}&idTela=2`,
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

  carregamento() {
    this.setState({
      loading: true
    })
  }

  atualizaLista(novaLista) {
    this.setState({
      loading: false,
      dados: novaLista,
      semRegistros: false
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
      if (error.response.data.statusCode === 500) {
        Alert.alert(
          'Erro',
          'Serviço temporariamente indisponível'
        )
      }
    }
  }

  abrirLink(titulo, link) {
    container.navigation.TelaPublicidade('Jogadores', link, info.corPrimaria, titulo)
  }


  filtrarLista = async (text) => {
    try {
      const { token } = await lerDadosUsuario()
      const resp = await axios.get(`${apiJogadores}${info.id}&nome=${text}`,
        {
          headers: { authentication: token }
        })
      resp.data.content.length === 0 ? this.semRegistros() : this.atualizaLista(resp.data.content)
    } catch (error) {
      if (error.response.data.statusCode === 500) {
        Alert.alert(
          'Erro',
          'Serviço temporariamente indisponível'
        )
      }
    }
  }

  semRegistros() {
    this.setState({
      semRegistros: true
    })
  }

  navegacao(nome, prop) {
    container.navigation.JogadorDetalhe('Jogadores', nome, prop, info.corPrimaria)
  }

  trataIdade(data) {
    let milissegundos = Date.now() - new Date(data)
    return Math.floor(milissegundos / 1000 / 60 / 60 / 24 / 365.25)
  }

  detalheImagem(idImagem) {
    container.navigation.DetalheImagem('Biografia', idImagem, info.corPrimaria)
  }

  render() {
    return (
      <View>
        <JogadoresView
          state={this.state}
          filtrarLista={this.filtrarLista}
          trataIdade={this.trataIdade}
          navegacao={this.navegacao}
          dados={this.state.dados}
          detalheImagem={this.detalheImagem}
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
