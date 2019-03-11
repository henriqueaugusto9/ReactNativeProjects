import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

class Splash extends Component {
    render(){
        return (
            <View style={styles.container} >
                <Text>Carregando...</Text>
            </View>
        )
    }
}
export default Splash

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        justifyContent: 'center'
    }
})