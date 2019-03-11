import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    TouchableOpacity,
    TouchableHighlight
} from 'react-native'
import Colors from '../../utils/colors'
import { connect } from 'react-redux'
import { alteraTime } from './action'
import { IconeMaterial } from '../../components/Icons/index'
import { withNavigation } from 'react-navigation'
import { bindActionCreators } from 'redux'

class Escalacoes extends Component {
    render() {
        const state = this.props.escalacaoReducer
        return (
            <ImageBackground source={require('../../assets/fundoEscalacao.png')} style={styles.container}>

                <TouchableHighlight
                    onPress={() => this.props.alteraTime(false, true)}
                    style={[styles.adversario, state.adversario ? { zIndex: 1 } : {}]}
                >
                    <Text style={styles.textoTime}>Flamengo</Text>
                </TouchableHighlight>

                <TouchableHighlight
                    onPress={() => this.props.alteraTime(true, false)}
                    style={[styles.casa, state.casa ? { zIndex: 1 } : {}]}
                >
                    <Text style={styles.textoTime}>Sesi Franca</Text>
                </TouchableHighlight>

                <TouchableOpacity style={styles.armador1} onPress={() => this.props.navigation.navigate('DetalheJogador')}>
                    <Text style={styles.nome}>Coelho</Text>
                    <View style={[styles.iconeJogador, state.adversario ? { backgroundColor: Colors.red } : {}]}>
                        <Text style={styles.numero}>10</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.armador2} onPress={() => this.props.navigation.navigate('DetalheJogador')}>
                    <Text style={styles.nome}>Alexey</Text>
                    <View style={[styles.iconeJogador, state.adversario ? { backgroundColor: Colors.red } : {}]}>
                        <Text style={styles.numero}>4</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.ala} onPress={() => this.props.navigation.navigate('DetalheJogador')}>
                    <Text style={styles.nome}>Rafa Luz</Text>
                    <View style={[styles.iconeJogador, state.adversario ? { backgroundColor: Colors.red } : {}]}>
                        <Text style={styles.numero}>55</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.pivo1} onPress={() => this.props.navigation.navigate('DetalheJogador')}>
                    <Text style={styles.nome}>Gui Abreu</Text>
                    <View style={[styles.iconeJogador, state.adversario ? { backgroundColor: Colors.red } : {}]}>
                        <Text style={styles.numero}>33</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.pivo2} onPress={() => this.props.navigation.navigate('DetalheJogador')}>
                    <Text style={styles.nome}>Léo Mendi</Text>
                    <View style={[styles.iconeJogador, state.adversario ? { backgroundColor: Colors.red } : {}]}>
                        <Text style={styles.numero}>23</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.iconeBanco} onPress={() => this.props.navigation.navigate('Banco')}>
                    <IconeMaterial
                        name='event-seat'
                        size={24}
                        color={Colors.white}
                        style={styles.icone}
                    />
                </TouchableOpacity>
            </ImageBackground>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    casa: {
        top: 10,
        left: 30,
        width: 230,
        height: 40,
        padding: 10,
        position: 'absolute',
        alignItems: 'flex-start',
        borderRadius: 3,
        justifyContent: 'center',
        backgroundColor: Colors.blue,
    },

    adversario: {
        top: 10,
        width: 230,
        right: 30,
        height: 40,
        padding: 10,
        position: 'absolute',
        alignItems: 'flex-end',
        borderRadius: 3,
        justifyContent: 'center',
        backgroundColor: Colors.red,

    },

    textoTime: {
        color: Colors.white,
        fontSize: 15,
        fontWeight: 'bold',
    },

    container: {
        width: '100%',
        height: '100%'
    },

    nome: {
        color: Colors.white,
        fontSize: 14,
        fontWeight: 'bold'
    },

    numero: {
        color: Colors.white,
        fontSize: 18,
        fontWeight: 'bold',
    },

    iconeJogador: {
        width: 48,
        height: 48,
        elevation: 6,
        alignItems: 'center',
        borderRadius: 24,
        justifyContent: 'center',
        backgroundColor: Colors.blue,
    },

    iconeBanco: {
        width: 56,
        right: 10,
        height: 56,
        bottom: 10,
        position: 'absolute',
        elevation: 6,
        alignItems: 'center',
        borderRadius: 28,
        justifyContent: 'center',
        backgroundColor: Colors.black,
    },

    armador1: {
        top: '20%',
        right: '45%',
        position: 'absolute',
        elevation: 6,
        justifyContent: 'center',
    },

    armador2: {
        top: '35%',
        left: '15%',
        position: 'absolute',
        elevation: 6,
        justifyContent: 'center',
        
    },

    ala: {
        top: '35%',
        right: '15%',
        position: 'absolute',
        elevation: 6,
        justifyContent: 'center',
    },

    pivo1: {
        left: '30%',
        bottom: '5%',
        position: 'absolute',
        elevation: 6,
        justifyContent: 'center',
    },

    pivo2: {
        right: '25%',
        bottom: '5%',
        position: 'absolute',
        elevation: 6,
        justifyContent: 'center',
    },

})

const mapStateToProps = state => ({ escalacaoReducer: state.escalacaoReducer })
const mapDispatchToProps = dispatch => bindActionCreators({ alteraTime }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(Escalacoes))