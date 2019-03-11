import React, { Component } from 'react'
import { info } from '../../../config/config'
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native'

class Login extends Component {

  render() {
    return (
      <ScrollView style={{ backgroundColor: this.props.state.background, height: '100%' }}>

        <View style={styles.head}>
          <Image source={{ uri: this.props.state.logo }} style={styles.logo} />
        </View>

        <View style={styles.form}>

          <TouchableOpacity
            style={{ marginBottom: 10 }}
            onPress={this.props.siteSocio}
          >
            <Text style={styles.texto}>Seja já um sócio torcedor!</Text>
          </TouchableOpacity>


          <View style={{ backgroundColor: this.props.state.background }}>
            <TextInput
              isFocuded={true}
              placeholder='E-mail *'
              style={styles.inputLogin}
              onChangeText={this.props.onChangeEmail}
              placeholderTextColor={info.colors.white}
            />

            <TextInput
              placeholder='Senha *'
              secureTextEntry={true}
              style={styles.input}
              onChangeText={this.props.onChangeSenha}
              placeholderTextColor={info.colors.white}
            />

            <View style={styles.submit} >
              <TouchableOpacity
                disabled={this.props.state.disabled}
                style={{
                  marginBottom: 20,
                  width: 280,
                  height: 40,
                  borderRadius: 5,
                  backgroundColor: this.props.state.button,
                  alignItems: 'center',
                  justifyContent: 'center',
                  opacity: this.props.state.opacity
                }}
                onPress={() => this.props.logar()}
              >
                <Text style={styles.texto}>Acessar</Text>
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity
            style={styles.buttons}
            onPress={this.props.siteClube}
          >
            <Text style={styles.texto}>Visite nosso site oficial!</Text>
          </TouchableOpacity>

        </View>
      </ScrollView>
    )
  }
}

export default Login

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  botaoAcessar: {
    width: 280,
    height: 40,
    alignItems: 'center',
    borderRadius: 3,
    justifyContent: 'center',
    backgroundColor: 'red',
  },
  head: {
    height: 230,
    width: 230,
    marginTop: 20,
    alignSelf: 'center'
  },
  logo: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain',
    marginBottom: 5
  },
  texto: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    color: 'white',
    width: 280,
    height: 40,
    opacity: 0.7,
    fontSize: 16,
    marginTop: 30,
    paddingLeft: 0,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
  },
  inputLogin: {
    color: 'white',
    width: 280,
    height: 40,
    opacity: 0.7,
    fontSize: 16,
    marginTop: 10,
    paddingLeft: 0,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
  },
  formTexto: {
    fontSize: 16,
    color: 'grey',
  },
  submit: {
    marginTop: 40,
  },
  form: {
    alignItems: 'center',
    marginTop: 20,
    width: '100%'
  },
  buttons: {
    marginBottom: 10,
    width: 190,
    alignItems: 'center',
  }
})

