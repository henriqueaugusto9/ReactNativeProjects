import React, { Component } from 'react'
import {
    Text,
    View,
    Image,
    FlatList,
    StyleSheet,
    ScrollView,
} from 'react-native'
import { connect } from 'react-redux'
import Colors from '../../utils/colors'
import { IconeMaterial } from '../../components/Icons'

class Confrontos extends Component {
    render() {
        return (
            <ScrollView>
                <View style={styles.body}>
                    <View style={styles.container}>
                        <View style={styles.viewUp}>
                            <View style={styles.conteudo}>
                                <Text style={styles.titulo}>Jogos</Text>
                                <Text style={styles.textBlue}>16</Text>
                            </View>

                            <View style={styles.conteudoComBordas}>
                                <Text style={styles.titulo}>Vitórias</Text>
                                <Text style={styles.textGreen}>10</Text>
                            </View>

                            <View style={styles.conteudo}>
                                <Text style={styles.titulo}>Derrotas</Text>
                                <Text style={styles.textRed}>6</Text>
                            </View>
                        </View>
                        <FlatList
                            data={this.props.Confrontos.historico}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item, index }) => {
                                return (
                                    <View key={item} style={styles.itemHistorico} >
                                        <View style={styles.casaVis}>
                                            <Image
                                                source={require('../../assets/logo.png')}
                                                style={styles.logo}
                                            />
                                            <Text style={styles.nomeTime}>{item.time}</Text>
                                        </View>

                                        <View style={styles.pontos}>
                                            <Text style={styles.vlrPontos}>98</Text>
                                        </View>

                                        <View style={styles.versus}>
                                            <Text style={styles.versusTxt}>22/03/2018</Text>
                                            <IconeMaterial
                                                name='close'
                                                size={20}
                                                color={Colors.lightRed}
                                                style={styles.icone}
                                            />
                                            <Text style={styles.versusTxt}>Pedrocão</Text>
                                        </View>

                                        <View style={styles.pontos}>
                                            <Text style={styles.vlrPontos}>75</Text>
                                        </View>

                                        <View style={styles.casaVis}>
                                            <Image
                                                source={require('../../assets/logoAdv.png')}
                                                style={styles.logo}
                                            />
                                            <Text style={styles.nomeTime}>Flamengo</Text>
                                        </View>
                                    </View>
                                )
                            }} />
                    </View>
                </View>
            </ScrollView>
        )
    }
}

const mapStateToProps = state => ({ Confrontos: state.Confrontos })
export default connect(mapStateToProps)(Confrontos)

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
        justifyContent: 'space-evenly',
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

    vlrPontos: {
        color: Colors.black,
        fontSize: 28,
        fontWeight: 'bold'
    },

    casaVis: {
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

    versusTxt: {
        fontSize: 10
    },

    viewUp: {
        top: 10,
        paddingLeft: 5,
        paddingRight: 5,
        marginBottom: 15,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        backgroundColor: Colors.white
    },

    conteudo: {
        alignItems: 'center',
    },

    conteudoComBordas: {
        marginRight: 30,
        marginLeft: 40,
        alignItems: 'center',
        paddingLeft: 40,
        borderColor: Colors.grey,
        paddingRight: 40,
        justifyContent: 'space-around',
        borderLeftWidth: 1,
        borderRightWidth: 1,
    },

    titulo: {
        color: Colors.black,
        fontSize: 14,
        fontWeight: 'bold'
    },

    textBlue: {
        color: Colors.blue,
        fontSize: 23,
        fontWeight: 'bold'
    },

    textRed: {
        color: Colors.lightRed,
        fontSize: 23,
        fontWeight: 'bold'
    },
    
    textGreen: {
        color: Colors.green,
        fontSize: 23,
        fontWeight: 'bold'
    },
})


