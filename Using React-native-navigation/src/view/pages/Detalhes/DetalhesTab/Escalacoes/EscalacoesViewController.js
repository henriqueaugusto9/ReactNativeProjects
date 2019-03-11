import React, { Component } from 'react'
import { Alert, View, AsyncStorage } from 'react-native'
import EscalacoesViewBasquete from './EscalacoesViewBasquete'
import EscalacoesViewFutebol from './EscalacoesViewFutebol'
import axios from 'axios'
import { apiPartidaDetalhes } from '../../../../../routes/routes'
import { info, lerDadosUsuario } from '../../../../../config/config'
import { container } from '../../../../../ioc/container'

export default class EscalacoesViewController extends Component {

  state = {
    idPartida: this.props.id,
    dados: [],
    loading: false,
    clubeMandante: '',
    clubeVisitante: '',
    casa: false,
    adversario: false,
    escalacaoMandante: [],
    escalacaoVisitante: [],
    escalacaoInicial: [],
    esporte: info.nomeEsporte,
    clubeApp: '',
    clubeEscalacao: '',
    corPrimaria: {
      backgroundColor: info.colors.primary,
    },
    corSecundaria: {
      backgroundColor: info.colors.secondary
    },
    corFundo: {
      backgroundColor: info.colors.primary
    },
    activityCor: info.colors.primary,
    posicaoFutebol: [],
    posicaoMandante: [],
    posicaoVisitante: [],
    posicaoBasquete: [
      { top: '25%', left: '10%' },
      { top: '25%', left: '40%' },
      { top: '25%', right: '10%' },
      { top: '65%', left: '25%', },
      { top: '65%', left: '55%', },
    ],
  }

  componentDidMount() {
    this.buscaDados()
  }

  carregamento() {
    this.setState({
      loading: true
    })
  }

  async buscaDados() {
    try {
      this.carregamento()
      const { token } = await lerDadosUsuario()
      const resp = await axios.get(`${apiPartidaDetalhes}${this.state.idPartida}`,
        {
          headers: { authentication: token }
        })
      this.atualizaEstados(resp.data.content)
    } catch (error) {
      if (error.response.data.statusCode === 500){
        Alert.alert(
          'Erro',
          'Serviço temporariamente indisponível'
        )
      }
    }
  }

  atualizaEstados(lista) {
    this.setState({
      loading: false,
      dados: lista,
      clubeApp: lista.clubeMandante.apelido,
      clubeEscalacao: lista.clubeMandante.id,
      clubeMandante: lista.clubeMandante,
      clubeVisitante: lista.clubeVisitante,
      escalacaoMandante: lista.escalacaoMandante,
      escalacaoInicial: lista.escalacaoMandante,
      escalacaoVisitante: lista.escalacaoVisitante,
      posicaoFutebol: this.buscaPosicionamento('4-3-3'),
      posicaoMandante: this.buscaPosicionamento(lista.formacaoMandante),
      posicaoVisitante: this.buscaPosicionamento(lista.formacaoVisitante)
    })
  }

  alteraTime = (casa, adversario, escalacao, corFundo, formacao, id, apelidoClube) => {
    this.setState({
      casa: casa,
      adversario: adversario,
      escalacaoInicial: escalacao,
      corFundo: corFundo,
      posicaoFutebol: formacao,
      clubeEscalacao: id,
      clubeApp: apelidoClube,
    })
  }

  navegacao(titulo, idPartida, idClube) {
    container.navigation.EscalacaoJogadores('Home', info.colors.primary, titulo, idPartida, idClube)
  }

  buscaPosicionamento(formacao) {
    let retorno = [];
    switch (formacao) {
    case '4-3-3':
      retorno = [
        { top: '15%', left: '10%' },
        { top: '10%', left: '38%' },
        { top: '15%', right: '10%' },
        { top: '40%', left: 0 },
        { top: '45%', left: '38%' },
        { top: '40%', right: 0 },
        { top: '70%', left: 0 },
        { top: '75%', left: '20%' },
        { top: '75%', right: '20%' },
        { top: '70%', right: 0 },
        { bottom: 5, left: '38%' },
      ]
      break;
    case '4-3-2-1':
      retorno = [
        { top: '28%', left: '10%' },
        { top: '15%', left: '38%' },
        { top: '28%', right: '10%' },
        { top: '50%', left: 15 },
        { top: '55%', left: '38%' },
        { top: '50%', right: 15 },
        { top: '70%', left: 0 },
        { top: '75%', left: '20%' },
        { top: '75%', right: '20%' },
        { top: '70%', right: 0 },
        { bottom: 5, left: '38%' },
      ]
      break;
    case '4-4-2':
      retorno = [
        { top: '10%', left: '10%' },
        { top: '10%', right: '10%' },
        { top: '40%', left: 0 },
        { top: '50%', left: '20%' },
        { top: '50%', right: '20%' },
        { top: '40%', right: 0 },
        { top: '70%', left: 0 },
        { top: '75%', left: '20%' },
        { top: '75%', right: '20%' },
        { top: '70%', right: 0 },
        { bottom: 5, left: '38%' },
      ]
      break;
    case '3-4-3':
      retorno = [
        { top: '15%', left: 0 },
        { top: '10%', left: '38%', },
        { top: '15%', right: 0 },
        { top: '40%', left: 0 },
        { top: '50%', left: '20%' },
        { top: '50%', right: '20%' },
        { top: '40%', right: 0 },
        { top: '75%', left: '5%' },
        { top: '75%', left: '38%' },
        { top: '75%', right: '5%' },
        { bottom: 5, left: '38%' },
      ]
      break;
    case '3-5-2 A':
      retorno = [
        { top: '10%', left: '10%' },
        { top: '10%', right: '10%' },
        { top: '30%', left: '38%' },
        { top: '40%', left: 0 },
        { top: '55%', left: '20%' },
        { top: '55%', right: '20%' },
        { top: '40%', right: 0 },
        { top: '75%', left: '5%' },
        { top: '75%', left: '38%' },
        { top: '75%', right: '5%' },
        { bottom: 5, left: '38%' },
      ]
      break;
    case '3-5-2 B':
      retorno = [
        { top: '10%', left: '10%' },
        { top: '10%', right: '10%' },
        { top: '30%', left: 0 },
        { top: '40%', left: '20%' },
        { top: '55%', left: '38%' },
        { top: '40%', right: '20%' },
        { top: '30%', right: 0 },
        { top: '75%', left: '5%' },
        { top: '75%', left: '38%' },
        { top: '75%', right: '5%' },
        { bottom: 5, left: '38%' },
      ]
      break;
    }
    return retorno
  }

  render() {
    return (
      <View>
        {
          this.state.esporte === 'Basquete' ?
            <EscalacoesViewBasquete
              state={this.state}
              alteraTime={this.alteraTime}
              navegacao={this.navegacao}
            /> :
            <EscalacoesViewFutebol
              state={this.state}
              alteraTime={this.alteraTime}
              navegacao={this.navegacao}         
            />
        }
      </View>
    )
  }
}

