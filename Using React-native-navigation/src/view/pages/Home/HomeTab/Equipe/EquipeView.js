import React, { Component } from 'react'
import { View, Text, FlatList, Image, ActivityIndicator, ScrollView, StyleSheet } from 'react-native'
import { IconeMaterialComunity } from '../../../../components/Icons'
import { info } from '../../../../../config/config'

export default class EquipeView extends Component {
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
      <View>
        <ScrollView style={styles.container}>
          <FlatList
            data={this.props.dados}
            keyExtractor={item => item.posicao}
            renderItem={({ item }) => {
              return (
                <View>
                  <Text style={{
                    textAlign: 'center',
                    color: info.colors.secondary,
                    fontWeight: 'bold',
                    fontSize: 16,
                    marginTop: 20,
                  }}>{item.posicao}</Text>
                  {
                    item.jogadores.map(jogador => (
                      <View style={styles.body} key={jogador.id}>
                        <View style={styles.containerFoto}>
                          {
                            jogador.imagem === null ?
                              <IconeMaterialComunity
                                name={'account-circle'}
                                size={80}
                                style={styles.picture}
                              /> :
                              <Image
                                source={{ uri: jogador.imagem }}
                                style={styles.picture}
                              />
                          }
                        </View>
                        <View style={styles.descricao}>
                          <Text style={{
                            color: info.colors.primary,
                            fontWeight: 'bold',
                            fontSize: 20,
                          }}
                          >{`${jogador.apelido} #${jogador.numeroCamisa}`}</Text>
                          <Text style={styles.fullName}>{jogador.nome}</Text>
                          <View style={styles.containerDados}>
                            <Text style={styles.player}>{this.props.trataIdade(jogador.dataNascimento)} anos - </Text>
                            <Text style={styles.player}>{jogador.altura} </Text>
                          </View>
                        </View>
                      </View>
                    ))
                  }
                </View>
              )
            }} />
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  activity: {
    height: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },

  container: {
    height: '100%',
    backgroundColor: '#fff',
  },

  jogadores: {
    flexDirection: 'column'
  },

  input: {
    marginLeft: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },

  campoTexto: {
    fontSize: 16,
    width: '100%'
  },

  body: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
    marginBottom: 15
  },

  containerDados: {
    flexDirection: 'row',
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

  picture: {
    flex: 1,
  },

  fullName: {
    fontSize: 16
  },

  player: {
    fontSize: 14,
  },

  textoPosicao: {

  }
})