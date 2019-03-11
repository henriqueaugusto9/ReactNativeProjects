import React, { Component } from 'react'
import { StyleSheet, Text } from 'react-native'
import Escalacoes from '../../pages/Escalacoes/index'
import DetalhesEstatistica from '../../pages/DetalhesEstatisticas/index'
import Confrontos from '../../pages/Confrontos/index'
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import Colors from '../../utils/colors';

export default class Tab extends Component {
    state = {
        index: 0,
        routes: [
            { key: 'esc', title: 'Escalações' },
            { key: 'est', title: 'Estatísticas' },
            { key: 'conf', title: 'Confrontos' },
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
                    esc: Escalacoes,
                    est: DetalhesEstatistica,
                    conf: Confrontos
                })}
                onIndexChange={index => this.setState({ index })}
            />
        );
    }
}
const styles = StyleSheet.create({
    tabview: {
        flex: 2
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

