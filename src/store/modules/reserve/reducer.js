// Estado da Reserva

import produce from 'immer' // Importando a biblioteca immer

export default function reserve (state = [], action) {
    
    switch(action.type) {
        case 'ADD_RESERVE_SUCCESS': // Action de adicionar uma reserva 
            return produce(state, draft => {

                // Verificando se já existe alguma trip (viajem) com aquele id, adicionado no state
                const tripIndex = draft.findIndex(trip => trip.id === action.trip.id)
                
                // Adicionando a trip, que veio no action, para dentro da state
                draft.push(action.trip)            
            }) 
        case 'REMOVE_RESERVE': // Action de remover uma reserva 
            return produce(state, draft => {
                // Verificando se já existe alguma trip (viajem) com aquele id, adicionado no state
                const tripIndex = draft.findIndex(trip => trip.id === action.id)

                // Se houve o id da viagem na nossa lista, removemos aquele item do estado            
                if ( tripIndex >= 0 ) {
                    // Removendo um item do estado da lista de reservas                
                    draft.splice(tripIndex, 1)
                } 
                
            }) 
        case 'UPDATE_RESERVE_SUCCESS': {// Action para incrementar + 1 ou decrementar -1 na quantidade da reserva            

            return produce(state, draft => {
                // Verificando se já existe alguma trip (viajem) com aquele id, adicionado no state
                const tripIndex = draft.findIndex(trip => trip.id === action.id)

                // Se houve o id da viagem na nossa lista, adicionaremos +1 ou removeremos -1 na quantidade            
                if ( tripIndex >= 0 ) {
                    // Adicionando +1 ou -1 na quantidade               
                    draft[tripIndex].amount = Number(action.amount)
                } 
            }) 
        }
        default: 
            return state
    }
   
}