import React, { Component } from 'react'
import {
    Text,
    View,
    Image,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import { withNavigation } from 'react-navigation'
import Colors from '../../utils/colors'
import { IconeMaterial, IconeMaterialComunity } from '../../components/Icons/index'

class JogoAtual extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.titulo}>Jogo anterior 01/12/18</Text>
                <View style={styles.disputa}>
                    <View style={styles.timeCasa}>
                        <Image source={require('../../assets/logo.png')} style={styles.logo} />
                        <Text style={styles.nomeTime}>SESI Franca</Text>
                    </View>

                    <View style={styles.versus}>
                        <Text style={styles.local}>Pedrocão</Text>
                        <IconeMaterial
                            name='close'
                            size={28}
                            color={Colors.white}
                            style={styles.icone}
                        />
                        <TouchableOpacity style={styles.botaoDetalhes}
                            onPress={() => this.props.navigation.navigate('Detalhes')}
                        >
                            <Text style={styles.textoBotaoDetalhes}>Detalhes</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.adversario}>
                        <Image source={require('../../assets/logoAdv.png')} style={styles.logo} />
                        <Text style={styles.nomeTime}>Flamengo</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.blue,
    },

    titulo: {
        fontSize: 14,
        fontWeight: 'bold',
        color: Colors.white,
        textAlign: 'center',
        marginBottom: 10
    },

    disputa: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    timeCasa: {
        alignItems: 'center',
        justifyContent: 'center'
    },

    logo: {
        width: 70,
        height: 63,
        marginBottom: 20
    },

    nomeTime: {
        fontSize: 14,
        fontWeight: 'bold',
        color: Colors.white,
    },

    versus: {
        alignItems: 'center',
        justifyContent: 'space-between',
        marginLeft: 40,
        marginRight: 40,
    },

    local: {
        fontSize: 11,
        color: Colors.white
    },

    icone: {
        marginBottom: 10,
        marginTop: 10
    },

    botaoDetalhes: {
        backgroundColor: Colors.white,
        elevation: 6,
        alignItems: 'center',
        justifyContent: 'center',
        width: 69,
        height: 24
    },

    textoBotaoDetalhes: {
        fontSize: 12,
        color: Colors.darkRed,
        fontWeight: 'bold',
    },

    adversario: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    
})

export default withNavigation(JogoAtual)