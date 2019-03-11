


import React, { Component } from 'react'
import { AccordionList } from 'accordion-collapse-react-native'
import { info } from '../../../config/config'
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  ActivityIndicator,
  TouchableOpacity
} from 'react-native'

export default class IngressosView extends Component {

  titulo = (item) => (
    <View style={{
      height: 50,
      borderBottomWidth: 1,
      borderBottomColor: info.colors.primary,
      justifyContent: 'space-between',
      flexDirection: 'row'
    }} >
      <Text style={{
        fontSize: 16,
        color: info.colors.primary,
        marginLeft: 20,
        marginTop: 13,
        fontWeight: 'bold',
        justifyContent: 'center'
      }}>{item.temporada.nome}</Text>
      <View style={{
        justifyContent: 'center',
        padding: 10
      }} >
        <Image source={require('../../assets/down.png')} />
      </View>
    </View>
  )

  conteudo = (item) => {
    return (
      <View style={styles.campeonato}>
        {
          item.partidas.map((campeonato, index) => (
            <View key={index}>
              <Text style={styles.campeonatoText} key={index}>{campeonato.campeonato}</Text>
              {
                campeonato.partidas.map((i, ind) => (
                  i.ingressoVirtual !== null ?
                    <View style={styles.partida} key={ind} >
                      <View style={styles.sigla}>
                        <Image source={{ uri: i.clubeMandante.logo }} style={styles.logo} />
                        <Text style={styles.text}>{i.clubeMandante.sigla}</Text>
                      </View>
                      <View style={{ justifyContent: 'center', alignItems: 'center' }} >
                        <Text style={{ color: 'black', fontSize: 17 }} >X</Text>
                      </View>
                      <View style={styles.sigla}>
                        <Image source={{ uri: i.clubeVisitante.logo }} style={styles.logo} />
                        <Text style={styles.text}>{i.clubeVisitante.sigla}</Text>
                      </View>
                      <View>
                        <Text style={styles.text}>{i.fase}</Text>
                        <Text style={styles.text}>{i.rodada}</Text>
                        <Text style={styles.text}>{i.apelidoEstadio}</Text>
                        <View style={{ marginTop: 5 }}>
                          <Text style={{ color: 'black', fontWeight: 'bold' }}>{this.props.date(i.data)}</Text>
                        </View>
                      </View>
                      <TouchableOpacity
                        onPress={() => i.ingressoVirtual != null ? this.props.figura('Ingresso da partida', i.ingressoVirtual) : this.props.avisoIngresso()}
                      >
                        <Image style={styles.ticket} source={require('../../assets/ticket.png')} />
                      </TouchableOpacity>
                    </View> : <View></View>
                ))
              }
            </View>
          ))
        }
      </View>
    )
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
      <ScrollView style={styles.container}>
        {
          this.props.state.nomeTemporada === [] ?
            <Text> Voce não compareceu a nenhuma partida.</Text> :
            <AccordionList
              list={this.props.state.lista}
              header={this.titulo}
              body={this.conteudo}
            />
        }
      </ScrollView>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  activity: {
    height: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },

  view: {
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  collapseView: {
    paddingHorizontal: 30
  },
  iconView: {
    padding: 20,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: 'gray'
  },
  logo: {
    height: 50,
    width: 50,
  },
  campeonato: {
    marginBottom: 20,
    marginTop: 10,
    paddingHorizontal: 10
  },
  campeonatoText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 17,
    marginLeft: 10,
  },
  partida: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    marginTop: 15,
  },
  sigla: {
    alignItems: 'center',
    marginBottom: 15
  },
  icon: {
    color: 'gray'
  },
  ticket: {
    height: 40,
    width: 40,
    marginTop: 20,
  },
  text: {
    color: 'black'
  }
})