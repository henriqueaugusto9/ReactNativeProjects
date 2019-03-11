import React, { Component } from 'react'
import { 
    View, 
    StyleSheet 
} from 'react-native'
import colors from '../../utils/colors';
import DetalhesHeader from '../DetalhesHeader'
import Tab from '../../nav/tabDetalhes'

export default class Detalhes extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ActionBar
                    iconL='arrow-left'
                    color={Colors.blue}
                    title='SESI Franca X Flamengo'
                    onPressButtonL={() => this.props.navigation.pop()}
                />
                <DetalhesHeader />
                <Tab />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.backGrey
    },

})