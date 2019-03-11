import React, { Component } from 'react'
import {
    Text,
    View,
    Image,
    FlatList,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import Colors from '../../utils/colors'
import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation'
import { ScrollView } from 'react-native-gesture-handler';

class Banco extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ActionBar
                    iconL='arrow-left'
                    color={Colors.blue}
                    title='Banco SESI Franca'
                    onPressButtonL={() => this.props.navigation.pop()}
                />
                <View style={styles.body}>
                    <ScrollView>
                        <Text style={styles.posicao}>Armador</Text>
                        <FlatList
                            data={this.props.bancoReducer.armador}
                            keyExtractor={(index) => index.toString()}
                            renderItem={({ item }) => {
                                return (
                                    <TouchableOpacity key={item} style={styles.containerDados}>
                                        <View>
                                            <Image
                                                source={require('../../assets/user.png')}
                                                style={styles.picture}
                                            />
                                        </View>
                                        <View>
                                            <Text style={styles.name}>{item.name}</Text>
                                            <Text style={styles.nomeCompleto}>{item.fullname}</Text>
                                            <View style={styles.containerDados}>
                                                <Text style={styles.player}>{item.age}</Text>
                                                <Text style={styles.player}>{item.height}</Text>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                )
                            }}
                        />
                        <Text style={styles.posicao}>Ala</Text>
                        <FlatList
                            data={this.props.bancoReducer.ala}
                            keyExtractor={(index) => index.toString()}
                            renderItem={({ item }) => {
                                return (
                                    <TouchableOpacity key={item} style={styles.containerDados}>
                                        <View>
                                            <Image
                                                source={require('../../assets/user.png')}
                                                style={styles.picture}
                                            />
                                        </View>
                                        <View>
                                            <Text style={styles.name}>{item.name}</Text>
                                            <Text style={styles.nomeCompleto}>{item.fullname}</Text>
                                            <View style={styles.containerDados}>
                                                <Text style={styles.player}>{item.age}</Text>
                                                <Text style={styles.player}>{item.height}</Text>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                )
                            }}
                        />
                        <Text style={styles.posicao}>Pivô</Text>
                        <FlatList
                            data={this.props.bancoReducer.pivo}
                            keyExtractor={(index) => index.toString()}
                            renderItem={({ item }) => {
                                return (
                                    <TouchableOpacity key={item} style={styles.containerDados}>
                                        <View>
                                            <Image
                                                source={require('../../assets/user.png')}
                                                style={styles.picture}
                                            />
                                        </View>
                                        <View>
                                            <Text style={styles.name}>{item.name}</Text>
                                            <Text style={styles.nomeCompleto}>{item.fullname}</Text>
                                            <View style={styles.containerDados}>
                                                <Text style={styles.player}>{item.age}</Text>
                                                <Text style={styles.player}>{item.height}</Text>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                )
                            }}
                        />
                    </ScrollView>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
    },

    body:{
        width: '100%',
        marginTop: 70
    },

    containerDados: {
        flexDirection: 'row',
    },

    posicao: {
        fontSize: 16,
        fontWeight: 'bold',
        color: Colors.red,
        textAlign: 'center',
    },

    nomeCompleto: {
        fontSize: 14,
    },

    picture: {
        width: 80,
        height: 80,
        margin: 10
    },

    name: {
        color: Colors.blue,
        fontSize: 21,
        fontWeight: 'bold',
        marginTop: 20,
    },

    player: {
        fontSize: 10,
    },

})

const mapStateToProps = state => ({ bancoReducer: state.bancoReducer })
export default connect(mapStateToProps)(withNavigation(Banco))
