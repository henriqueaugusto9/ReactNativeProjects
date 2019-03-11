import React, { Component } from 'react'
import { 
    View, 
    ScrollView,
    StyleSheet, 
} from 'react-native'
import Tabela from '../Tabelas/index'
import Comparacao from '../Comparacao/index'
import Colors from '../../utils/colors'

export default class DetalhesEstatistica extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <Tabela/>
                    <Comparacao/>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.backGrey,
    },

})