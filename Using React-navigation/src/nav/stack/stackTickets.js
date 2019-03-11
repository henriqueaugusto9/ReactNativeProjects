import { createStackNavigator } from 'react-navigation'

import Ingressos from '../../pages/Tickets/index'
import FotoIngresso from '../../pages/Tickets/picture'

export const StackTickets = createStackNavigator({
    'Ingressos Virtuais': Ingressos,
    'Foto Ingresso': FotoIngresso,
},
    {
        initialRouteName: 'Ingressos Virtuais',
        headerMode: 'none',
    },
)