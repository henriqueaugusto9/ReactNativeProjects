import axios from 'axios'
import haversine from 'haversine'
import React, { Component } from 'react'
import {
  View,
  Text,
} from 'react-native'
import { apiNotificacao, apiPartidasHome } from '../../../routes/routes'
import { lerDadosUsuario, info } from '../../../config/config'

export default class notifificacoesView extends Component {
  latitude = -20.548838
  longitude = -47.428759

  constructor(props) {
    super(props)
    this.state = {
      new: {},
      prevLatLng: { latitude: this.latitude, longitude: this.longitude },
      distanciaM: null,
      positionAtual: 'false'
    }
  }

  async enviarNotificacao(partida1) {
    try {
      const idPartida = partida1[0].id
      const { user, token } = await lerDadosUsuario()
      const resp = await axios.post(`${apiNotificacao}?idSocio=${user.id}&idClube=${info.id}&idPartida=${idPartida}`, null,
        {
          headers: { authentication: token }
        })
      console.warn(resp)
    } catch (error) {
      console.warn(error)
    }
  }

  async buscaJogo() {
    try {
      const { token } = await lerDadosUsuario()
      const resp = await axios.get(`${apiPartidasHome}${info.id}`,
        {
          headers: { authentication: token }
        })
      resp.data.content.partida1 !== null ?
        this.enviarNotificacao(resp.data.content.partida1) : console.warn('nao')
    } catch (error) {
      if (error.response.data.statusCode === 500) {
        Alert.alert(
          'Erro',
          'Serviço temporariamente indisponível'
        )
      }
    }
  }

  async componentDidMount() {
    await this.buscaJogo()
    navigator.geolocation.getCurrentPosition(
      (position) => {
        // console.warn(position)
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: false, timeout: 20000, maximumAge: 1000 },
    )

    this.watchID = navigator.geolocation.watchPosition(
      position => {
        const { latitude, longitude } = position.coords

        const newCoordinate = {
          latitude,
          longitude
        }

        let distancia = this.calcDistance(newCoordinate)

        this.setState({
          new: newCoordinate,
          distanciaM: distancia,
        })

        if (distancia < 20) {
          this.setState({ positionAtual: 'true' })
        } else {
          this.setState({ positionAtual: 'false' })
        }
      },
      error => console.log(error),
      {
        enableHighAccuracy: true,
        maximumAge: 0,
        distanceFilter: 0
      }
    )
  }

  calcDistance = newLatLng => {
    const { prevLatLng } = this.state
    return haversine(prevLatLng, newLatLng, { unit: 'meter' }) || 0
  }

  render() {
    return (
      <View style={{ height: '100%', backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
        <Text>latitude RH_SMN: {this.state.prevLatLng.latitude}</Text>
        <Text>longitude RH_SMN: {this.state.prevLatLng.longitude}</Text>
        <Text>_____________________</Text>
        <Text>_____________________</Text>
        <Text>Latitude usuario {this.state.new.latitude}</Text>
        <Text>longitude usuario {this.state.new.longitude}</Text>
        <Text>_____________________</Text>
        <Text>_____________________</Text>
        <Text>Distancia: {this.state.distanciaM}</Text>
        <Text>Disparar notificação: {this.state.positionAtual}</Text>
      </View>
    )
  }
}