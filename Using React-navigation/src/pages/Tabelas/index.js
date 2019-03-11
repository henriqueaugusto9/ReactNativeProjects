import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { 
    Rows, 
    Table,   
} from 'react-native-table-component';
import Colors from '../../utils/colors'
import { connect } from 'react-redux'

class Tabela extends Component {
    
    render() {
        const state = this.props.tabelaReducer
        return (
            <View style={styles.container}>
                <View style={styles.tabela}>
                    <Table borderStyle={{ borderWidth: 1, borderColor: Colors.grey }}>
                        <Rows data={state.tableData}  style={styles.row} textStyle={styles.text} />
                    </Table>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        elevation: 6,
        marginTop: 25,
        flexDirection: 'row',
        backgroundColor: Colors.white,
    },

    times: {
        flex: 1
    },

    nome: {
        color: Colors.blue,
        fontWeight: 'bold'
    },

    tabela: {
        flex: 3,
    },

    row: {
        height: 40
    },

    text: {
        textAlign: 'center',
        fontSize: 12,
        fontWeight: 'bold'
    }

});

const mapStateToProps = state => ({ tabelaReducer: state.tabelaReducer })
export default connect(mapStateToProps)(Tabela)