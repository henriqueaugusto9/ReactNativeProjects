import React, { Component } from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native'
import Colors from '../../utils/colors'

export default class Jogador extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.informacoes}>
                    <Text style={styles.nome}>Henrique Coelho</Text>
                    <Text style={styles.descricao}>Camisa #10</Text>
                    <Text style={styles.descricao}>Armador</Text>
                    <Text style={styles.descricao}>1,85m</Text>
                    <Text style={styles.descricao}>25 anos</Text>
                </View>

                <Image source={require('../../assets/alexey.png')} style={styles.imagem} />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 2,
        backgroundColor: Colors.blue,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
    },

    informacoes: {
        alignItems: 'flex-start',
        justifyContent: 'space-around',
        paddingLeft: 30,
        height: 170
    },

    imagem: {
        width: 164,
        height: 170
    },

    nome: {
        fontSize: 16,
        color: Colors.white,
        fontWeight: 'bold'
    },

    descricao: {
        fontSize: 16,
        color: Colors.white
    },
})