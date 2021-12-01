import React from 'react';
import { useSelector, useDispatch } from 'react-redux' // Importando o useSelector que permite usar os estates e o useDispatch que dispara actions
import { removeReserve, updateAmountRequest } from '../../store/modules/reserve/actions' // Importando as actions
import { MdDelete, MdAddCircle, MdRemoveCircle } from 'react-icons/md'; // Importando componente da biblioteca React Icons
import './style.css';  // Importando o estilo CSS

export default function Reservas() {

  const dispatch = useDispatch() // Chamando o dispatch
  const reserves = useSelector(state => state.reserve)

  // Função que remove uma reserva (um item) através de uma dispatch que dispara uma action no store
  const handleRemove = (id) => {
      // dispatch que dispara a action que manipula os estados
      dispatch(removeReserve(id))
  }

  // Função que adiciona +1 na quantidade
  const incrementAmount = (trip) => {
    // dispatch que dispara a action que aumenta +1 da quantidade
    dispatch(updateAmountRequest(trip.id, trip.amount + 1))
  }

  // Função que remove -1 na quantidade
  const decrementAmount = (trip) => {
    // dispatch que dispara a action que diminui -1 da quantidade
    dispatch(updateAmountRequest(trip.id, trip.amount - 1))
  }

  return (
    <div>
     <h1 className="title">Voce solicitou {reserves.length} reservas</h1>

     {reserves.map(reserve => (
        <div className="reservas" key={reserve.id}>
          <img src={reserve.image} alt={reserve.title} />
          <strong>{reserve.title}</strong>

          <div id="amount">
            <button type="button" onClick={()=> decrementAmount(reserve)}>
              <MdRemoveCircle size={25} color="#191919" />
            </button>

              <input type="text" value={reserve.amount} readOnly />

            <button type="button" onClick={()=> incrementAmount(reserve)}>
              <MdAddCircle size={25} color="#191919" />
            </button>
          </div>
         
          <button type="button" onClick={()=> handleRemove(reserve.id)}>
            <MdDelete size={20} color="#191919" />
          </button>
        </div>       
     ))}

        <footer>
          <button type="button">Solicitar Reservas</button>
        </footer>
    </div>
 
  );

}