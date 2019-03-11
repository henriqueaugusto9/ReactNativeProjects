import React, { Component } from 'react'
import { StyleSheet, Text } from 'react-native'
import Escalacoes from './Escalacoes/EscalacoesViewController'
import Estatisticas from './Estatisticas/EstatisticasViewController'
import Confrontos from './Confrontos/ConfrontosViewController'
import { TabView, TabBar, SceneMap } from 'react-native-tab-view'
import { info } from '../../../../config/config'

export default class Tab extends Component {
  state = {
    index: 0,
    routes: [
      { key: 'esc', title: 'Escalações' },
      { key: 'est', title: 'Estatísticas' },
      { key: 'conf', title: 'Confrontos' },
    ],
  }

  titulo = ({ route }) => (
    <Text style={{ color: info.colors.white, fontSize: 14 }}>{route.title}</Text>
  )

  render() {
    const Escal = () => (<Escalacoes id={this.props.id} />)
    const Estat = () => (<Estatisticas id={this.props.id} />)
    const Confr = () => (<Confrontos id={this.props.id} />)

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
          esc: Escal,
          est: Estat,
          conf: Confr
        })}
        onIndexChange={index => this.setState({ index })}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 3
  }
})

