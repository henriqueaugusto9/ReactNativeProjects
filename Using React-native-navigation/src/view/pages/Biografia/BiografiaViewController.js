import React, { Component } from 'react'
import { View } from 'react-native'
import BiografiaView from './BiografiaView'
import { container } from '../../../ioc/container'
import { info, lerDadosUsuario } from '../../../config/config'
import { Navigation } from 'react-native-navigation'
import NavigationController from '../../navigationController'
import { BackHandler, ToastAndroid } from 'react-native'
import TelaInteira from '../../components/Publicidade/TelaInteira/TelaInteira'
import Rodape from '../../components/Publicidade/Rodape/Rodape'
import { apiBuscaPublicidade } from '../../../routes/routes'
import axios from 'axios'

let out = 0

export default class BiografiaViewController extends NavigationController {
  constructor(props) {
    super(props)
    Navigation.events().bindComponent(this)
    this.state = {
      telaInteira: false,
      rodape: false,
      imagem: '',
      link: '',
      titulo: '',
      dataFundacao: info.dataFundacao,
      estadio: info.estadio,
      apelidoEstadio: info.apelidoEstadio,
      treinador: info.treinador,
      descricao: info.descricao,
      imagemEstadio: info.imagemEstadio,
      corPrimaria: {
        color: info.corPrimaria
      }
    }
    this.buscarPublicidade()
  }

  navigationButtonPressed({ buttonId }) {
    super.navigationButtonPressed({ buttonId }, this.props.componentId)
  }

  componentDidMount() {
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

  navegacao() {
    container.navigation.Localizacao('Biografia', info.corPrimaria)
  }

  detalheImagem(idImagem) {
    container.navigation.DetalheImagem('Biografia', idImagem, info.corPrimaria, info.apelidoEstadio)
  }

  converteData(dataApi) {
    var data = new Date(dataApi)
    var dia = ('0' + (data.getDate())).slice(-2)
    var mes = ('0' + (data.getMonth() + 1)).slice(-2)
    var ano = data.getFullYear()
    data = `${dia}/${mes}/${ano}`
    return data
  }

  buscarPublicidade = async () => {
    const { token } = await lerDadosUsuario()
    const resp = await axios.get(`${apiBuscaPublicidade}?idClube=${info.id}&idTela=4`,
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
    container.navigation.TelaPublicidade('Biografia', link, info.corPrimaria, titulo)
  }

  render() {
    return (
      <View>
        <BiografiaView
          state={this.state}
          navegacao={this.navegacao}
          converteData={this.converteData}
          detalheImagem={this.detalheImagem}
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
      </View >
    )
  }
}
