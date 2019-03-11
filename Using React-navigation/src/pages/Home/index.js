import React, { Component } from 'react'
import {
    View,
    StyleSheet
} from 'react-native'
import colors from '../../utils/colors'
import Tab from '../../nav/tabHome/index'
import ActionBar from '../../components/ActionBar/index'
import HomeHeader from '../../nav/HomeHeader/index'

export default class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ActionBar
                    iconL='menu'
                    color={Colors.blue}
                    title='SESI Franca Basquete'
                    onPressButtonL={() => this.props.navigation.openDrawer()}
                />
                <HomeHeader />
                <Tab />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.backGrey,
    },

})