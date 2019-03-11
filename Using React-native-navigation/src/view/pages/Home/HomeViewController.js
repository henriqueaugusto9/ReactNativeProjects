import React from 'react'
import { ScrollView, BackHandler, ToastAndroid, View } from 'react-native'
import HomeHeader from './HomeHeader/HomeHeaderViewController'
import Tab from './HomeTab/Tab'
import { Navigation } from 'react-native-navigation'
import NavigationController from '../../navigationController'
import TelaInteira from '../../components/Publicidade/TelaInteira/TelaInteira'
import Rodape from '../../components/Publicidade/Rodape/Rodape'
import axios from 'axios'
import { info, lerDadosUsuario } from '../../../config/config'
import { apiBuscaPublicidade } from '../../../routes/routes'
import { container } from '../../../ioc/container'

let out = 0
export default class Home extends NavigationController {
  constructor(props) {
    super(props)
    Navigation.events().bindComponent(this)
    this.state = {
      telaInteira: false,
      rodape: false,
      imagem: '',
      link: '',
      titulo: '',
    }
    this.buscarPublicidade()
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton)
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position)
      },
      (error) => console.log(error),
      { enableHighAccuracy: true, maximumAge: 1000, timeout: 5000 }
    )
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

  navigationButtonPressed({ buttonId }) {
    super.navigationButtonPressed({ buttonId }, this.props.componentId)
  }

  buscarPublicidade = async () => {
    const { token } = await lerDadosUsuario()
    const resp = await axios.get(`${apiBuscaPublicidade}?idClube=${info.id}&idTela=8`,
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
      <View style={{ flex: 1 }}>
        <ScrollView
          contentContainerStyle={{ flex: 1, backgroundColor: '#FFFFFF' }}
          scrollEnabled={true}>
          <HomeHeader />
          <Tab />
          <TelaInteira
            visivel={this.state.telaInteira}
            link={this.state.link}
            imagem={this.state.imagem}
            titulo= {this.state.titulo}
            abrirLink={this.abrirLink}
          />
        </ScrollView>

        <Rodape
          visivel={this.state.rodape}
          link={this.state.link}
          imagem={this.state.imagem}
          titulo= {this.state.titulo}
          abrirLink={this.abrirLink}
        />
      </View>
    )
  }
}





