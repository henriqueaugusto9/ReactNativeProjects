const INITIAL_STATE = {
    email: '',
    senha: '',
    logado: false,
    loading: false,
}
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'EMAIL':
            return { ...state, email: action.payload }
        case 'SENHA':
            return { ...state, senha: action.payload }
        case 'LOGIN':
            return { ...state, logado: action.payload }
        case 'LOADING':
            return { ...state, loading: action.payload }
        case 'RESET':
            return { ...state = INITIAL_STATE }
        default:
            return { ...state }
    }
}