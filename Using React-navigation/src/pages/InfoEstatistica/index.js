import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'
import Colors from '../../utils/colors'

export default class InfoEstatistica extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.head}>
                    <Text style={styles.tituloTopo}>Estatísticas</Text>
                </View>

                <View style={styles.viewUp}>
                    <View style={styles.conteudo}>
                        <Text style={styles.titulo}>Jogos</Text>
                        <Text style={styles.textBlue}>32</Text>
                    </View>

                    <View style={styles.conteudoComBordas}>
                        <Text style={styles.titulo}>Vitórias</Text>
                        <Text style={styles.textGreen}>30</Text>
                    </View>

                    <View style={styles.conteudo}>
                        <Text style={styles.titulo}>Derrotas</Text>
                        <Text style={styles.textRed}>2</Text>
                    </View>
                </View>

                <View style={styles.viewDown}>
                    <View style={styles.conteudo}>
                        <Text style={styles.titulo}>Mandante</Text>
                        <Text style={styles.textBlue}>15/1</Text>
                    </View>

                    <View style={styles.conteudo}>
                        <Text style={styles.titulo}>Visitante</Text>
                        <Text style={styles.textBlue}>15/1</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 2,
        elevation: 6,
        marginTop: 25,
        paddingBottom: 10,
        backgroundColor: Colors.white,
    },

    head: {
        width: '100%',
        alignItems: 'center',
        borderColor: Colors.grey,
        marginBottom: 20,
        justifyContent: 'center',
        borderBottomWidth: 1,
    },

    tituloTopo: {
        color: Colors.blue,
        margin: 10,
        fontSize: 14,
        fontWeight: 'bold',
    },

    viewUp: {
        paddingLeft: 20,
        paddingRight: 20,
        marginBottom: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    viewDown: {
        paddingLeft: 40,
        paddingRight: 50,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },

    conteudo: {
        alignItems: 'center',
        justifyContent: 'space-around'
    },

    conteudoComBordas: {
        alignItems: 'center',
        paddingLeft: 40,
        borderColor: Colors.grey,
        paddingRight: 40,
        justifyContent: 'space-around',
        borderLeftWidth: 1,
        borderRightWidth: 1,
    },

    titulo: {
        color: Colors.black,
        fontSize: 14,
        fontWeight: 'bold'
    },

    textBlue: {
        color: Colors.blue,
        fontSize: 23,
        fontWeight: 'bold'
    },

    textRed: {
        color: Colors.lightRed,
        fontSize: 23,
        fontWeight: 'bold'
    },

    textGreen: {
        color: Colors.green,
        fontSize: 23,
        fontWeight: 'bold'
    },

})
