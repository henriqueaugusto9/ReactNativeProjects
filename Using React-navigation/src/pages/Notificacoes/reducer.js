const INITIAL_STATE = {
    notificacoes: [
        {
            titulo: 'Hoje é o seu dia!!!',
            mensagem: 'Fernando, nesta data tão especial o SESI Franca\n Basquete te deseja um FELIZ ANIVERSÁRIO!!'
        },
        {
            titulo: 'Bem-vindo ao Pedrocão!',
            mensagem: 'Seja bem-vindo ao nosso tempo do Basquete! \n É hora de apoiar nosso time do coração!!'
        },
        {
            titulo: 'Dia de Jogo!!!',
            mensagem: 'E ai, preparado para acompanhar nosso time do \n coração? Fique por dentro e não perca nada?'
        },
        {
            titulo: 'Hoje é o seu dia!!!',
            mensagem: 'Fernando, nesta data tão especial o SESI Franca\n Basquete te deseja um FELIZ ANIVERSÁRIO!!'
        },
        {
            titulo: 'Bem-vindo ao Pedrocão!',
            mensagem: 'Seja bem-vindo ao nosso tempo do Basquete! \n É hora de apoiar nosso time do coração!!'
        },
        {
            titulo: 'Dia de Jogo!!!',
            mensagem: 'E ai, preparado para acompanhar nosso time do \n coração? Fique por dentro e não perca nada?'
        },
        {
            titulo: 'Hoje é o seu dia!!!',
            mensagem: 'Fernando, nesta data tão especial o SESI Franca\n Basquete te deseja um FELIZ ANIVERSÁRIO!!'
        },
        {
            titulo: 'Bem-vindo ao Pedrocão!',
            mensagem: 'Seja bem-vindo ao nosso tempo do Basquete! \n É hora de apoiar nosso time do coração!!'
        },
        {
            titulo: 'Dia de Jogo!!!',
            mensagem: 'E ai, preparado para acompanhar nosso time do \n coração? Fique por dentro e não perca nada?'
        },
    ],
}

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        default:
            return { ...state }
    }
}