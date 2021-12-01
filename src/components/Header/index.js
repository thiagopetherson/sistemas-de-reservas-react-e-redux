import React from 'react';
import { useSelector } from 'react-redux' // O useSeletor é responsável por conectar os nosso reduces com o redux
import { Link } from 'react-router-dom' // Importando o Link do React Router Dom
import logo from '../../assets/logo.svg' // Importando a logo
import './style.css' // Importando o CSS do componente


export default function Header() {
  const reserveSize = useSelector(state => state.reserve) // Pegando os dados do estado

 return (
  
    <header className="container">
      <Link to="/">
        <img className="logo" src={logo} alt="Logo do Projeto" />
      </Link>

      <Link className="reserva" to="/reservas">
        <div>
          <strong>Minhas Reservas</strong>
          <strong>{ reserveSize.length } reservas</strong>
        </div>
      </Link>
    </header>
 
 );
}