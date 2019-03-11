import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'
import Colors from '../../utils/colors'

export default class DesempenhoJogador extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.titulo}>Desempenho na partida</Text>

                <View style={styles.conteudo}>
                    <Text style={styles.subTitulo}>Total</Text>
                    <Text style={styles.subTitulo}>Percentual</Text>
                </View>

                <View style={styles.conteudo}>
                    <Text style={styles.valor}>17</Text>
                    <Text style={styles.descricao}>Pontos</Text>
                    <Text style={styles.valor}>20%</Text>
                </View>

                <View style={styles.conteudo}>
                    <Text style={styles.valor}>4</Text>
                    <Text style={styles.descricao}>Assistências</Text>
                    <Text style={styles.valor}>10%</Text>
                </View>

                <View style={styles.conteudo}>
                    <Text style={styles.valor}>7</Text>
                    <Text style={styles.descricao}>Rebotes ofensivos</Text>
                    <Text style={styles.valor}>8%</Text>
                </View>

                <View style={styles.conteudo}>
                    <Text style={styles.valor}>31</Text>
                    <Text style={styles.descricao}>Rebotes defensivos</Text>
                    <Text style={styles.valor}>30%</Text>
                </View>

                <View style={styles.conteudo}>
                    <Text style={styles.valor}>1</Text>
                    <Text style={styles.descricao}>Roubadas de bola</Text>
                    <Text style={styles.valor}>10%</Text>
                </View>

                <View style={styles.conteudo}>
                    <Text style={styles.valor}>0</Text>
                    <Text style={styles.descricao}>Bloqueios</Text>
                    <Text style={styles.valor}>0%</Text>
                </View>

                <View style={styles.conteudo}>
                    <Text style={styles.valor}>1</Text>
                    <Text style={styles.descricao}>Faltas</Text>
                    <Text style={styles.valor}>10%</Text>
                </View>

            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 3,
        padding: 10, 
        backgroundColor: Colors.white
    },

    conteudo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 20,
        marginBottom: 10
    },

    titulo: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Colors.black,
        marginBottom: 10,
        textAlign: 'center'
    },

    subTitulo: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Colors.blue
    },

    valor: {
        fontSize: 21,
        fontWeight: 'bold',
        color: Colors.black
    },

    descricao: {
        fontSize: 13
    },
})