// Importando esse combineReducer (Ele combina todos os reduces da nossa aplicação e carregar todos na nossa aplicação)
import { combineReducers } from 'redux'

import reserve from './reserve/reducer' // importando o store da reserva

export default combineReducers({
    reserve 
})