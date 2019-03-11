import React, { Component } from 'react'
import { StyleSheet, Text } from 'react-native'
import { TabView, TabBar, SceneMap } from 'react-native-tab-view'
import { info } from '../../../../config/config'

import Informacoes from './Informacoes/InformacoesViewController'
import Campeonato from './Campeonato/CampeonatoViewController'
import Temporada from './Temporada/TemporadaViewController'

export default class Tab extends Component {
  state = {
    index: 0,
    routes: [
      { key: 'info', title: 'Informações' },
      { key: 'camp', title: 'Campeonato' },
      { key: 'temp', title: 'Temporada' },
    ],
  }
  titulo = ({ route }) => (
    <Text style={{ color: info.colors.white, fontSize: 14 }}>{route.title}</Text>
  )

  render() {
    const Inform = () => (<Informacoes id={this.props.id} />)
    const Campeo = () => (<Campeonato id={this.props.id} />)
    const Tempor = () => (<Temporada id={this.props.id} />)

    return (
      <TabView
        style={styles.tabview}
        navigationState={this.state}
        renderTabBar={props =>
          <TabBar
            {...props}
            indicatorStyle={{ backgroundColor: info.colors.secondary }}
            style={{ backgroundColor: info.colors.primary }}

            renderLabel={this.titulo}
          />
        }
        renderScene={SceneMap({
          info: Inform,
          camp: Campeo,
          temp: Tempor
        })}
        onIndexChange={index => this.setState({ index })}
      />
    )
  }
}

const styles = StyleSheet.create({
  tabview: {
    flex: 6
  }
})

