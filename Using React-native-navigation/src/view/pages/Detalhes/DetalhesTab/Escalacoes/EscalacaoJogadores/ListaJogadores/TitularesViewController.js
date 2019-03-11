import React, { Component } from 'react'
import { Alert, View } from 'react-native'
import Lista from './ListaView'
import { container } from '../../../../../../../ioc/container'
import { info, lerDadosUsuario } from '../../../../../../../config/config'
import axios from 'axios'
import { apiEscalacaoPartida } from '../../../../../../../routes/routes'

export default class EscalacaoJogadoresViewController extends Component {

  state = {
    idPartida: this.props.idPartida,
    idClube: this.props.idClube,
    dados: [],
    loading: false,
    corPrimaria: {
      backgroundColor: info.colors.primary,
    },

    corSecundaria: {
      backgroundColor: info.colors.secondary
    },

    corBotaoReserva: {
      borderColor: info.colors.primary
    },

    corFonteReserva: {
      color: info.colors.primary
    },

    activityCor: info.colors.primary
  }

  componentDidMount() {
    this.buscaTitulares()
  }

  carregamento() {
    this.setState({
      loading: true
    })
  }

  async buscaTitulares() {
    try {
      this.carregamento()
      const { token } = await lerDadosUsuario()
      const resp = await axios.get(
        `${apiEscalacaoPartida}?id=${this.state.idPartida}&idClube=${this.state.idClube}&titular=true`,
        {
          headers: { authentication: token }
        })
      this.atualizaTitulares(resp.data.content)
    } catch (error) {
      if (error.response.data.statusCode === 500) {
        Alert.alert(
          'Erro',
          'Serviço temporariamente indisponível'
        )
      }
    }
  }

  atualizaTitulares(lista) {
    this.setState({
      loading: false,
      dados: lista,
    })
  }

  navegacao(nome, idJogador, idPartida) {
    container.navigation.DesempenhoJogador('Home', nome, idJogador, info.corPrimaria, idPartida)
  }

  render() {
    return (
      <View>
        <Lista
          state={this.state}
          navegacao={this.navegacao}
        />
      </View>
    )
  }
}