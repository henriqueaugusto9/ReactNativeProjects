import React, { Component } from 'react'
import { View, AsyncStorage, Alert } from 'react-native'
import LocalizacaoEstadioView from './LocalizacaoEstadioView'
import axios from 'axios'
import { siglaClube, apiClube } from '../../../routes/routes'
import { info } from '../../../config/config'

export default class LocalizacaoEstadioViewController extends Component {

  state = {
    link: '',
    loading: false,
    corPrimaria: info.colors.primary
  }

  componentDidMount() {
    this.buscaLink()
  }

  carregamento() {
    this.setState({
      loading: true
    })
  }

  async buscaLink() {
    try {
      this.carregamento()
      const resp = await axios.get(`${apiClube}/mob/clube?sigla=${siglaClube}`)
      this.atualizaLink(resp.data.content.localizacao)
    } catch (e) {
      Alert.alert(
        'Erro!',
        'Falha ao obter localização'
      )
    }
  }

  atualizaLink(resultado) {
    this.setState({
      loading: false,
      link: resultado
    })
  }

  render() {
    return (
      <View>
        <LocalizacaoEstadioView
          state={this.state}
          carregado={this.carregado}
        />
      </View>
    )
  }
}