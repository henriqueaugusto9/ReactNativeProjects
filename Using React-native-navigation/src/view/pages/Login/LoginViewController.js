import axios from 'axios'
import { View, AsyncStorage, Alert, ActivityIndicator } from 'react-native'
import LoginView from './LoginView'
import React, { Component } from 'react'
import { info } from '../../../config/config'
import { container } from '../../../ioc/container'
import { apiSeguranca } from '../../../routes/routes'

export default class LoginViewController extends Component {
  state = {
    email: 'admin',
    senha: '123456',
    background: info.colors.primary,
    button: info.colors.secondary,
    logo: info.logo,
    siteClube: info.linkClube,
    siteSocio: info.linkAssociado,
    loading: false,
    disabled: false,
    opacity: 0.6,
  }

  limparEstados() {
    this.setState({ email: '' })
    this.setState({ senha: '' })
  }

  login = () => {
    this.verificarInputs()
  }

  async verificarInputs() {
    if (this.state.email != '' && this.state.senha != '') {
      await this.autenticar()
    } else {
      Alert.alert(
        'Atenção:',
        'Preencha todos os campos!',
        [
          { text: 'OK', onPress: () => console.log('Cancel Pressed') }
        ],
      )
    }
  }

  salvarUsuario = async (value) => {
    const { email, senha } = this.state
    const user = { ...value, email: email, senha: senha }
    await AsyncStorage.setItem('user', JSON.stringify(user))
  }

  loading(value) {
    this.setState({ loading: value })
  }

  async autenticar() {
    try {
      this.loading(true)
      const resp = await axios.post(apiSeguranca, {
        login: this.state.email,
        senha: this.state.senha,
      })
      console.log(resp.data.content.token)
      this.salvarUsuario(resp.data.content)
      this.limparEstados()
      container.navigation.Home(info.nome, info.corPrimaria, 'Home')
    } catch (error) {
      let erro = JSON.parse(error.request._response)
      Alert.alert(
        'Atenção:',
        `${erro.messages.snack}`,
        [
          { text: 'OK', onPress: () => console.log('Cancel Pressed') }
        ],
      )
    } finally {
      this.loading(false)
    }
  }

  siteClube() {
    container.navigation.SiteClube('Login')
  }

  siteSocio() {
    container.navigation.SiteSocio('Login')
  }

  validarBotao = async () => {
    if (this.state.email != '' && this.state.senha != '') {
      this.setState({ disabled: false, opacity: 1.0 })
    } else if (this.state.email == '' || this.state.senha == '') {
      this.setState({ disabled: true, opacity: 0.6 })
    }
  }

  async onChangeEmail(email) {
    await this.setState({ email: email })
    await this.validarBotao()
  }

  async onChangeSenha(senha) {
    await this.setState({ senha: senha })
    await this.validarBotao()
  }

  render() {
    return (
      this.state.loading ?
        <View style={{
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1,
          backgroundColor: 'white'
        }} >
          <ActivityIndicator color="blue" size={50} />
        </View> :
        <LoginView
          state={this.state}
          logar={this.login}
          siteClube={this.siteClube}
          siteSocio={this.siteSocio}
          onChangeEmail={email => this.onChangeEmail(email)}
          onChangeSenha={senha => this.onChangeSenha(senha)}
        />
    )
  }
}