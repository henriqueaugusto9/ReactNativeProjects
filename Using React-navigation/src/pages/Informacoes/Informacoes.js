import React, { Component } from 'React'
import { ScrollView } from 'react-native'
import InfoEstatistica from '../InfoEstatistica/index'
import Biografia from '../Biografia/index'

export default class Informacoes extends Component{
    render() {
        return (
            <ScrollView>
                <InfoEstatistica/>
                <Biografia/>
            </ScrollView>
        )
    }
}

