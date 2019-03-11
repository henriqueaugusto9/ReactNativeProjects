const INITIAL_STATE = {
    nome: '',
    nascimento: '',
    logado: false,
}
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'LOGIN':
            return { ...state, logado: action.payload }
        default:
            return { ...state }
    }
}