import React from 'react' // Importando o React
import { Router } from 'react-router-dom' // Importando o componente do React Router Dom
import Routes from './routes' // Importando o arquivo de rotas
import { Provider } from 'react-redux' // Importando o Provider do React Redux


import Header from './components/Header' // Importando o componente do Header

import history from './services/history' // Importando o history (a configuração)
import store from './store'


export default function App () {
  return (
      <Provider store={store}>
        <Router history={history}>
          <Header />
          <Routes />
        </Router>  
      </Provider> 
  )
}