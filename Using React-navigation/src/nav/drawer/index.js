import React, { Component } from 'react'
import { createDrawerNavigator } from 'react-navigation'

import Colors from '../../utils/colors'
import { stackHome } from '../stack/stackHome'
import Profile from '../../components/Drawer/drawer'
import { StackTickets } from '../../nav/stack/stackTickets'
import Historico from '../../components/Drawer/historico'
import Jogadores from '../../components/Drawer/jogadores'
import Notificacoes from '../../pages/Notificacoes/index'
import { IconeMaterialComunity, IconeMaterial } from '../../components/Icons'

const Drawer = createDrawerNavigator(
    {
        'Home': {
            screen: stackHome,
            navigationOptions: {
                drawerIcon: <IconeMaterialComunity name='home' size={22} />,
                title: 'Home',
            }
        },
        'Jogadores': {
            screen: Jogadores,
            navigationOptions: {
                drawerIcon: <IconeMaterial name='group' size={22} />,
                title: 'Jogadores',
            }
        },
        'Histórico de partidas': {
            screen: Historico,
            navigationOptions: {
                drawerIcon: <IconeMaterial name='access-time' size={22} />,
                title: 'Histórico de partidas',
            }
        },
        'Ingressos Virtuais': {
            screen: StackTickets,
            navigationOptions: {
                drawerIcon: <IconeMaterialComunity name='ticket-confirmation' size={22} />,
                title: 'Ingressos virtuais',
            }
        },
        'Notificaçoes': {
            screen: Notificacoes,
            navigationOptions: {
                drawerIcon: <IconeMaterial name='notifications-active' size={22} />,
                title: 'Notificações',
            }
        },
    },
    {
        contentComponent: (props) => <Profile {...props} />,
        drawerWidth: 250,
        contentOptions: {
            activeTintColor: Colors.blue,
        }
    },
);

export default Drawer
