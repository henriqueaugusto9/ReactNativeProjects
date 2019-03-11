import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView, ActivityIndicator, Image } from 'react-native'
import { IconeMaterialComunity } from '../../../../components/Icons'

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
              <Text style={styles.textGrey}>{this.props.state.jogos}</Text>
            </View>

            <View style={styles.conteudoComBordas}>
              <Text style={styles.titulo}>Vitórias</Text>
              <Text style={styles.textGreen}>
                {this.props.state.vitorias}
              </Text>
            </View>

            <View style={styles.conteudoComBordas}>
              <Text style={styles.titulo}>Derrotas</Text>
              <Text style={styles.textRed}>
                {this.props.state.derrotas}
              </Text>
            </View>

            <View style={styles.conteudoComBordas}>
              <Text style={styles.titulo}>Empates</Text>
              <Text style={styles.textRed}>{this.props.state.empates}</Text>
            </View>
          </View>
        </View>
        {
          this.props.state.partida.map(item => (
            <View key={item} style={styles.container}>

              <View style={styles.clubes} >
                <View style={styles.containerImagem}>
                  <Image source={{ uri: item.clubeMandante.logo }} style={styles.imagemClube} />
                </View>
                <Text >{item.clubeMandante.sigla}</Text>
              </View>

              <View style={styles.informacoesPartida}>

                <Text style={{ color: '#444343', fontSize: 14 }} >
                  {this.props.tratarSemana(item.data)}, {this.props.tratarDia(item.data)} de {this.props.tratarMes(item.data)}
                </Text>
                <Text style={{ color: '#444343', fontSize: 13 }}>
                  {item.horaInicio}H{item.minutoInicio} - {item.apelidoEstadio}
                </Text>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: 100 }} >
                  <Text style={styles.placar} >{item.pontuacaoMandante}</Text>
                  <IconeMaterialComunity
                    name={'close'}
                    size={22}
                    color={'red'}
                  />
                  <Text style={styles.placar}>{item.pontuacaoVisitante}</Text>
                </View>

                <Text style={{ color: '#444343', fontSize: 14 }} >{item.nome} - {item.fase} </Text>
                <Text style={{ color: '#444343', fontSize: 13 }} >{item.rodada} Rodada</Text>

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
    )
  }
}

const styles = StyleSheet.create({
  resultados: {
    elevation: 3,
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
    elevation: 6,
    marginTop: 30,
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
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  viewDown: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },

  conteudo: {
    alignItems: 'center',
    paddingRight: 15,
    paddingLeft: 15,
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
    paddingLeft: 30,
    borderColor: 'grey',
    paddingRight: 15,
    justifyContent: 'space-around',
    borderLeftWidth: 1,
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
    color: 'blue',
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
  container: {
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 10,
    padding: 10
  },
  containerImagem:{
    height: 60,
    width: 60,
    marginBottom: 5
  },
  imagemClube: {
    flex: 1,
    resizeMode: 'contain',
  },
  informacoesPartida: {
    alignItems: 'center',
    width: '55%'
  },
  clubes: {
    alignItems: 'center',
    marginTop: 4,
    marginBottom: 10,
  },
  placar: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold'
  }
})