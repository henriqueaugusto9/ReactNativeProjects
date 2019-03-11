import React, { Component } from 'react'
import {
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native'
import {
  IconeMaterial,
  IconeMaterialComunity
} from '../../components/Icons'

export default class BiografiaView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.containerImagem}>
            {

              this.props.state.imagemEstadio === null ?
                <IconeMaterialComunity
                  name={'stadium'}
                  size={180}
                  style={styles.imagem}
                /> :
                <TouchableOpacity style={styles.containerImagem} onPress={() => this.props.detalheImagem(this.props.state.imagemEstadio)}>
                  <Image
                    source={{ uri: this.props.state.imagemEstadio }}
                    style={styles.imagem}
                  />
                </TouchableOpacity>
            }
          </View>
          <View style={styles.informacoes}>
            <View style={styles.itemBiografia}>
              <View style={styles.descricao}>
                <IconeMaterial
                  name='today'
                  size={27}
                  style={styles.icone}
                />
                <Text style={styles.tituloItem}>Data de fundação:</Text>
              </View>
              <Text>{this.props.converteData(this.props.state.dataFundacao)}</Text>
            </View>

            <View style={styles.itemBiografia}>
              <View style={styles.descricao}>
                <IconeMaterialComunity
                  name='stadium'
                  size={27}
                  style={styles.icone}
                />
                <Text style={styles.tituloItem}>Estádio:</Text>
              </View>
              <TouchableOpacity onPress={() => this.props.navegacao()}>
                <Text style={[styles.link, this.props.state.corPrimaria]}>
                  {`${this.props.state.estadio}-${this.props.state.apelidoEstadio}`}
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.itemBiografia}>
              <View style={styles.descricao}>
                <IconeMaterial
                  name='person'
                  size={27}
                  style={styles.icone}
                />
                <Text style={styles.tituloItem}>Treinador atual:</Text>
              </View>
              <Text>{this.props.state.treinador}</Text>
            </View>

            <View style={styles.historiaClube}>
              <Text style={styles.tituloItemHistoria}>História do clube: </Text>
              <Text style={styles.historia}>{this.props.state.descricao}</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#fff',
  },

  containerImagem: {
    flex: 1,
    alignSelf: 'center',
    width: '100%',
    height: 200,
  },

  imagem: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
    marginBottom: 20,
  },

  activity: {
    top: 100
  },

  link: {
    fontSize: 14,
    fontWeight: 'bold'
  },

  tituloItem: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black'
  },

  conteudo: {
    alignItems: 'center',
    flexDirection: 'row',
  },

  itemBiografia: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  informacoes: {
    padding: 10
  },

  descricao: {
    alignItems: 'center',
    flexDirection: 'row',
  },

  historia: {
    textAlign: 'justify'
  },

  tituloItemHistoria: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 10
  },

  historiaClube: {
    margin: 5,
    justifyContent: 'space-around'
  },

  icone: {
    marginRight: 30
  },

})