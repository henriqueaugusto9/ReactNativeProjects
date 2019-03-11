import React, { Component } from 'react'
import { View, AsyncStorage } from 'react-native'
import MenuView from './MenuView'
import { Alert } from 'react-native'
import { container } from '../../../ioc/container'
import { info, lerDadosUsuario } from '../../../config/config'
import { apiTemporadasClube } from '../../../routes/routes'
import axios from 'axios'

export default class MenuViewController extends Component {
  state = {
    pagina: [
      { id: 1, titulo: 'Home', selecionado: false, navegacao: function () { container.navigation.Home(info.nome, info.corPrimaria, 'Home') }, icone: 'home' },
      { id: 2, titulo: 'Jogadores', selecionado: false, navegacao: function () { container.navigation.Jogadores(info.corPrimaria, 'Jogadores') }, icone: 'account-multiple' },
      { id: 3, titulo: 'Histórico de partidas', selecionado: false, navegacao: function () { container.navigation.HistoricoPartidas(info.corPrimaria,'Histórico de partidas') }, icone: 'history' },
      { id: 4, titulo: 'Biografia', selecionado: false, navegacao: function () { container.navigation.Biografia(info.corPrimaria, 'Biografia') }, icone: 'clipboard-outline' },
      { id: 5, titulo: 'Ingressos', selecionado: false, navegacao: function () { container.navigation.Ingressos(info.corPrimaria, 'Ingressos') }, icone: 'ticket-confirmation' },
      { id: 6, titulo: 'Notificações', selecionado: false,  navegacao: function () { container.navigation.Notificacoes(info.corPrimaria, 'Notificações') }, icone: 'bell-ring' }
    ],
    logo: info.logo,
    nomeClube: info.apelido,
    corFundo: info.colors.primary,
    temporada: '',
    corSelecionado: {
      color: info.colors.primary
    },
  }

  componentDidMount() {
    this.getNomeUsuario()
    this.getTemporadas()
    this.mudaCor(this.props.propriedade)
  }

  async getNomeUsuario() {
    const { user } = await lerDadosUsuario()
    this.setState({ user: user.nome })
  }

  async getTemporadas() {
    try {
      const { token } = await lerDadosUsuario()
      const resp = await axios.get(`${apiTemporadasClube}${info.id}`,
        {
          headers: { authentication: token }
        })
      this.atualizaTemporadaAtual(resp.data.content[0].nome)
    } catch (error) {
      if (error.response.data.statusCode === 500) {
        Alert.alert(
          'Erro',
          'Erro ao buscar temporada atual'
        )
      }
    }
  }

  atualizaTemporadaAtual(temporadaAtual) {
    this.setState({
      temporada: temporadaAtual
    })
  }
  
  mudaCor = (prop) => {
    let itens = this.state.pagina
    itens.map(item => {
      item.titulo === prop ? item.selecionado = true : item.selecionado = false
    })
    this.setState({
      pagina: itens
    })
  }

  logout() {
    Alert.alert(
      'Sair',
      'Deseja realmente sair do aplicativo?',
      [
        { text: 'Não', onPress: () => console.log('Cancel Pressed') },
        { text: 'Sim', onPress: () => container.navigation.Login() },
      ],
    )
  }
  render() {
    return (
      <View>
        <MenuView
          state={this.state}
          logout={this.logout}
        />
      </View>
    )
  }
}
