import React, { Component } from 'react'
import {
    View,
    Text,
    Image,
    Alert,
    StyleSheet,
    ScrollView,
    TouchableOpacity
} from 'react-native'
import Colors from '../../utils/colors'
import { DrawerItems } from 'react-navigation'
import { IconeMaterialComunity } from '../../components/Icons'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { deslogar } from '../../pages/Login/action'

class profileDrawer extends Component {
    render() {
        return (
            <ScrollView>
                <View style={styles.body}>
                    <View style={styles.profile} >
                        <TouchableOpacity
                            style={styles.logout}
                            onPress={() => {
                                Alert.alert(
                                    'Sair',
                                    'Deseja realmente sair do aplicativo?',
                                    [
                                        { text: 'Sim', onPress: () => this.props.deslogar(this.props.navigation) },
                                        { text: 'Não' }
                                    ]
                                );
                            }
                            }
                        >
                            <IconeMaterialComunity name='logout-variant' size={22} color={Colors.white} />
                        </TouchableOpacity>
                        <Image source={require('../../assets/logo.png')}
                            style={styles.img}
                        />
                    </View>
                    <View style={styles.user}>
                        <Text style={styles.userText}>SESI Franca</Text>
                        <Text style={styles.userText}>Fernando Henrique</Text>
                    </View>
                </View>
                <DrawerItems {...this.props} />
            </ScrollView>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    deslogar,
}, dispatch)

export default connect(null, mapDispatchToProps)(profileDrawer)

const styles = StyleSheet.create({
    profile: {
        flexDirection: 'row'
    },
    body: {
        backgroundColor: Colors.blue,
        width: 250,
        height: 150,
        elevation: 20,
    },
    img: {
        top: 20,
        left: 15,
        height: 90,
        width: 80,
    },
    user: {
        flexDirection: 'row',
        marginTop: 30,
    },
    userText: {
        color: Colors.white,
        marginLeft: 20,
    },
    logout: {
        flex: 9,
        right: 0,
        position: 'absolute',
        padding: 10,
    }
})