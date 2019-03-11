import React, { Component } from 'react'
import { Alert, View } from 'react-native'
import Lista from './ListaView'
import { container } from '../../../../../../../ioc/container'
import { info, lerDadosUsuario } from '../../../../../../../config/config'
import axios from 'axios'
import { apiEscalacaoPartida, apiBuscaPublicidade } from '../../../../../../../routes/routes'
import TelaInteira from '../../../../../../components/Publicidade/TelaInteira/TelaInteira'
import Rodape from '../../../../../../components/Publicidade/Rodape/Rodape'

export default class EscalacaoJogadoresViewController extends Component {

  constructor(props) {
    super(props)
    this.state = {
      telaInteira: false,
      rodape: false,
      imagem: '',
      link: '',
      titulo: '',
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
    this.buscarPublicidade()
  }

  componentDidMount() {
    this.buscaReservas()
  }

  componentWillMount() {
    this.buscarPublicidade()
  }

  carregamento() {
    this.setState({
      loading: true
    })
  }

  async buscaReservas() {
    try {
      this.carregamento()
      const { token } = await lerDadosUsuario()
      const resp = await axios.get(`${apiEscalacaoPartida}?id=${this.state.idPartida}&idClube=${this.state.idClube}&titular=false`,
        {
          headers: { authentication: token }
        })
      this.atualizaReservas(resp.data.content)
    } catch (error) {
      if (error.response.data.statusCode === 500) {
        Alert.alert(
          'Erro',
          'Serviço temporariamente indisponível'
        )
      }
    }
  }

  atualizaReservas(lista) {
    this.setState({
      loading: false,
      dados: lista,
    })
  }

  navegacao(nome, idJogador, idPartida) {
    container.navigation.DesempenhoJogador('Home', nome, idJogador, info.corPrimaria, idPartida)
  }

  buscarPublicidade = async () => {
    const { token } = await lerDadosUsuario()
    const resp = await axios.get(`${apiBuscaPublicidade}?idClube=${info.id}&idTela=1`,
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

  render() {
    return (
      <View>
        <Lista
          state={this.state}
          alteraEscalacao={this.alteraEscalacao}
          navegacao={this.navegacao}
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