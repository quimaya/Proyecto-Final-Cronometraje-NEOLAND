import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import './EventosCard.css'



const EventosCardCiclismo = ({ eventos }) => {

  return (



    <div className="eventosatletismo">
      {eventos.map((evento) => (

        <div className="eventosCard" key={evento._id}>



          {evento.deporte == "ciclismo" ? (

            <div className="cardAtletismo">

              <Link to={`/eventos/infoEvento/${evento._id}`}> <h2>{evento.nombre}</h2></Link>

              <Link to={`/eventos/infoEvento/${evento._id}`}> <img className="cover" src={evento.cover} /> </Link>

              <h3>{evento.distancia}kms en {evento.localidad}</h3>

              <h4> Fecha: {evento.fecha}</h4>



              <Link to={`/eventos/infoEvento/${evento._id}`}> <h4 className="infoevento">Más información del evento</h4></Link>
            </div>
          )

            : null
          }

        </div>
      ))}

      <h2></h2>
    </div>
  )
}

export default EventosCardCiclismo

//Si falta menos de una semana para el evento que el fondo se quede en rojo