import React, { Component } from 'react'
import { StyleSheet, Text } from 'react-native'
import Informacoes from './Informacoes/InformacoesViewController'
import CalendarioHome from './Calendario/CalendarioViewController'
import Equipe from './Equipe/EquipeViewController'
import { TabView, TabBar, SceneMap } from 'react-native-tab-view'
import { info } from '../../../../config/config'

export default class Tab extends Component {

  state = {
    index: 0,
    routes: [
      { key: 'info', title: 'Informações' },
      { key: 'cal', title: 'Calendario' },
      { key: 'equipe', title: 'Equipe' },
    ],
  }

  titulo = ({ route }) => (
    <Text style={{ color: info.colors.white, fontSize: 14 }}>{route.title}</Text>
  )

  render() {
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
          info: Informacoes,
          cal: CalendarioHome,
          equipe: Equipe
        })}
        onIndexChange={index => this.setState({ index })}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: 'white'
  }
})

