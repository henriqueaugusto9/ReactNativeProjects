import React, { Component } from 'react'
import {
    View,
    Image,
    Text,
    FlatList,
    StyleSheet
} from 'react-native'
import Colors from '../../utils/colors'
import { bindActionCreators } from 'redux'
import { IconeMaterial } from '../../components/Icons'
import { connect } from 'react-redux'

class HomeHistorico extends Component {

    // componentDidMount(){  
    //     this.props.getDados()  logo logo a gente chega aqui!
    // }

    render() {
        return (
            <View style={styles.body}>
                <ActionBar
                    iconL='menu'
                    color={Colors.blue}
                    title='Histórico'
                    onPressButtonL={() => this.props.navigation.openDrawer()}
                    style={{ marginBottom: 50 }}
                />
                <View style={styles.container}>
                    <FlatList
                        data={this.props.HomeHistoricoReducer.historico}
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

const mapStateToProps = state => ({ HomeHistoricoReducer: state.HomeHistoricoReducer })
export default connect(mapStateToProps)(HomeHistorico)

const styles = StyleSheet.create({
    container: {
        flex: 2,
        marginTop: 50,
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
        justifyContent: 'space-around',
        borderBottomWidth: 1,
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
        fontWeight: 'bold',
    },

    casaVis: {
        alignItems: 'center',
    },

    nomeTime: {
        color: Colors.blue,
        fontSize: 12,
        fontWeight: 'bold',
    },

    versus: {
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    versusTxt: {
        fontSize: 10,
    }
})

