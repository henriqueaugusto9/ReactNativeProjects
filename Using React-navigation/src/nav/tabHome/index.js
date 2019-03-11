import React, { Component } from 'react'
import { StyleSheet, Text } from 'react-native'
import Informacoes from '../../pages/Informacoes/Informacoes'
import HomeHistorico from '../../pages/Historico/index'
import Equipe from '../../pages/Equipe/index'
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import Colors from '../../utils/colors';



export default class Tab extends Component {
    state = {
        index: 0,
        routes: [
            { key: 'info', title: 'Informações' },
            { key: 'hist', title: 'Histórico' },
            { key: 'equipe', title: 'Equipe' },
        ],
    };

    _renderLabel = ({ route }) => (
        <Text style={styles.label}>{route.title}</Text>
    );

    render() {
        return (
            <TabView
                style={styles.tabview}
                navigationState={this.state}
                renderTabBar={props =>
                    <TabBar
                        {...props}
                        indicatorStyle={styles.indicador}
                        style={styles.barraNav}
                        
                        renderLabel={this._renderLabel}
                    />
                }
                renderScene={SceneMap({
                    info: Informacoes,
                    hist: HomeHistorico,
                    equipe: Equipe
                })}
                onIndexChange={index => this.setState({ index })}


            />
        );
    }
}

const styles = StyleSheet.create({
    tabview: {
        flex: 1
    },

    barraNav:{
        backgroundColor: Colors.blue,
    },

    label:{
       fontSize:14,
       color: Colors.white
    },

    indicador:{
        backgroundColor: Colors.red
    },
})

