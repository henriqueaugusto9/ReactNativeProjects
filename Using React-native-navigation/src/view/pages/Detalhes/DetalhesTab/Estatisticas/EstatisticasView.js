import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  ScrollView,
  ActivityIndicator
} from 'react-native'
import {
  Rows,
  Table,
} from 'react-native-table-component'
import { info } from '../../../../../config/config'

export default class EstatisticasBasquete extends Component {
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
      <ScrollView style={{ padding: 10 }} >
        {
          this.props.state.siglaMandante === null ?
            <View >
              <Text style={{
                color: info.colors.primary,
                fontSize: 15,
                textAlign: 'center'
              }} >As estatisticas ainda não foram cadastradas.</Text>
            </View>
            :
            <View>
              <View style={styles.tableContent}>
                <View style={styles.tabela}>
                  <Table borderStyle={{ borderWidth: 1, borderColor: 'grey', opacity: 0.9 }}>
                    <Rows data={this.props.state.tableData} style={styles.row} textStyle={styles.text} />
                  </Table>
                </View>
              </View>
              {
                this.props.state.estatisticas.siglaMandante === null ?
                  <Text
                    style={{
                      textAlign: 'center',
                      marginTop: 30,
                      color: info.colors.primary,
                      fontSize: 18,
                    }}> As estatisticas ainda não foram cadastradas</Text> :
                  <View>
                    <View style={{ alignItems: 'center' }} >
                      <Text style={{
                        marginTop: 10,
                        color: info.colors.primary,
                        fontSize: 19,
                        fontWeight: 'bold',
                        elevation: 10,
                        marginBottom: 20,
                      }} >Comparação entre os times</Text>
                    </View>

                    <View style={{
                      alignItems: 'center',
                      justifyContent: 'space-around',
                      flexDirection: 'row',
                      marginBottom: 15,
                    }} >

                      <Text
                        style={{
                          fontWeight: 'bold',
                          fontSize: 18,
                          color: info.colors.primary,
                          marginBottom: 2,
                        }}
                      >{this.props.state.estatisticas.siglaMandante}</Text>
                      <Text
                        style={{
                          fontWeight: 'bold',
                          fontSize: 18,
                          color: info.colors.secondary,
                          marginBottom: 2,
                        }}
                      >{this.props.state.estatisticas.siglaVisitante}</Text>
                    </View>

                    <FlatList
                      data={this.props.state.estatisticas.estatisticas}
                      keyExtractor={item => item.nome}
                      renderItem={({ item }) => {

                        dadosMandante = () => {
                          if (item.filha1Mandante != null) {
                            return `${item.filha1Mandante}/${item.filha2Mandante} (${this.props.filhas(item.filha1Mandante, item.filha2Mandante)}%)`
                          } else if (item.porcentagem === true) {
                            return item.valorMandante.concat(' %')
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
                            return item.valorVisitante.concat(' %')
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
                            <Text style={styles.textValue} >{item.nome}</Text>
                            <Text style={styles.textValue} >{dadosVisitante()}</Text>
                          </View>
                        )
                      }
                      }
                    />
                  </View>
              }
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
    paddingHorizontal: 50,
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
    fontSize: 15,
    color: 'black',
    marginBottom: 4
  },
  textValue: {
    fontWeight: 'bold',
    fontSize: 15,
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
    flex: 1,
  },
  row: {
    height: 40
  },
  text: {
    textAlign: 'center',
    fontSize: 12,
    fontWeight: 'bold'
  }
})