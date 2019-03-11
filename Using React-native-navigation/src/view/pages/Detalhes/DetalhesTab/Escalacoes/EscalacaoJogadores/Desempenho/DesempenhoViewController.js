import React, { Component } from 'react'
import { Alert, View } from 'react-native'
import DesempenhoView from './DesempenhoView'
import { info, lerDadosUsuario } from '../../../../../../../config/config'
import axios from 'axios'
import { apiJogadorDesempenho, apiJogadorIndividual } from '../../../../../../../routes/routes'
import { container } from '../../../../../../../ioc/container'

export default class DesempenhoViewController extends Component {

  state = {
    dados: [],
    jogador: [],
    idJogador: this.props.propriedade,
    idPartida: this.props.propriedade2,
    loading: false,
    corFonte: {
      color: info.colors.primary
    },
    corFundo: {
      backgroundColor: info.colors.primary
    },
    corPrimaria: info.colors.primary
  }

  componentDidMount() {
    this.inicio()
  }

  inicio() {
    this.buscaDados()
    this.buscaJogador()
  }

  carregamento() {
    this.setState({
      loading: true
    })
  }

  detalheImagem(idImagem, apelido){
    container.navigation.DetalheImagem('Home', idImagem, info.corPrimaria, apelido)
  }

  async buscaDados() {
    try {
      this.carregamento()
      const { token } = await lerDadosUsuario()
      const resp = await axios.get(`${apiJogadorDesempenho}/?id=${this.state.idJogador}&idPartida=${this.state.idPartida}`,
        {
          headers: { authentication: token }
        })
      this.atualizaDados(resp.data.content)
     
    } catch (error) {
      if (error.response.data.statusCode === 500){
        Alert.alert(
          'Erro',
          'Serviço temporariamente indisponível'
        )
      }
    }
  }

  atualizaDados(lista) {
    this.setState({
      loading: false,
      dados: lista
    })
  }

  async buscaJogador() {
    try {
      this.carregamento()
      const { token } = await lerDadosUsuario()
      const resp = await axios.get(`${apiJogadorIndividual}/${this.state.idJogador}`,
        {
          headers: { authentication: token }
        })
      this.atualizaJogador(resp.data.content)
    } catch (error) {
      if (error.response.data.statusCode === 500) {
        Alert.alert(
          'Erro',
          'Serviço temporariamente indisponível'
        )
      }
    }
  }

  atualizaJogador(lista) {
    this.setState({
      loading: false,
      jogador: lista
    })
  }

  trataIdade(data) {
    let milissegundos = Date.now() - new Date(data)
    return Math.floor(milissegundos / 1000 / 60 / 60 / 24 / 365.25)
  }

  verificaTipo(item){
    if (item.filha1 != null) {
      return `${item.filha1}/${item.filha2} (${Math.floor((item.filha1 * 100) / item.filha2)}%)`
    } else if (item.porcentagem === true) {
      return item.valor.concat(' %')
    } else if (item.porcentagem != true) {
      if (item.tipoEstatistica == 'Tempo') {
        return item.valor.concat(' min')
      }
      else return item.valor
    }
  }

  render() {
    return (
      <View>
        <DesempenhoView
          state={this.state}
          trataIdade={this.trataIdade}
          verificaTipo={this.verificaTipo}
          detalheImagem={this.detalheImagem}
        />
      </View>
    )
  }
}