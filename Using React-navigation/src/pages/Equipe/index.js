import React, { Component } from 'react'
import { 
    Text, 
    View, 
    Image, 
    FlatList, 
    StyleSheet } from 'react-native'
import Colors from '../../utils/colors'
import { connect } from 'react-redux'

class Equipe extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.body} >
                    <FlatList
                        data={this.props.equipeReducer.players}
                        keyExtractor={( index ) => index.toString()}
                        renderItem={({ item }) => {
                            return (
                                <View key={item} style={styles.container}>
                                    <View>
                                        <Image
                                            source={require('../../assets/user.png')}
                                            style={styles.picture}
                                        />
                                    </View>
                                    <View>
                                        <Text style={styles.name}>{item.name}</Text>
                                        <Text style={{ fontSize: 14 }}>{item.fullname}</Text>
                                        <View style={styles.containerDados}>
                                            <Text style={styles.player}>{item.age}</Text>
                                            <Text style={styles.player}>{item.height}</Text>
                                        </View>
                                    </View>
                                    <View>
                                        <Text style={styles.textoPosicao}>{item.textoPosicao}</Text>
                                    </View>
                                </View>
                            )
                        }} />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 9,
        flexDirection: 'row',
        backgroundColor: Colors.backGrey,
    },

    body: {
        flex: 9,
        flexDirection: 'row',
        backgroundColor: Colors.backGrey,
    },

    containerDados: {
        flexDirection: 'row',
    },

    picture: {
        width: 80,
        height: 80,
        margin: 10
    },

    name: {
        color: Colors.blue,
        fontSize: 20,
        marginTop: 20,
    },

    player: {
        fontSize: 10,
    },

    textoPosicao: {
        left: 50,
        color: Colors.red,
        marginTop: 60
    }
})

const mapStateToProps = state => ({ equipeReducer: state.equipeReducer })
export default connect(mapStateToProps)(Equipe)
