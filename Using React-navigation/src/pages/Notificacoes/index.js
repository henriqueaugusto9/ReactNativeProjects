import React, { Component } from 'react'
import { 
    Text, 
    View, 
    Image,
    FlatList, 
    StyleSheet,
    TouchableOpacity 
} from 'react-native'
import { connect } from 'react-redux'
import Colors from '../../utils/colors'

class Notificacoes extends Component {
    render() {
        return (
            <View style={styles.principal} >
                <ActionBar
                    iconL='menu'
                    color={Colors.blue}
                    title='Notificações'
                    onPressButtonL={() => this.props.navigation.openDrawer()}
                    style={{ marginBottom: 50 }}
                />
                <View style={styles.body} >
                    <FlatList
                        data={this.props.notificationReducer.notificacoes}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item, index }) => {
                            return (
                                <TouchableOpacity style={styles.container} >
                                    <Image
                                        style={styles.img}
                                        source={require('../../assets/logo.png')}
                                    />
                                    <View style={styles.space} >
                                        <Text style={styles.titulo} >{item.titulo}</Text>
                                        <Text style={styles.mensagem} >{item.mensagem}</Text>
                                    </View>
                                </TouchableOpacity>
                            )
                        }} />
                </View>
            </View>
        )
    }
}

const mapStateToProps = state => ({ notificationReducer: state.notificationReducer })

export default connect(mapStateToProps)(Notificacoes)

const styles = StyleSheet.create({
    container: {
        flex: 2,
        backgroundColor: Colors.white,
        flexDirection: 'row',
        padding: 10,
        width: '100%',
        borderBottomColor: Colors.grey,
        borderBottomWidth: 2,
    },
    body: {
        flex: 2,
        marginTop: 60,
    },
    titulo: {
        fontSize: 16,
        color: Colors.black
    },
    mensagem: {
        fontSize: 11,
        color: Colors.black
    },
    img: {
        height: 50,
        width: 50,
        padding: 10,
    },
    space: {
        left: 10
    },
    principal: {
        flex: 2
    }

})