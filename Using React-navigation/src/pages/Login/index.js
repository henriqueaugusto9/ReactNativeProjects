import React, { Component } from 'react'
import Modal from 'react-native-modal'
import Loading from '../../components/Splash/loading'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Colors from '../../utils/colors'
import {
    autenticar,
    handleChangeEmail,
    handleChangeSenha,
} from './action'
import {
    View,
    Text,
    Image,
    TextInput,
    StyleSheet,
    ImageBackground,
    TouchableOpacity,
} from 'react-native'

class Login extends Component {
    render() {
        return (
            <View style={styles.fundo}>
                <ImageBackground source={require('../../assets/fundoLogin.png')} style={styles.container} blurRadius={30}>
                    <View style={styles.form}>
                        <View style={styles.head}>
                            <Image
                                source={require('../../assets/logo.png')} style={styles.logo} />
                            <Text style={styles.texto}>Seja já um sócio torcedor!</Text>
                        </View>

                        <Modal
                            isVisible={this.props.login.loading}
                            onBackdropPress={() => this.props.login.loading = false}
                        >
                            <View style={{
                                flex: 1,
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                                <Loading />
                            </View>
                        </Modal>

                        <TextInput
                            placeholder='Usuário'
                            style={styles.input}
                            onChangeText={(email) => this.props.handleChangeEmail(email)}
                            placeholderTextColor={Colors.grey} />

                        <TextInput
                            placeholder='Senha'
                            secureTextEntry={true}
                            style={styles.input}
                            onChangeText={(senha) => this.props.handleChangeSenha(senha)}
                            placeholderTextColor={Colors.grey} />

                        <View style={styles.esqueciSenha}>
                            <TouchableOpacity
                                style={styles.recuperarSenha}>
                                <Text style={styles.formTexto}>Esqueci minha senha</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.submit} >
                            <TouchableOpacity
                                style={styles.botaoAcessar}
                                onPress={()=> this.props.navigation.navigate('Home')}
                                // onPress={() => this.props.autenticar(this.props.navigation)}
                            >
                                <Text style={styles.texto}>Acessar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.footer}>
                        <TouchableOpacity>
                            <Text style={styles.texto}>Visite nosso site oficial!</Text>
                        </TouchableOpacity>
                    </View>

                </ImageBackground>
            </View>
        )
    }
}

const mapStateToProps = state => ({ login: state.loginReducer })
const mapDispatchToProps = dispatch => bindActionCreators({
    autenticar,
    handleChangeEmail,
    handleChangeSenha,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Login)

const styles = StyleSheet.create({
    fundo: {
        flex: 1,
        backgroundColor: Colors.blue
    },

    container: {
        flex: 1,
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
        backgroundColor: Colors.red,
    },

    head: {
        marginTop: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },

    logo: {
        width: 200,
        height: 180,
        marginBottom: 20
    },

    texto: {
        color: Colors.white,
        fontSize: 15,
        fontWeight: 'bold',
    },

    form: {
        marginBottom: 30,
    },

    input: {
        color: Colors.white,
        width: 280,
        height: 35,
        opacity: 0.7,
        marginTop: 40,
        paddingLeft: 0,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: Colors.grey,
    },

    formTexto: {
        fontSize: 12,
        color: Colors.grey,

    },

    esqueciSenha: {
        width: 280,
        marginTop: 0,
    },

    recuperarSenha: {
        right: 0,
        position: 'absolute',
    },

    submit: {
        marginTop: 50,
        marginBottom: 60,
    },

    footer: {
        marginBottom: 30
    }
})