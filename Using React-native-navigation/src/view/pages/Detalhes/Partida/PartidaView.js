import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, ActivityIndicator } from 'react-native'
import { IconeMaterialComunity } from '../../../components/Icons'

export default class PartidaView extends Component {

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
      <View style={styles.container}>
        <Text
          style={styles.descricao}>{`${this.props.state.dados.campeonato} - ${this.props.state.dados.fase} - ${this.props.state.dados.rodada} rodada`}
        </Text>
        <Text style={styles.local}>
          {`${this.props.state.dados.horaInicio}h${this.props.state.dados.minutoInicio} - ${this.props.state.dados.local}`}
        </Text>
        <View style={styles.confronto}>
          <View style={styles.clube}>
            <View style={styles.containerImagem}>
              <Image source={{ uri: this.props.state.mandante.logo }} style={styles.imagemClube} />
            </View>
            <Text style={styles.descricao}>{this.props.state.mandante.apelido}</Text>
          </View>

          <View style={styles.infoPrincipal}>
            <View style={styles.placar}>
              <Text style={styles.pontos}>
                {
                  this.props.state.dados.pontuacaoMandante === null ? 0 : this.props.state.dados.pontuacaoMandante
                }
              </Text>
              <IconeMaterialComunity
                name={'close'}
                size={30}
                color={'#FFFFFF'}
                style={styles.icone}
              />
              <Text style={styles.pontos}>
                {
                  this.props.state.dados.pontuacaoVisitante === null ? 0 : this.props.state.dados.pontuacaoVisitante
                }
              </Text>
            </View>

            {
              this.props.state.dados.penaltisMandante !== null || this.props.state.dados.penaltisVisitante !== null ?
                <View style={styles.penaltis}>
                  <Text style={styles.pontosPenalti}>
                    {
                      this.props.state.dados.penaltisMandante === null ? 0 : this.props.state.dados.penaltisMandante
                    }
                  </Text>
                  <IconeMaterialComunity
                    name={'close'}
                    size={10}
                    color={'#FFFFFF'}
                    style={styles.icone}
                  />
                  <Text style={styles.pontosPenalti}>
                    {
                      this.props.state.dados.penaltisVisitante === null ? 0 : this.props.state.dados.penaltisVisitante
                    }
                  </Text>
                </View> : null
            }

          </View>

          <View style={styles.clube}>
            <View style={styles.containerImagem}>
              <Image source={{ uri: this.props.state.visitante.logo }} style={styles.imagemClube} />
            </View>
            <Text style={styles.descricao}>{this.props.state.visitante.apelido}</Text>
          </View>
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {

    flex: 1,
    justifyContent: 'center'

  },

  activity: {
    height: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },

  campeonato: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginTop: 10
  },

  data: {
    fontSize: 16,
    color: '#FFFFFF',
    textAlign: 'center'
  },

  local: {
    fontSize: 13,
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 10
  },

  confronto: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },

  infoPrincipal: {
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  icone: {
    marginHorizontal: 10,
  },

  descricao: {
    fontSize: 14,
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  clube: {
    alignItems: 'center',
    width: 80,
    height: 80
  },

  containerImagem: {
    width: 80,
    height: 80
  },

  imagemClube: {
    flex: 1,
    height: null,
    width: null,
    resizeMode: 'contain',
    marginBottom: 10
  },

  placar: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  pontos: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },

  pontosPenalti: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },

  penaltis: {
    flexDirection: 'row',
    alignItems: 'center',
  },


  descricaoPartida: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginTop: 5
  }

})