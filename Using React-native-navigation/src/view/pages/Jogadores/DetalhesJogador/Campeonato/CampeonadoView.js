import React, { Component } from 'react'
import { info } from '../../../../../config/config'
import { View, Text, StyleSheet, ScrollView, ActivityIndicator, Image } from 'react-native'
import { Collapse, CollapseHeader, CollapseBody } from 'accordion-collapse-react-native'

export default class CampeonatoView extends Component {
  state = {
    collapsed: false,
  }

  render() {

    if (this.props.state.loading) {
      return (
        <View style={styles.activity}>
          <ActivityIndicator
            size={'large'}
            color={this.props.state.corPrimaria}
          />
        </View>
      )
    }

    return (
      <ScrollView>
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{
            color: info.colors.primary,
            fontSize: 21,
            fontWeight: 'bold',
            marginBottom: 30,
            marginTop: 30,
            elevation: 10,
          }}>Desempenho no campeonato</Text>
        </View>
        <View style={styles.container} >
          {
            this.props.state.campeonato.map((item, index) => (
              <Collapse
                key={index}
                isCollapsed={this.state.collapsed}
                onToggle={(isCollapsed) => this.setState({ collapsed: isCollapsed })}>
                <CollapseHeader>
                  <Text style={{
                    color: 'black',
                    fontSize: 17,
                    fontWeight: 'bold',
                    marginBottom: 30,
                    elevation: 10
                  }} key={item.nome}>{item.nome} <Image source={require('../../../../assets/down.png')} /></Text>
                </CollapseHeader>

                <CollapseBody>
                  {
                    this.props.state.estatisticas.map((item2, index) => (
                      <View
                        key={index}
                        style={styles.estatisticas}>
                        <Text style={styles.textNomes} key={item2.nome}>{item2.nome || 'Teste'} </Text>
                        <Text style={styles.textValue} key={item2.nome}>{this.props.verifyData(item2)} </Text>
                      </View>
                    ))
                  }
                </CollapseBody>
              </Collapse>
            ))
          }
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    flex: 3
  },
  estatisticas: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 25,
    marginBottom: 5
  },
  activity: {
    height: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textNomes: {
    fontSize: 16,
    color: 'black',
    marginBottom: 10
  },
  textValue: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'black',
    marginBottom: 9,
  }
})