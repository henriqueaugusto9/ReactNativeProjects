import React, { Component } from 'react'
import { 
    Text, 
    View, 
    Image, 
    FlatList, 
    StyleSheet } from 'react-native'
import Colors from '../../utils/colors'
import { IconeMaterial } from '../../components/Icons'
import { connect } from 'react-redux'

class HomeHistorico extends Component {

    // componentDidMount(){  
    //     this.props.getDados()
    // }

    render() {
        return (
            <View style={styles.body}>
                <View style={styles.container}>
                    <FlatList
                        data={this.props.HomeHistoricoReducer.historico}
                        keyExtractor={( index ) => index.toString()}
                        renderItem={({ item }) => {
                            return (
                                <View key={item} style={styles.itemHistorico} >
                                    <View style={styles.viewTime}>
                                        <Image
                                            source={require('../../assets/logo.png')}
                                            style={styles.logo}
                                        />
                                        <Text style={styles.nomeTime}>{item.time}</Text>
                                    </View>

                                    <View style={styles.pontos}>
                                        <Text style={styles.textoValorPontosPontos}>98</Text>
                                    </View>

                                    <View style={styles.versus}>
                                        <Text style={styles.textoLocal}>22/03/2018</Text>
                                        <IconeMaterial
                                            name='close'
                                            size={20}
                                            color={Colors.lightRed}
                                            style={styles.icone}
                                        />
                                        <Text style={styles.textoLocal}>Pedrocão</Text>
                                    </View>

                                    <View style={styles.pontos}>
                                        <Text style={styles.textoValorPontosPontos}>75</Text>
                                    </View>

                                    <View style={styles.viewTime}>
                                        <Image
                                            source={require('../../assets/logo.png')}
                                            style={styles.logo}
                                        />
                                        <Text style={styles.nomeTime}>{item.time}</Text>
                                    </View>

                                </View>
                            )
                        }
                        }
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.white,
    },

    body: {
        flex: 2,
    },

    itemHistorico: {
        width: '100%',
        padding: 10,
        flexDirection: 'row',
        borderBottomWidth: 1,
        justifyContent: 'space-around',
        borderBottomColor: Colors.grey,
    },

    logo: {
        width: 36,
        height: 40,
    },

    icone: {
        width: 24,
        height: 24,
    },

    pontos: {
        alignItems: 'center',
        justifyContent: 'center',
    },

    textoValorPontosPontos: {
        color: Colors.black,
        fontSize: 28,
        fontWeight: 'bold'
    },

    viewTime: {
        alignItems: 'center'
    },

    nomeTime: {
        fontSize: 12,
        fontWeight: 'bold',
        color: Colors.blue
    },

    versus: {
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    textoLocal: {
        fontSize: 10
    }
})

const mapStateToProps = state => ({ HomeHistoricoReducer: state.HomeHistoricoReducer })
export default connect(mapStateToProps)(HomeHistorico)

