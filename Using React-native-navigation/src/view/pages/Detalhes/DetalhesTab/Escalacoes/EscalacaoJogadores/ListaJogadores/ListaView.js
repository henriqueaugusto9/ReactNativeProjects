import React, { Component } from 'react'
import { View, StyleSheet, FlatList, Image, ActivityIndicator, TouchableHighlight, TouchableOpacity, Text } from 'react-native'
import { IconeMaterialComunity } from '../../../../../../components/Icons/index'

export default class ListaView extends Component {

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

    return (
      <View style={styles.container}>
        {
          this.props.state.dados.length === 0 ?
            <Text style={[styles.semRegistro, this.props.state.corFonteReserva]}>Não há jogadores nessa categoria!</Text> :
            <FlatList
              data={this.props.state.dados}
              keyExtractor={item => item.posicao}
              renderItem={({ item }) => {
                return (
                  <View key={item.posicao}>
                    <Text style={styles.textoPosicao}>{item.posicao}</Text>
                    {
                      item.jogadores.map(jogador => (
                        <TouchableOpacity
                          key={jogador.id}
                          onPress={() => this.props.navegacao(`${jogador.apelido} #${jogador.numeroCamisa}`, jogador.id, this.props.state.idPartida)}
                        >
                          <View style={styles.body}>
                            <View style={styles.containerFoto}>
                              {
                                jogador.imagem === null ?
                                  <IconeMaterialComunity
                                    name={'account-circle'}
                                    size={80}
                                  /> :
                                  <Image
                                    source={{ uri: jogador.imagem }}
                                    style={styles.picture}
                                  />
                              }
                            </View>
                            <View style={styles.descricao}>
                              <Text style={styles.name}>{`${jogador.apelido} #${jogador.numeroCamisa}`}</Text>
                            </View>
                          </View>
                        </TouchableOpacity>
                      ))
                    }
                  </View>
                )
              }} />
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: 'white'
  },

  activity: {
    height: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },

  conteudo: {
    marginTop: 50
  },

  titular: {
    top: 10,
    left: 30,
    width: 100,
    height: 40,
    padding: 10,
    position: 'absolute',
    alignItems: 'center',
    borderRadius: 3,
    justifyContent: 'center',
    zIndex: 1
  },

  reserva: {
    top: 10,
    width: 100,
    right: 30,
    height: 40,
    padding: 10,
    position: 'absolute',
    alignItems: 'center',
    borderRadius: 3,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1
  },

  textoClube: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },

  textoPosicao: {
    textAlign: 'center',
    color: '#930105',
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 20,
  },

  semRegistro: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 30
  },

  body: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
    marginBottom: 15
  },

  picture: {
    flex: 1,
    resizeMode: 'cover',
  },

  containerFoto: {
    width: 80,
    height: 80,
    borderRadius: 40,
    overflow: 'hidden',
    backgroundColor: '#E8E8E8'
  },

  descricao: {
    marginLeft: 15
  },

  name: {
    color: '#002076',
    fontWeight: 'bold',
    fontSize: 20,
  },


})