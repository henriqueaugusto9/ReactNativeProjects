import React, { Component } from 'react'
import {
    View,
    Text,
    Image,
    FlatList,
    StyleSheet,
    TouchableOpacity
} from 'react-native'

import { connect } from 'react-redux'

import {
    IconeMaterial,
    IconeMaterialComunity
} from '../../components/Icons/index'
import Colors from '../../utils/colors'

class Ingressos extends Component {
    render() {
        return (
            <View style={styles.body} >
                <ActionBar
                    iconL='menu'
                    color={Colors.blue}
                    title='Ingressos'
                    onPressButtonL={() => this.props.navigation.openDrawer()}
                />
                <View style={styles.viewFlatlist} >
                    <FlatList
                        data={this.props.ticketReducer.ingressos}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item, index }) => {
                            return (
                                <View style={styles.container} >
                                    <View style={styles.center} >
                                        <Image source={require('../../assets/logo.png')} style={styles.logo} />
                                        <Text style={styles.team} >{item.home}</Text>
                                    </View>

                                    <View style={styles.versus} >
                                        <IconeMaterial name='close' color={Colors.red} size={20} />
                                    </View>

                                    <View style={styles.center} >
                                        <Image source={require('../../assets/logoAdv.png')} style={styles.logo} />
                                        <Text style={styles.team}>{item.away}</Text>
                                    </View>

                                    <View style={styles.dados} >
                                        <Text style={styles.stadium}>{item.stadium}</Text>
                                        <Text style={styles.date}>{item.date}</Text>
                                    </View>

                                    <TouchableOpacity
                                        style={styles.ticket}
                                        onPress={() => this.props.navigation.navigate('Foto Ingresso')}
                                    >
                                        <IconeMaterialComunity name='ticket-confirmation' size={50} color={Colors.blue} />
                                    </TouchableOpacity>
                                </View>
                            )
                        }} />
                </View>
            </View>
        )
    }
}

const mapStateToProps = state => ({ ticketReducer: state.ticketReducer })

export default connect(mapStateToProps)(Ingressos)

const styles = StyleSheet.create({
    container: {
        flex: 2,
        backgroundColor: Colors.white,
        flexDirection: 'row',
        height: 85,
        borderBottomWidth: 1,
        borderBottomColor: Colors.grey,
        left: 15,
    },
    center: {
        alignItems: 'center',
        padding: 5,
    },
    team: {
        top: 5,
        fontSize: 12,
        color: Colors.blue
    },
    versus: {
        top: 25,
    },
    dados: {
        alignItems: 'center',
        left: 10,
        top: 30,
    },
    body: {
        flex: 2,
        backgroundColor: Colors.white
    },
    logo: {
        width: 50,
        height: 50,
    },
    stadium: {
        fontSize: 12,
        color: Colors.black
    },
    date: {
        top: 12,
        fontSize: 13,
        color: Colors.black
    },
    ticket: {
        left: 25,
        top: 20,
    },
    viewFlatlist: {
        flex: 2,
        top: 55,
        marginBottom: 50,
    }
})