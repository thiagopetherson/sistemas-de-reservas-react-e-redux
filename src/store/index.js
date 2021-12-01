import { createStore, applyMiddleware } from 'redux' // Importando do Redux (o applyMiddleware serve para trabalharmos com middlewares)
import createSagaMiddleware from 'redux-saga' // Importando o redux saga

import rootReducer from './modules/rootReducer' // Importando o rootReducer (que tem o exportDefault de todos os módulos)
import rootSaga from './modules/rootSaga' // Importando o arquivo de configuração do redux saga

// Criando o saga middleware
const sagaMiddleware = createSagaMiddleware()
const enhancer = applyMiddleware(sagaMiddleware)
const store = createStore(rootReducer, enhancer)
// Fim da criação do saga middleware

sagaMiddleware.run(rootSaga)

export default store