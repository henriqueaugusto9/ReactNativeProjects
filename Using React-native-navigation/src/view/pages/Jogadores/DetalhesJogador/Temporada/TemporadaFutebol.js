import React, { Component } from 'react'
import { View, Text, StyleSheet, FlatList, ScrollView } from 'react-native'
import { info } from '../../../../../config/config'

export default class TemporadaFutebol extends Component {
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
      <ScrollView style={{ marginBottom: 20 }} >

        <View style={{ alignItems: 'center' }} >
          <Text style={{
            color: info.colors.primary,
            fontSize: 17,
            fontWeight: 'bold',
            marginBottom: 30,
            marginTop: 30,
            elevation: 10,
          }} >Desempenho na temporada</Text>
        </View>

        <FlatList
          data={this.props.state.dadosFutebol}
          keyExtractor={item => item.nome}
          renderItem={({ item }) => {
            verifyData = () => {
              if (item.filha1 != null) {
                return `${item.filha1}/${item.filha2} (${this.props.filhas(item.filha1, item.filha2)}%)`
              } else if (item.porcentagem === true) {
                return item.valor.concat(' %')
              } else if (item.porcentagem != true) {
                if (item.tipoEstatistica == 'Tempo') {
                  return item.valor.concat(' min')
                }
                else return item.valor
              }
            }
            return (
              <View style={styles.container}>
                <Text style={styles.textNomes} >{item.nome}</Text>
                <Text style={styles.textValue} >{verifyData()}
                </Text>
              </View>
            )
          }
          }
        />
        
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 50,
    marginBottom: 5,
    flex: 3
  },
  activity: {
    height: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textNomes: {
    fontSize: 18,
    color: 'black',
    marginBottom: 4
  },
  textValue: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
    marginBottom: 2,
  },
})