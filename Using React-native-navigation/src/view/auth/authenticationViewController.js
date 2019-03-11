import axios from 'axios'
import React, { Component } from 'react'
import AuthView from './authenticationView'
import firebase from 'react-native-firebase'
import { container } from '../../ioc/container'
import { NetInfo, AsyncStorage } from 'react-native'
import { apiVerificaAuth } from '../../routes/routes'
import { getDadosClube } from './authenticationService'
import { info, lerDadosUsuario } from '../../config/config'

export default class AuthenticationViewController extends Component {

  state = {
    mensagem: ''
  }

  async componentDidMount() {
    this.begin()
  }
  
  async begin() {
    await getDadosClube()
    this.start()

  }

  receberNotificacao(){
    firebase.messaging().getToken()
    firebase.messaging().subscribeToTopic('teste')
  }

  async start() {
    this.receberNotificacao()
    await this.verifyConnection()
  }

  verifyConnection() {
    NetInfo.isConnected.fetch().done((isConnected) => {
      const connect = isConnected ? true : false
      return this.renderPaginaInicial(connect)
    })
  }

  mensagem() {
    this.setState({ mensagem: 'Verifique sua conexão!' })
  }

  async refazerLogin() {
    const dados = await lerDadosUsuario()
    if (!dados) {
      container.navigation.Login()
    } else {
      try {
        await axios.get(apiVerificaAuth,
          {
            headers: { authentication: dados.token }
          })
        container.navigation.Home(info.nome, info.corPrimaria, 'Home')
      } catch (e) {
        await alert('Não foi possivel realizar o login')
        await AsyncStorage.clear()
        container.navigation.Login()
      }
    }
  }

  salvarUsuario = async (value) => {
    const { email, senha } = this.state
    const user = { ...value, email: email, senha: senha }
    await AsyncStorage.setItem('user', JSON.stringify(user))
  }

  renderPaginaInicial(connect) {
    return connect ? this.refazerLogin() : this.mensagem()
  }

  render() {
    return (
      <AuthView
        state={this.state}
      />
    )
  }
}
