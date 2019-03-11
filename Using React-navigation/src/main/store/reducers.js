import { combineReducers } from 'redux'

import bancoReducer from '../../pages/Banco/reducer'
import loginReducer from '../../pages/Login/reducer'
import equipeReducer from '../../pages/Equipe/reducer'
import tabelaReducer from '../../pages/Tabelas/reducer'
import ticketReducer from '../../pages/Tickets/reducer'
import Confrontos from '../../pages/Confrontos/reducer'
import escalacaoReducer from '../../pages/Escalacoes/reducer'
import HomeHistoricoReducer from '../../pages/Historico/reducer'
import notificationReducer from '../../pages/Notificacoes/reducer'

const reducers = combineReducers({
    Confrontos: Confrontos,
    bancoReducer: bancoReducer,
    loginReducer: loginReducer,
    equipeReducer: equipeReducer,
    tabelaReducer: tabelaReducer,
    ticketReducer: ticketReducer,
    escalacaoReducer: escalacaoReducer,
    notificationReducer: notificationReducer,
    HomeHistoricoReducer: HomeHistoricoReducer,

})

export default reducers