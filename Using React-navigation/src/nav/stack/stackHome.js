import React, { Component } from 'react'
import Home from '../../pages/Home/index'
import Banco from '../../pages/Banco/index'
import Login from '../../pages/Login/index'
import Detalhes from '../../pages/Detalhes/index'
import DetalheJogador from '../../pages/DetalheJogador/index';
import { createStackNavigator } from 'react-navigation'

export const stackHome = createStackNavigator({
    'Home': Home,
    'Detalhes': Detalhes,
    'Banco': Banco,
    'DetalheJogador': DetalheJogador,
    'Login': Login,
},
    {
        initialRouteName: 'Home',
        headerMode: 'none',
    },
)