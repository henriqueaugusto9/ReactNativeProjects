const INITIAL_STATE = {
    adversario: false,
    casa: false,
}

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'casa':
            return {
                ...state, casa: action.payload
            }

        case 'adversario':
            return {
                ...state, adversario: action.payload
            }

        default:
            return state
    }
}