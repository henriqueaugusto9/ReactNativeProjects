import React, { Component } from 'react'
import { View } from 'react-native'
import Partida from './Partida/PartidaViewController'
import Tab from './DetalhesTab/Tab'
import axios from 'axios'
import { info, lerDadosUsuario } from '../../../config/config'
import TelaInteira from '../../components/Publicidade/TelaInteira/TelaInteira'
import Rodape from '../../components/Publicidade/Rodape/Rodape'
import { apiBuscaPublicidade } from '../../../routes/routes'

export default class DetalhesViewController extends Component {

  constructor(props) {
    super(props)
    this.state = {
      telaInteira: false,
      rodape: false,
      imagem: '',
      link: '',
      titulo: '',
    }
    this.buscarPublicidade()
  }

  componentWillMount() {
    this.buscarPublicidade()
  }

  buscarPublicidade = async () => {
    const { token } = await lerDadosUsuario()
    const resp = await axios.get(`${apiBuscaPublicidade}?idClube=${info.id}&idTela=7`,
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
      <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
        <Partida
          idPartida={this.props.propriedade}
        />
        <Tab
          id={this.props.propriedade}
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

