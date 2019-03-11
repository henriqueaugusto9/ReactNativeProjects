import { AsyncStorage } from 'react-native'

export let info = {}

export const lerDadosClube = async () =>{
  try {
    dados = await AsyncStorage.getItem('dados')
    info = JSON.parse(dados)
    info.colors = {
      red: '#950104',
      blue: '#011F75',
      grey: '#E4E4E4',
      green: '#75C043',
      white: '#FFFFFF',
      black: '#000000',
      darkRed: '#990005',
      lightRed: '#EE2E24',
      backGrey: '#FAFAFA',
      primary: info.corPrimaria,
      secondary: info.corSecundaria
    }
    return info
  } catch (error) {
    alert(error)
  }
}

export const lerDadosUsuario = async () =>{
  try {
    const dados = await AsyncStorage.getItem('user')
    return JSON.parse(dados)
  } catch (error) {
    alert(error)
  }
}