import {AppRegistry} from 'react-native'
import {name as appName} from './app.json'
import Store from './src/main/store/store'


AppRegistry.registerComponent(appName, () => Store);
