import React, { Component } from 'react'
import { 
    Text, 
    View, 
    StyleSheet,
} from 'react-native'
import Colors from '../../utils/colors'
import { 
    IconeMaterial, 
    IconeMaterialComunity 
} from '../../components/Icons/index'

export default class Biografia extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.titulo}>Biografia</Text>
                <View style={styles.itemBiografia}>
                    <View style={styles.descricao}>
                        <IconeMaterial
                            name='today'
                            size={40}
                            style={styles.icone}
                        />
                        <Text style={styles.tituloItem}>Data de fundação:</Text>
                    </View>
                    <Text>01/01/1991</Text>             
                </View>

                <View style={styles.itemBiografia}>
                    <View style={styles.descricao}>
                        <IconeMaterialComunity
                            name='stadium'
                            size={40}
                            style={styles.icone}
                        />
                        <Text style={styles.tituloItem}>Estádio:</Text> 
                    </View> 
                    <Text>Pedrocão</Text>   
                </View>

                <View style={styles.itemBiografia}>                
                     <View style={styles.descricao}>
                        <IconeMaterial
                            name='person'
                            size={40}
                            style={styles.icone}
                        />   
                        <Text style={styles.tituloItem}>Treinador atual:</Text>
                    </View> 
                    <Text>Helinho Garcia</Text>  
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:2,
        padding: 10,
        marginTop: 25,
        elevation: 6,
        alignItems: 'center',
        backgroundColor: Colors.white,
    },

    titulo:{
        color: Colors.blue,
        margin: 10,
        fontSize: 14,
        fontWeight: 'bold',
    },

    tituloItem:{
        fontSize:14,
        fontWeight: 'bold',
        color: Colors.black
    },

    conteudo:{
        alignItems: 'center',
        flexDirection:'row',
    },

    itemBiografia:{
        width: '100%',
        alignItems: 'center',
        marginBottom: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    descricao:{
        alignItems: 'center',
        flexDirection: 'row',
    },

    icone:{
        marginRight:30
    },

})