const INITIAL_STATE = {
    ingressos: [
        { home: 'SESI Franca', away: 'Flamengo', stadium: 'Pedrocão', date: '25/12/2018' },
        { home: 'SESI Franca', away: 'Flamengo', stadium: 'Pedrocão', date: '25/12/2018' },
        { home: 'SESI Franca', away: 'Flamengo', stadium: 'Pedrocão', date: '25/12/2018' },
        { home: 'SESI Franca', away: 'Flamengo', stadium: 'Pedrocão', date: '25/12/2018' },
        { home: 'SESI Franca', away: 'Flamengo', stadium: 'Pedrocão', date: '25/12/2018' },
        { home: 'SESI Franca', away: 'Flamengo', stadium: 'Pedrocão', date: '25/12/2018' },
        { home: 'SESI Franca', away: 'Flamengo', stadium: 'Pedrocão', date: '25/12/2018' },
        { home: 'SESI Franca', away: 'Flamengo', stadium: 'Pedrocão', date: '25/12/2018' },
        { home: 'SESI Franca', away: 'Flamengo', stadium: 'Pedrocão', date: '25/12/2018' },

    ]
}

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        default:
            return { ...state }
    }
}