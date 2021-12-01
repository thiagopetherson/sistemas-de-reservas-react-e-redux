// Action de adcionar uma reserva (aqui quem ouvirá é o saga)
export function addReserveRequest (id) {
    return {
        type: 'ADD_RESERVE_REQUEST', // É obrigatório ter o type (pois essa ADD_RESERVE será uma action no store)
        id 
    }    
}

// Action de adcionar uma reserva (quem ouvirá é o reducer)
export function addReserveSuccess (trip) {
    return {
        type: 'ADD_RESERVE_SUCCESS', // É obrigatório ter o type (pois essa ADD_RESERVE será uma action no store)
        trip 
    }    
}

// Action de remover uma reserva
export function removeReserve (id) {
    return {
        type: 'REMOVE_RESERVE',
        id,
    }    
}

// Action de incrementar +1 na quantidade (essa será ouvida pelo saga)
export function updateAmountRequest (id, amount) {
    return {
        type: 'UPDATE_RESERVE_REQUEST',
        id,
        amount
    }    
}

// Action de incrementar +1 na quantidade (essa será ouvida pelo redux)
export function updateAmountSuccess (id, amount) {
    return {
        type: 'UPDATE_RESERVE_SUCCESS',
        id,
        amount
    }    
}