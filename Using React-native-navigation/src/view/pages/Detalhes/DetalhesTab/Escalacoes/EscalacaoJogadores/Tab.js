import React, { Component } from 'react'
import { StyleSheet, Text } from 'react-native'
import { TabView, TabBar, SceneMap } from 'react-native-tab-view'
import Titulares from './ListaJogadores/TitularesViewController'
import Reservas from './ListaJogadores/ReservasViewController'
import { info } from '../../../../../../config/config'

export default class Tab extends Component {
  state = {
    index: 0,
    routes: [
      { key: 'tit', title: 'Titulares' },
      { key: 'res', title: 'Reservas' },
    ],
  }

  titulo = ({ route }) => (
    <Text style={{ color: '#FFFFFF', fontSize: 14 }}>{route.title}</Text>
  )

  render() {
    const Tit = () => (
      <Titulares
        idPartida={this.props.propriedade}
        idClube={this.props.propriedade2}
      />
    )
    const Res = () => (
      <Reservas
        idPartida={this.props.propriedade}
        idClube={this.props.propriedade2}
      />
    )

    return (
      <TabView
        style={styles.container}
        navigationState={this.state}
        renderTabBar={props =>
          <TabBar
            {...props}
            indicatorStyle={{ backgroundColor: info.colors.secondary }}
            style={
              { backgroundColor: info.colors.primary }}
            renderLabel={this.titulo}
          />
        }
        renderScene={SceneMap({
          tit: Tit,
          res: Res,
        })}
        onIndexChange={index => this.setState({ index })}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: '#FFFFFF'
  }
})

