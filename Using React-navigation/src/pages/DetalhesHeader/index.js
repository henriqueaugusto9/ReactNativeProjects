import React, { Component } from 'react'
import { 
    View, 
    Text, 
    StyleSheet, 
    Image } from 'react-native'
import { IconeMaterial } from '../../components/Icons/index'
import Colors from '../../utils/colors'

export default class DetalhesHeader extends Component {
    render() {
        return (
            <View style={styles.container}>                   
                    <View style={styles.posTitulo}>
                        <Text style={styles.titulo}>Dia de Jogo! - 20h</Text>
                        <Text style={styles.textoLocal}>Pedrocão</Text>
                    </View>

                    <View style={styles.partida}>
                        <View style={styles.time}>
                            <Image
                                source={require('../../assets/logo.png')}
                                style={styles.logo}
                            />
                            <Text style={styles.nomeTime}>SESI Franca</Text>
                        </View>

                        <View style={styles.pontos}>
                            <Text style={styles.vlrPontos}>85</Text>
                            <IconeMaterial
                                name='close'
                                size={36}
                                color={Colors.lightRed}
                                style={styles.icone}
                            />
                            <Text style={styles.vlrPontos}>79</Text>
                        </View>

                        <View style={styles.time}>
                            <Image
                                source={require('../../assets/logoAdv.png')}
                                style={styles.logo}
                            />
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
        padding: 10,
        marginTop: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.blue,
    },

    posTitulo:{
        alignItems: 'center',
    },

    partida:{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },

    logo: {
        width: 70,
        height: 63,
        marginBottom:10,
    },

    icone: {
        marginLeft: 30,
        marginRight: 30,
    },

    pontos: {
        padding: 30,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },

    vlrPontos:{
        fontSize: 28,
        fontWeight: 'bold',
        color: Colors.white
    },

    time: {
        alignItems: 'center'
    },

    nomeTime: {
        color: Colors.white,
        fontSize: 14,
        fontWeight: 'bold',
    },

    titulo:{
        color: Colors.white,
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 10
    },

    textoLocal: {
        fontSize: 11,
        color: Colors.white
    }

})

