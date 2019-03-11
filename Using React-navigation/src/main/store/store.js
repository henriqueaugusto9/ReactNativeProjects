import React, { Component } from 'react'

import { Provider } from 'react-redux'
import multi from 'redux-multi'
import thunk from 'redux-thunk'
import promise from 'redux-promise'
import reducers from '../store/reducers'

import Authentication from '../authentication'

import {
    createStore,
    applyMiddleware
} from 'redux'

const store = applyMiddleware(promise, multi, thunk)(createStore)(reducers)

export default class storage extends Component {
    render() {
        return (
            <Provider store={store}>
                <Authentication />
            </Provider>
        )
    }
}