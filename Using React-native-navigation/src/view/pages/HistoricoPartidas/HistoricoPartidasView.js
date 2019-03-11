import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, ScrollView, ActivityIndicator } from 'react-native'
import { AccordionList } from 'accordion-collapse-react-native'
import { info } from '../../../config/config'
import { data } from './HistoricoPartidasViewController'

export default class HistoricoPartidasView extends Component {

  titulo(item) {
    return (
      <View style={[styles.tituloIcone, { borderBottomColor: info.colors.primary }]}>
        <Text style={[styles.titulo, { color: info.colors.primary }]}>
          {`${item.temporada.nome} ${data(item.temporada.dataInicial, item.temporada.dataFinal)}`}
        </Text>
        <View>
          <Image source={require('../../assets/down.png')} />
        </View>
      </View>
    )
  }

  conteudo(item) {
    return (
      item.campeonatos.map((campeonato, index) => (
        <View style={styles.collapseView} key={index}>
          <Text style={styles.nomeCampeonato}>{campeonato.campeonato}</Text>
          {
            campeonato.partidas.map((partida, index) => (
              <View style={styles.conteudo} key={index}>
                <View style={styles.clube}>
                  <View style={styles.containerLogo}>
                    <Image source={{ uri: partida.clubeMandante.logo }} style={styles.logo} />
                  </View>
                  <Text style={styles.textoClube}>{partida.clubeMandante.sigla}</Text>
                </View>

                <View style={styles.infoPrincipal}>
                  <Text style={styles.data}>{partida.data}</Text>

                  <Text style={styles.infoLocal}>
                    {`${partida.horaInicio}h${partida.minutoInicio} - ${partida.apelidoEstadio}`}
                  </Text>

                  <View style={styles.placar}>
                    <Text style={styles.pontos}>{partida.pontuacaoMandante}</Text>
                    <Image source={require('../../assets/close.png')} style={styles.icone} />
                    <Text style={styles.pontos}>{partida.pontuacaoVisitante}</Text>
                  </View>
                  <Text style={styles.info}>{partida.fase}</Text>
                </View>

                <View style={styles.clube}>
                  <View style={styles.containerLogo}>
                    <Image source={{ uri: partida.clubeVisitante.logo }} style={styles.logo} />
                  </View>
                  <Text style={styles.textoClube}>{partida.clubeVisitante.sigla}</Text>
                </View>
              </View>
            ))
          }
        </View>
      ))
    )
  }

  render() {
    if (this.props.state.loading) {
      return (
        <View style={styles.activity}>
          <ActivityIndicator
            size={'large'}
            color={this.props.state.activityCor}
          />
        </View>
      )
    }

    if (this.props.state.lista === []) {
      return (
        <View style={styles.semPartidas}>
          <Text style={[styles.textoSemPartidas, this.props.state.corPrimaria]}>Não há partidas disputadas pelo seu time</Text>
        </View>
      )
    }

    return (
      <ScrollView style={styles.container}>
        <AccordionList
          list={this.props.state.lista}
          header={this.titulo}
          body={this.conteudo}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#FFFFFF',
  },

  semPartidas: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#FFFFFF'
  },

  data: {
    textAlign: 'center',
    fontSize: 14,
    color: '#000000'
  },

  textoSemPartidas: {
    fontSize: 18
  },

  activity: {
    height: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },

  nomeCampeonato: {
    fontSize: 16,
    color: '#000000',
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 10,
  },

  titulo: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  conteudo: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#D3D3D3',
    justifyContent: 'space-between',
    paddingBottom: 10,
    marginBottom: 20
  },

  textoNumDia: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#000000'
  },

  textoData: {
    fontSize: 14,
    color: '#000000'
  },

  containerLogo: {
    width: 60,
    height: 60
  },

  logo: {
    flex: 1,
    resizeMode: 'center',
  },

  infoPrincipal: {
    justifyContent: 'space-around',
    width: 200,
    height: 100,
  },

  info: {
    fontSize: 13,
    textAlign: 'center',
    color: '#000000'
  },

  infoLocal: {
    fontSize: 13,
    textAlign: 'center',
    color: '#000000'
  },

  placar: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },

  pontos: {
    fontSize: 20,
    color: '#000000',
    fontWeight: 'bold'
  },

  icone: {
    width: 30,
    height: 30
  },

  textoClube: {
    fontSize: 12,
    fontWeight: 'bold'
  },

  tituloIcone: {
    padding: 20,
    alignItems: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
  },

  clube: {
    alignItems: 'center'
  },

  collapseView: {
    padding: 20,
  },

});
