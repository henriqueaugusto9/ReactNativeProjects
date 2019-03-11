import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  ScrollView,
  ActivityIndicator,
  Image
} from 'react-native'
import { info } from '../../../../../config/config'

export default class Example extends Component {
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
      <ScrollView style={{ marginBottom: 20, marginTop: 10 }} >

        {
          this.props.state.mandante !== null ?
            <View style={{
              color: info.colors.primary,
              alignItems: 'center',
              marginTop: 30,
            }} >
              <Text style={[styles.semRegistro, this.props.state.corPrimariaFonte]}>As estatísticas ainda não foram cadastradas</Text>
            </View> :
            <View>
              <View style={{ flexDirection: 'row' }} >
                <FlatList
                  data={this.props.state.mandante}
                  keyExtractor={item => item.nome}
                  renderItem={({ item }) => {
                    return (
                      <View style={styles.container} >
                        <Image
                          source={require('../../../../assets/bola.jpg')}
                          style={{ height: 16, width: 16 }}
                        />
                        {
                          item.minutos.map(item => (
                            <Text>{item.minuto}' </Text>
                          ))
                        }
                        <Text style={styles.textNomes} >{item.apelido}</Text>
                      </View>
                    )
                  }} />
                <FlatList
                  data={this.props.state.visitante}
                  keyExtractor={item => item.nome}
                  renderItem={({ item }) => {
                    return (
                      <View style={styles.container} >
                        <Image
                          source={require('../../../../assets/bola.jpg')}
                          style={{ height: 16, width: 16 }}
                        />
                        {
                          item.minutos.map(item => (
                            <Text>{item.minuto}' </Text>
                          ))
                        }
                        <Text style={styles.textNomes} >{item.apelido}</Text>
                      </View>
                    )
                  }} />
              </View>
              <View>
                <View style={{ alignItems: 'center' }} >
                  <Text style={{
                    color: info.colors.primary,
                    fontSize: 17,
                    fontWeight: 'bold',
                    elevation: 10,
                    marginBottom: 20,
                  }} >Estatisticas da partida</Text>
                </View>

                <FlatList
                  data={this.props.state.estatisticas.estatisticas}
                  keyExtractor={item => item.nome}
                  renderItem={({ item }) => {
                    dadosMandante = () => {
                      if (item.filha1Mandante != null) {
                        return `${item.filha1Mandante}/${item.filha2Mandante} (${this.props.filhas(item.filha1Mandante, item.filha2Mandante)}%)`
                      } else if (item.porcentagem === true) {
                        return parseFloat(item.valorMandante).toFixed(2).concat(' %')
                      } else if (item.porcentagem != true) {
                        if (item.tipoEstatistica == 'Tempo') {
                          return item.valorMandante.concat(' min')
                        }
                        else return item.valorMandante
                      }
                    }
                    dadosVisitante = () => {
                      if (item.filha1Visitante != null) {
                        return `${item.filha1Visitante}/${item.filha2Visitante} (${this.props.filhas(item.filha1Visitante, item.filha2Visitante)}%)`
                      } else if (item.porcentagem === true) {
                        return parseFloat(item.valorVisitante).toFixed(2).concat(' %')
                      } else if (item.porcentagem != true) {
                        if (item.tipoEstatistica == 'Tempo') {
                          return item.valorVisitante.concat(' min')
                        }
                        else return item.valorVisitante
                      }
                    }
                    return (
                      <View style={styles.container} >
                        <Text style={styles.textValue} >{dadosMandante()}</Text>
                        <Text style={styles.textNomes} >{item.nome}</Text>
                        <Text style={styles.textValue} >{dadosVisitante()}</Text>
                      </View>
                    )
                  }
                  }
                />
              </View>
            </View>
        }
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 5,
    elevation: 6
  },
  activity: {
    height: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  tableContent: {
    paddingHorizontal: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
    elevation: 6
  },
  textNomes: {
    fontSize: 13,
    color: 'black',
    marginBottom: 4
  },
  textValue: {
    fontWeight: 'bold',
    fontSize: 13,
    color: 'black',
    marginBottom: 2,
  },
  times: {
    flex: 1
  },
  nome: {
    color: 'blue',
    fontWeight: 'bold'
  },
  tabela: {
    flex: 3,
  },
  row: {
    height: 40
  },
  text: {
    textAlign: 'center',
    fontSize: 12,
    fontWeight: 'bold'
  },
  semRegistro:{
    fontSize: 18,
    textAlign: 'center',

  },
})