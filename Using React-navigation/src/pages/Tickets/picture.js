import React, { Component } from 'react'
import { View, Image, StyleSheet } from 'react-native'
import colors from '../../utils/colors';
import{ withNavigation } from 'react-navigation'

class fotoIngresso extends Component {
    render() {
        return (
            <View >
                <ActionBar
                    iconL='arrow-left'
                    color={Colors.blue}
                    title='SESI Franca X Flamengo'
                    onPressButtonL={() => this.props.navigation.pop()}
                    style={{ marginBottom: 50 }}
                />
                <View style={styles.foto} >
                    <Image
                        style={styles.img}
                        source={require('../../assets/ticket.png')} />
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    img: {
        height: '100%',
        width: '100%',
    },
    
    foto:{
        backgroundColor: colors.black,
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default withNavigation(fotoIngresso)