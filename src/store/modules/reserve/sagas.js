import { select, call, put, all, takeLatest } from 'redux-saga/effects' // Importando o call, put e all do Redux Saga 
import { addReserveSuccess, updateAmountSuccess } from './actions' // Importando as actions
import api from '../../../services/api' // Importando a API para fazermos as requisições
import history from '../../../services/history' // Importando a History para usarmos as rotas da lib

// Função saga para adicionar uma reserva
// A função é assíncrona pois vamos fazer uma requisição na API
// Abaixo, o * é o generator (serve para trabalhar com funções assíncronas). Que é como se fosse o async await só que mais poderoso.
function* addToReserve ({id}) {

    // Verificando se essa viagem que está sendo adicionada já está na lista
    const tripExists = yield select(
        state => state.reserve.find(trip => trip.id === id)
    )
    
    // Fazendo requisição e vendo no estoque se o produto está disponível.
    const myStock = yield call(api.get, `/stock/${id}`)

    const stockAmount = myStock.data.amount

    // Pegando o estoque atual que tem na nossa lista de "reservas"
    const currentStock = tripExists ? tripExists.amount : 0

    // Adicionando + 1 na nossa lista de "reservas" (aumentando o amount)
    const amount = currentStock + 1
    
    // Verificando se a quantidade da nossa reserva ultrapassa a quantidade que temos em estoque daquela item
    if (amount > stockAmount) {
        alert('Quantidade máxima atingida.')
        return
    }
    
    if (tripExists) {
        
        yield put(updateAmountSuccess(id, amount))

    } else {
         // Fazendo a requisição
        const response = yield call(api.get, `trips/${id}`)

        // Dando 1 para o amount (pois é o primeiro)
        const data = {
            ...response.data,
            amount: 1,
        }

        // Disparando a action que adiciona a reserva
        yield put(addReserveSuccess(data))
        history.push('/reservas') // Redirecionando para essa rota (através da biblioteca History)
    }   
    
}

// Criando a função generator (Fazendo uma requisição ao estoque e validar a quantidade)
function* updateAmount ( {id, amount} ) {
   // Fazendo uma requisição ao estoque e validar a quantidade
   if (amount <= 0) return;
   const myStock = yield call(api.get, `/stock/${id}`) // Requisição

   const stockAmount = myStock.data.amount
   
    // Verificando se tem a quantidade em estoque
   if (amount > stockAmount) {
        alert('Quantidade máxima atingida')
        return
   }

   // 
   yield put(updateAmountSuccess(id, amount))

}

export default all([
    takeLatest('ADD_RESERVE_REQUEST', addToReserve), // Chamando a action
    takeLatest('UPDATE_RESERVE_REQUEST', updateAmount), // Chamando a action
])