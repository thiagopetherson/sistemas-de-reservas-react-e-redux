import { all } from 'redux-saga/effects' // Importando o redux saga

import reserve from './reserve/sagas' // Importando o middleware criado com o redux saga

export default function* rootSaga () {
    return yield all([
        reserve, // Passando o middleware do sagas do reserve
    ])
}