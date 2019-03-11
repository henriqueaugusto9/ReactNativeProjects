import { Navigation } from 'react-native-navigation'
import { registerComponents } from './src/view/registerComponent'
import { container } from './src/ioc/container'

Navigation.events().registerAppLaunchedListener(() => 
{
  registerComponents()
  container.navigation.Auth()
})