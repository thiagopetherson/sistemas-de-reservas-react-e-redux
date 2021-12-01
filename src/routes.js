import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom" // Impoertando os componentes do React Router Dom

import Home from './pages/Home' // Importando o componente
import Reservas from './pages/Reservas' // Importando o componente

export default function Routes () {
    return (       
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/reservas" exact component={Reservas} />
        </Switch>       
    )
}