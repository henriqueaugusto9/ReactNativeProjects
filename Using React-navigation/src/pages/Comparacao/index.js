import React, { Component } from 'react'
import { 
    View, 
    Text, 
    StyleSheet } from 'react-native'
import Colors from '../../utils/colors'

export default class Comparacao extends Component {
    render() {
        return (
            
            <View style={styles.container}>
                <Text style={styles.titulo}>Comparação entre os times</Text>
                
                <View>
                    <View style={styles.conteudo}>
                        <Text style={styles.timeCasa}> FRA</Text>
                        <Text style={styles.timeAdversario}> FLA</Text>
                    </View>

                    <View style={styles.conteudo}>
                        <Text style={styles.valores}> 40</Text>
                        <Text style={styles.categorias}> Assistências</Text>
                        <Text style={styles.valores}> 32</Text>
                    </View>

                    <View style={styles.conteudo}>
                        <Text style={styles.valores}> 38</Text>
                        <Text style={styles.categorias}> Total de rebotes</Text>
                        <Text style={styles.valores}> 37</Text>

                    </View>

                    <View style={styles.conteudo}>
                        <Text style={styles.valores}> 7</Text>
                        <Text style={styles.categorias}> Rebotes ofensivos</Text>
                        <Text style={styles.valores}> 8</Text>

                    </View>

                    <View style={styles.conteudo}>
                        <Text style={styles.valores}> 31</Text>
                        <Text style={styles.categorias}> Rebotes defensivos</Text>
                        <Text style={styles.valores}> 30</Text>

                    </View>

                    <View style={styles.conteudo}>
                        <Text style={styles.valores}> 10</Text>
                        <Text style={styles.categorias}> Roubadas de bola</Text>
                        <Text style={styles.valores}> 5</Text>
                    </View>

                    <View style={styles.conteudo}>
                        <Text style={styles.valores}> 4</Text>
                        <Text style={styles.categorias}> Bloqueios</Text>
                        <Text style={styles.valores}> 5</Text>
                    </View>

                    <View style={styles.conteudo}>
                        <Text style={styles.valores}> 40</Text>
                        <Text style={styles.categorias}> Faltas</Text>
                        <Text style={styles.valores}> 12</Text>
                    </View>
                </View>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 2,
        padding: 20
    },

    titulo: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Colors.black,
        marginBottom: 10,
        textAlign: 'center'
    },

    timeCasa: {
        color: Colors.blue,
        fontSize: 18,
        fontWeight: 'bold',
    },
    timeAdversario: {
        color: Colors.lightRed,
        fontSize: 18,
        fontWeight: 'bold',
    },

    valores: {
        fontSize: 21,
        fontWeight: 'bold',
        color: Colors.black
    },

    categorias: {
        fontSize: 13,
    },

    conteudo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 20,
        paddingRight: 20,
        marginBottom: 10,
        alignItems: 'center'
    },

})