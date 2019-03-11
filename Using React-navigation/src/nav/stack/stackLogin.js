import { createStackNavigator } from 'react-navigation'

import Login from '../../pages/Login/index'
import Home from '../../nav/drawer/index'

const Stack = createStackNavigator({
    'Login': Login,
    'Home': Home,
},
    {
        initialRouteName: 'Login',
        headerMode: 'none',
    },
)

export default Stack
