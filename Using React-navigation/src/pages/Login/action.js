import axios from 'axios'
import { apiLogin } from '../../routes/index'
import { INITIAL_STATE } from '../Login/reducer'
const e = 'Nao foi possivel realizar o login'
export const handleChangeEmail = (value) => {
    return {
        type: 'EMAIL',
        payload: value
    }
}
export const handleChangeSenha = (value) => {
    return {
        type: 'SENHA',
        payload: value
    }
}
export const handleLogado = (value) => {
    return {
        type: 'LOGIN',
        payload: value
    }
}
export const loading = (value) => {
    return {
        type: 'LOADING',
        payload: value
    }
}

export const handleReset = (value) => {
    return {
        type: 'RESET',
        payload: value
    }
}

export const autenticar = (navigation) => async (dispatch, getState) => {
    try {
        dispatch(loading(true))
        const { loginReducer } = getState()
        const { email, senha } = loginReducer
        const resp = await axios.post(apiLogin, {
            login: email,
            senha: senha,
        })
        dispatch([
            navigation.navigate('Home'),
            handleReset(INITIAL_STATE),
            // handleLogado(true),
        ])
    } catch (e) {
        console.log(e) //erros aqui
    } finally {
        dispatch(loading(false))
    }
}

export const deslogar = (navigation) => (dispatch) => {
    dispatch([
        handleReset(INITIAL_STATE),
        navigation.navigate('Login'),
    ])
}