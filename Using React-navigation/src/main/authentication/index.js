import React, { Component } from 'react'
import Drawer from '../../nav/drawer/index'
import Login from '../../nav/stack/stackLogin'
import { connect } from 'react-redux'

class Authentication extends Component {
    render() {
        return this.props.login.logado ? <Drawer /> : <Login />
    }
}

const mapStateToProps = state => ({ login: state.loginReducer })

export default connect(mapStateToProps)(Authentication)