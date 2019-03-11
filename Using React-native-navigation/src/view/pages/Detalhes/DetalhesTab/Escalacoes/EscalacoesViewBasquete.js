import React, { Component } from 'react'
import { View, Text, ImageBackground, StyleSheet, TouchableHighlight, TouchableOpacity, ActivityIndicator } from 'react-native'
import { IconeMaterialComunity } from '../../../../components/Icons'


export default class EscalacoesViewBasquete extends Component {
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

      <ImageBackground source={require('../../../../assets/quadraBasquete.png')} style={styles.container}>

        <TouchableHighlight
          onPress={() => 
            this.props.alteraTime(true, false, this.props.state.escalacaoMandante, this.props.state.corPrimaria, '', this.props.state.clubeMandante.id, this.props.state.clubeMandante.apelido)}
          style={[styles.casa, this.props.state.corPrimaria]}
        >
          <Text style={styles.textoClube}>{this.props.state.clubeMandante.apelido}</Text>
        </TouchableHighlight>

        <TouchableHighlight
          onPress={() => this.props.alteraTime(false, true, this.props.state.escalacaoVisitante, this.props.state.corSecundaria, '', this.props.state.clubeVisitante.id, this.props.state.clubeVisitante.apelido)}
          style={[styles.adversario, this.props.state.corSecundaria]}
        >
          <Text style={styles.textoClube}>{this.props.state.clubeVisitante.apelido}</Text>
        </TouchableHighlight>
        {
          this.props.state.escalacaoInicial.map(item => (
            <View style={[styles.player, this.props.state.posicaoBasquete[item.posicionamento - 1]]} key={item.posicionamento}>
              <Text style={styles.nome} numberOfLines={1} ellipsizeMode={'tail'}>{item.apelido}</Text>
              <View style={[styles.circuloNumero, this.props.state.corFundo]}>
                <Text style={styles.numero}>{item.numeroCamisa}</Text>
              </View>
            </View>
          ))
        }

        <TouchableOpacity style={styles.botaoEquipe}
          onPress={() => this.props.navegacao(`Escalação ${this.props.state.clubeApp}`, this.props.state.idPartida, this.props.state.clubeEscalacao)}
        >
          <IconeMaterialComunity
            name={'account-multiple'}
            size={30}
            color={'#FFFFFF'}
            style={styles.icone}
          />
        </TouchableOpacity>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%'
  },

  activity: {
    height: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },

  casa: {
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

  adversario: {
    top: 10,
    width: 100,
    right: 30,
    height: 40,
    padding: 10,
    position: 'absolute',
    alignItems: 'center',
    borderRadius: 3,
    justifyContent: 'center',
  },

  textoClube: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },

  player: {
    position: 'absolute',
    elevation: 6,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100
  },

  circuloNumero: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 48,
    width: 48,
    borderRadius: 24,
  },

  numero: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white'
  },

  nome: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white'
  },

  botaoEquipe: {
    position: 'absolute',
    right: 10,
    bottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    height: 48,
    width: 48,
    borderRadius: 24,
    backgroundColor: 'black',
  },

})