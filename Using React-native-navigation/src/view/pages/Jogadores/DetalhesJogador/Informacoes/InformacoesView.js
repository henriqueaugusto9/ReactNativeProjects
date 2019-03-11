import React, { Component } from 'react'
import { View, Text, StyleSheet, ActivityIndicator, ScrollView } from 'react-native'
import { info } from '../../../../../config/config'

export default class InformacoesView extends Component {

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
        <View style={styles.informacoesView}>
          <Text style={{ 
            color: info.colors.primary,
            fontSize: 20, 
            fontWeight: 'bold'}}
          >Informações do jogador
          </Text>
        </View>

        <View style={styles.dados}>

          <View style={styles.formNomes}>
            <Text style={styles.textNomes}>Nome:</Text>
            <Text style={styles.textNomes}>Posiçao:</Text>
            <Text style={styles.textNomes}>Naturalidade:</Text>
            <Text style={styles.textNomes}>Data de Nascimento:</Text>
            <Text style={styles.textNomes}>Altura / Peso:</Text>
          </View>

          <View style={styles.formDados} >
            <Text style={styles.textDados} >
              {this.props.state.dadosJogador.nome}
            </Text>
            <Text style={styles.textDados} >
              {this.props.state.dadosJogador.nomePosicao}
            </Text>
            <Text style={styles.textDados} >
              {this.props.state.dadosJogador.nomeCidade}
            </Text>
            <Text style={styles.textDados} >
              {this.props.trataIdade(this.props.state.dadosJogador.dataNascimento)} anos 
            </Text>
            <Text style={styles.textDados} >
              {this.props.state.dadosJogador.altura}m / 
              {Math.floor(this.props.state.dadosJogador.peso)} kg
            </Text>
          </View>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  informacoesView:{
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 30,
  },
  activity: {
    height: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  dados:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 20
  },
  formNomes:{
    alignItems:'flex-start'
  },
  formDados:{
    alignItems: 'flex-end'
  },
  textNomes:{
    fontSize: 16,
    color: 'black',
    marginBottom: 20
  },
  textDados:{
    fontWeight: 'bold',
    fontSize: 16,
    color: 'black',
    marginBottom: 20,
  },
})