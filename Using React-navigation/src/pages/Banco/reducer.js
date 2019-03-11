const INITIAL_STATE = {
    armador: [
        {
            name: 'Coelho #10',
            fullname: 'Henrique Coelho',
            age: '24 anos - ',
            height: '1,86',
            position: 'Armador'
        },
        {
            name: 'Alexey #4',
            fullname: 'Henrique Coelho',
            age: '24 anos - ',
            height: '1,86',
            position: 'Armador'
        },
        {
            name: 'Antonio #7',
            fullname: 'Henrique Coelho',
            age: '24 anos - ',
            height: '1,86',
            position: 'Armador'
        },
        {
            name: 'Mineiro #8',
            fullname: 'Henrique Coelho',
            age: '24 anos - ',
            height: '1,86',
            position: 'Armador'
        },
    ],

    ala: [
        {
            name: 'Coelho #10',
            fullname: 'Henrique Coelho',
            age: '24 anos - ',
            height: '1,86',
            position: 'Armador'
        },
        {
            name: 'Alexey #4',
            fullname: 'Henrique Coelho',
            age: '24 anos - ',
            height: '1,86',
            position: 'Armador'
        },
        {
            name: 'Antonio #7',
            fullname: 'Henrique Coelho',
            age: '24 anos - ',
            height: '1,86',
            position: 'Armador'
        },
        {
            name: 'Mineiro #8',
            fullname: 'Henrique Coelho',
            age: '24 anos - ',
            height: '1,86',
            position: 'Armador'
        },
    ],

    pivo: [
        {
            name: 'Coelho #10',
            fullname: 'Henrique Coelho',
            age: '24 anos - ',
            height: '1,86',
            position: 'Armador'
        },
        {
            name: 'Alexey #4',
            fullname: 'Henrique Coelho',
            age: '24 anos - ',
            height: '1,86',
            position: 'Armador'
        },
        {
            name: 'Antonio #7',
            fullname: 'Henrique Coelho',
            age: '24 anos - ',
            height: '1,86',
            position: 'Armador'
        },
        {
            name: 'Mineiro #8',
            fullname: 'Henrique Coelho',
            age: '24 anos - ',
            height: '1,86',
            position: 'Armador'
        },
    ]
}

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'PLAYERS':
            return { ...state, players: action.payload }
        default:
            return state
    }
}