import React, { Component } from 'react'
import { View, Text, FlatList, Image, ActivityIndicator, TouchableOpacity, ScrollView, TextInput, StyleSheet } from 'react-native'
import { IconeMaterialComunity } from '../../components/Icons'

export default class JogadoresView extends Component {
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
          <View style={styles.input}>
            <IconeMaterialComunity
              name='magnify'
              size={30}
              style={styles.icone}
            />
            <TextInput
              placeholder='Pesquisar jogador'
              style={styles.campoTexto}
              onChangeText={(text) => this.props.filtrarLista(text)}
            />
          </View>
          <View style={styles.hr}></View>
          {
            this.props.state.semRegistros ?
              <Text style={[styles.semRegistro, this.props.state.corTextoPrimaria]}>Nenhum jogador foi encontrado!</Text> :
              <FlatList
                data={this.props.dados}
                keyExtractor={item => item.posicao}
                renderItem={({ item }) => {
                  return (
                    <View>
                      <Text style={[styles.textoPosicao, this.props.state.corTextoSecundaria]}>{item.posicao}</Text>
                      {
                        item.jogadores.map(jogador => (
                          <TouchableOpacity
                            key={jogador.id}
                            onPress={() => this.props.navegacao(`${jogador.apelido} #${jogador.numeroCamisa}`, jogador.id)}
                          >
                            <View style={styles.body}>
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
                                <Text style={[styles.name, this.props.state.corTextoPrimaria]}>{`${jogador.apelido} #${jogador.numeroCamisa}`}</Text>
                                <Text style={styles.fullName}>{jogador.nome}</Text>
                                <View style={styles.containerDados}>
                                  <Text style={styles.player}>{this.props.trataIdade(jogador.dataNascimento)} anos - </Text>
                                  <Text style={styles.player}>{jogador.altura} </Text>
                                </View>
                              </View>
                            </View>
                          </TouchableOpacity>
                        ))
                      }
                    </View>
                  )
                }} />
          }
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

  hr: {
    borderBottomColor: '#F0F0F0',
    borderBottomWidth: 1,
    elevation: 1,
    marginHorizontal: 20
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
    width: null,
    height: null,
  },

  name: {
    fontWeight: 'bold',
    fontSize: 20,
  },

  fullName: {
    fontSize: 16
  },

  player: {
    fontSize: 14,
  },

  semRegistro: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 30
  },

  textoPosicao: {
    textAlign: 'center',
    color: '#930105',
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 20,
  }
})