import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'
import Jogador from '../Jogador/index'
import DesempenhoJogador from '../DesempenhoJogador/index';
import Colors from '../../utils/colors'

export default class DetalheJogador extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ActionBar
                    iconL='arrow-left'
                    color={Colors.blue}
                    title='Coelho #10'
                    onPressButtonL={() => this.props.navigation.pop()}
                />
                <Jogador />
                <DesempenhoJogador />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.backGrey,
    }
})