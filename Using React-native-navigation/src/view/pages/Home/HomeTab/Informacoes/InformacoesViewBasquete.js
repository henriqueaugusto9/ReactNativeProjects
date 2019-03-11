import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView, ActivityIndicator } from 'react-native'

export default class InformacoesViewBasquete extends Component {
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
        <View style={styles.resultados}>
          <View style={styles.viewUp}>
            <View style={styles.conteudo}>
              <Text style={styles.titulo}>Jogos</Text>
              <Text style={styles.textGrey}>{this.props.state.lista.qtdJogos}</Text>
            </View>

            <View style={styles.conteudoComBordas}>
              <Text style={styles.titulo}>Vitórias</Text>
              <Text style={styles.textGreen}>
                {this.props.state.lista.vitoriasMandante + this.props.state.lista.vitoriasVisitante}
              </Text>
            </View>

            <View style={styles.conteudo}>
              <Text style={styles.titulo}>Derrotas</Text>
              <Text style={styles.textRed}>
                {this.props.state.lista.derrotasMandante + this.props.state.lista.derrotasVisitante}
              </Text>
            </View>
          </View>

          <View style={styles.viewDown}>
            <View style={styles.comparativo}>
              <Text style={styles.titulo}>Mandante</Text>
              <View style={styles.comparativoValores}>
                <Text style={styles.textoVitoriaDerrota}>Vítórias  </Text>
                <Text style={styles.textGrey}>
                  {this.props.state.lista.vitoriasMandante}/{this.props.state.lista.derrotasVisitante}
                </Text>
                <Text style={styles.textoVitoriaDerrota}>  Derrotas</Text>
              </View>
            </View>

            <View style={styles.comparativo}>
              <Text style={styles.titulo}>Visitante</Text>
              <View style={styles.comparativoValores}>
                <Text style={styles.textoVitoriaDerrota}>Vítórias  </Text>
                <Text style={styles.textGrey}>
                  {this.props.state.lista.vitoriasVisitante}/{this.props.state.lista.derrotasVisitante}
                </Text>
                <Text style={styles.textoVitoriaDerrota}>  Derrotas</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.temporadas}>
          <Text style={styles.tituloTemporada}>Campeonatos Participantes</Text>
          {
            this.props.state.campeonatos.length === 0 ?
              <Text>Ainda não temos campeonatos nesta temporada</Text> :
              this.props.state.campeonatos.map(item => (
                <View key={item.nome}>
                  <Text style={styles.tituloCampeonato}>{item.nome}</Text>
                </View>
              ))
          }
        </View>
      </ScrollView >
    )
  }
}

const styles = StyleSheet.create({
  resultados: {
    elevation: 6,
    paddingVertical: 15,
    backgroundColor: 'white',
  },

  activity: {
    height: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },

  temporadas: {
    marginTop: 25,
    paddingLeft: 20,
    paddingBottom: 10,
    backgroundColor: 'white',
  },

  head: {
    width: '100%',
    alignItems: 'center',
    borderColor: 'grey',
    marginBottom: 20,
    justifyContent: 'center',
    borderBottomWidth: 1,
  },

  tituloTopo: {
    color: '#262425',
    margin: 10,
    fontSize: 14,
    fontWeight: 'bold',
  },

  tituloCampeonato: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold'
  },

  viewUp: {
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },

  viewDown: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },

  conteudo: {
    alignItems: 'center'
  },

  dados: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },

  comparativo: {
    alignItems: 'center'
  },

  comparativoValores: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  textoVitoriaDerrota: {
    color: '#000000',
    fontSize: 10,
    fontWeight: 'bold',
  },

  conteudoComBordas: {
    alignItems: 'center',
    paddingLeft: 50,
    borderColor: 'grey',
    paddingRight: 50,
    justifyContent: 'space-around',
    borderLeftWidth: 1,
    borderRightWidth: 1,
  },

  titulo: {
    color: 'black',
    fontSize: 14,
    fontWeight: 'bold'
  },

  tituloTemporada: {
    color: 'black',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 15
  },

  textGrey: {
    color: '#262425',
    fontSize: 23,
    fontWeight: 'bold',
  },

  textRed: {
    color: '#EE2E24',
    fontSize: 23,
    fontWeight: 'bold'
  },

  textGreen: {
    color: '#75C043',
    fontSize: 23,
    fontWeight: 'bold'
  },
})
