import React, { Component } from 'react'
import { StyleSheet, Text } from 'react-native'
import DesempenhoJogador from '../../pages/DesempenhoJogador/index'
import TemporadaJogador from '../../pages/TemporadaJogador/index'
import InformacoesJogador from '../../pages/InformacoesJogador/index'
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import Colors from '../../utils/colors';

export default class TabViewExample extends Component {
    state = {
        index: 0,
        routes: [
            { key: 'des', title: 'Desempenho' },
            { key: 'temp', title: 'Na temporada' },
            { key: 'info', title: 'Informações' },
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
                    des: DesempenhoJogador,
                    temp: TemporadaJogador,
                    info: InformacoesJogador
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

