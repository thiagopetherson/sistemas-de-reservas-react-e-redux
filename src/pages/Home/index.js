import React from 'react';
import { useState, useEffect } from 'react'  // Importando os Hooks do React
import { useDispatch } from 'react-redux' // Importando o useDispatch do Redux
import { addReserveRequest } from '../../store/modules/reserve/actions' // Importando as actions
import api from '../../services/api'  // Importando conexão do Axios
import './style.css' // Importando o estilo CSS

import { MdFlightTakeoff } from 'react-icons/md' // Importando componente da biblioteca React Icons

export default function Home({}) { // O history já é recebi automaticamente das props do react router dom

const dispatch = useDispatch() // Podemos usar o dispatch a partir daqui

const [trips, setTrips] = useState([]) // Estado que armazenará os dados da requisição

useEffect (() => {

  // Consulta que pega os dados da rota (que acessa o server que está rodando com json-server)
  const loadApi = async () => {
    const response = await api.get('trips')
    setTrips(response.data)   
  }

  loadApi()

}, [])

// Função adiciona uma trip
const handleAdd = (id) => {
  // dispatch que dispara a action que manipula os estados
  dispatch(addReserveRequest(id))
}
  

return (
  <div>
    <div className="box">
      {trips.map(trip => (
        <li key={trip.id}>
          <img src={trip.image} alt={trip.title} />
          <strong>{trip.title}</strong>
          <span>Status: {trip.status ? 'Disponivel' : 'Indisponivel'}</span>

          <button type="button" onClick={() => handleAdd(trip.id)}>  
            <div>
              <MdFlightTakeoff size={16} color="#FFF" /> {/* Componente do React Icons */}
            </div>
            <span>SOLICITAR RESERVA</span> 
          </button>
        </li>
      ))}
    </div>
  </div>
);

}