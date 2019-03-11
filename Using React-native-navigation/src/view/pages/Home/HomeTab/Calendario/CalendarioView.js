import React, { Component } from 'react'
import { IconeMaterialComunity } from '../../../../components/Icons'
import { info } from '../../../../../config/config'
import { ActivityIndicator } from 'react-native'
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
} from 'react-native'

export default class CalendarioView extends Component {
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
        {
          this.props.state.loading === true ? <ActivityIndicator /> :

            this.props.state.partidas.length === 0 ?
              <Text style={{
                textAlign: 'center',
                marginTop: 30,
                color: info.colors.primary,
                fontSize: 18,
              }}
              >Não há proximas partidas.</Text> :

              <ScrollView>
                {
                  this.props.state.partidas.map(item => (
                    <View key={item} style={styles.container}>

                      <View style={styles.clubes} >
                        <View style={styles.containerImagem}>
                          <Image source={{ uri: item.clubeMandante.logo }} style={styles.imagemClube} />
                        </View>
                        <Text >{item.clubeMandante.sigla}</Text>
                      </View>

                      <View style={styles.informacoesPartida}>

                        <Text style={{ color: '#444343', fontSize: 14 }} >
                          {this.props.buscaSemana(item.data)}, {this.props.buscaDia(item.data)} de {this.props.buscaMes(item.data)}
                        </Text>
                        <Text style={{ color: '#444343', fontSize: 13 }}>
                          {item.horaInicio}H{item.minutoInicio} - {item.local}
                        </Text>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: 150, height: 45 }}>
                          <Text style={styles.placar} >{item.pontuacaoMandante}</Text>
                          <IconeMaterialComunity
                            name={'close'}
                            size={22}
                            color={'red'}
                          />
                          <Text style={styles.placar}>{item.pontuacaoVisitante}</Text>
                        </View>

                        <Text style={{ color: '#444343', fontSize: 14 }} >{item.campeonato} </Text>

                      </View>

                      <View style={styles.clubes} >
                        <View style={styles.containerImagem}>
                          <Image source={{ uri: item.clubeVisitante.logo }} style={styles.imagemClube} />
                        </View>
                        <Text >{item.clubeVisitante.sigla}</Text>
                      </View>
                    </View>
                  ))
                }

              </ScrollView>
        }
      </ScrollView>

    )

  }
}

const styles = StyleSheet.create({
  container: {
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: 10
  },
  activity: {
    height: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  imagemClube: {
    height: 60,
    width: 60,
    marginBottom: 5
  },
  informacoesPartida: {
    alignItems: 'center',
    width: '55%'
  },
  clubes: {
    alignItems: 'center',
    marginTop: 10,
  },
})

