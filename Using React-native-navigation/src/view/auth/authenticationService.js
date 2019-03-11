import axios from 'axios'
import { AsyncStorage } from 'react-native'
import { lerDadosClube } from '../../config/config'
import { apiClube, siglaClube } from '../../routes/routes'

export const getDadosClube = async () => {
  await axios.get(`${apiClube}/mob/clube?sigla=${siglaClube}`)
    .then(async resp => {
      return await salvarDadosClube(resp.data.content)
    })
}

export const salvarDadosClube = async (dados) => {
  try {
    await AsyncStorage.setItem('dados', JSON.stringify(dados))
    await lerDadosClube()
  } catch (error) {
    alert(error)
  }
}