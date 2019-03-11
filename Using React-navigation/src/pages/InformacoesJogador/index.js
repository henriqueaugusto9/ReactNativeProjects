import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'
import Colors from '../../utils/colors'

export default class InformacoesJogador extends Component{
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.titulo}>Informações do jogador</Text>

                <View style={styles.conteudo}>
                    <Text style={styles.campo}>Nome:</Text>
                    <Text style={styles.descricao}>Henrique Coelho</Text>
                </View>

                <View style={styles.conteudo}>
                    <Text style={styles.campo}>Posição:</Text>
                    <Text style={styles.descricao}>Armador</Text>
                </View>

                <View style={styles.conteudo}>
                    <Text style={styles.campo}>Naturalidade:</Text>
                    <Text style={styles.descricao}>Uberlândia (MG)</Text>
                </View>

                <View style={styles.conteudo}>
                    <Text style={styles.campo}>Data de nascimento:</Text>
                    <Text style={styles.descricao}>17/02/1993</Text>
                </View>

                <View style={styles.conteudo}>
                    <Text style={styles.campo}>Altura / Peso:</Text>
                    <Text style={styles.descricao}>1,87 / 90kg</Text>
                </View>

            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 10
    },

    titulo:{
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        color: Colors.black
    },

    conteudo:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        padding: 20
    },

    campo:{
        fontSize: 16,
        color: Colors.black
    },

    descricao:{
       fontSize: 20,
       fontWeight: 'bold',
       color: Colors.blue
    },

})