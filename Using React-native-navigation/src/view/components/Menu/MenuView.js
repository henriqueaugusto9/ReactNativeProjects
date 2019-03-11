import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image, Dimensions } from 'react-native'
import { IconeMaterialComunity } from '../Icons'

export default class MenuView extends Component {
  render() {
    const { state } = this.props
    return (
      <View style={styles.container}>
        <View style={
          {
            backgroundColor: state.corFundo,
            width: '100%',
            marginBottom: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 10
          }
        }>
          <View style={styles.clube}>
            <Image
              source={{ uri: state.logo }}
              style={styles.logo}
            />
            <Text style={styles.nomeClube}>{state.nomeClube}</Text>
          </View>

          <View style={styles.usuarioTemporada}>
            <View style={styles.usuario}>
              <Text style={styles.nomeUsuario}>{state.user}</Text>
            </View>
            <Text style={styles.temporada}>
              {state.temporada}
            </Text>
          </View>
        </View>

        <View style={styles.conteudo}> 
          <View style={styles.opcoes}>
            <View>
              {
                state.pagina.map(item => (
                  <TouchableOpacity key={item.id} style={[styles.opcao, item.selecionado ? {backgroundColor: '#DCDCDC'} : '']}
                    onPress={() => item.navegacao()}>
                    <IconeMaterialComunity
                      name={item.icone}
                      size={24}
                      style={[styles.icon, item.selecionado? this.props.state.corSelecionado : '']}
                    />
                    <Text style={[styles.opcaoTexto, item.selecionado ? this.props.state.corSelecionado : {color: '#000'} ]}>{item.titulo}</Text>
                  </TouchableOpacity>
                ))
              }
            </View>
          </View >

          <View style={styles.rodape}>
            <TouchableOpacity onPress={() => this.props.logout()} style={styles.estiloLogout}>
              <IconeMaterialComunity
                name='logout-variant'
                size={24}
                style={styles.iconeLogout}
              />
              <Text style={styles.opcaoTexto}>Sair do aplicativo</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View >
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    height: Dimensions.get('window').height
  },

  head: {
    backgroundColor: '#011E74',
    width: '100%',
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10
  },

  logo: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain',
    marginBottom: 10
  },

  clube:{
    height: 80,
    width: 90,
    bottom: 0,
    marginTop: 20
  },

  nomeClube: {
    fontSize: 12,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center'
  },

  usuarioTemporada: {
    justifyContent: 'space-between',
    alignItems: 'flex-end'
  },

  usuario: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  nomeUsuario: {
    fontSize: 16,
    color: '#fff',
  },

  temporada: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#fff'
  },

  conteudo: {
    height: '100%',
    width: '100%',
  },

  opcao: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 10,
    paddingVertical: 5,
    paddingLeft: 20,
  },

  icon: {
    marginRight: 10
  },

  opcaoTexto: {
    fontSize: 16
  },

  opcoes: {
    flex: 2,
    width: '100%',
  },

  rodape: {
    flex: 1,
    borderTopWidth: 1,
    borderTopColor: '#808080',
    width: '100%',
    justifyContent: 'flex-start',
    marginBottom: 10,
    paddingTop: 8
  },

  estiloLogout: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 10,
    marginLeft: 20,
  },

  iconeLogout: {
    marginRight: 10
  }

})