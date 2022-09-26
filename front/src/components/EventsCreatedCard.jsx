import { Link } from 'react-router-dom'
import { useState } from 'react'
import './EventosCard.css'

import { useContext } from 'react'
import { JwtContext } from '../context/jwtContext'

import React from 'react'

const EventsCreatedCard = ({ eventos }) => {

  const { user } = useContext(JwtContext)

  return (


    <div className="eventosatletismo">

      {eventos.map((evento) => (

        <div className="eventosCard" key={evento._id}>

          {evento.organizador.nombre == user.nombre ?

            (
              <div className="cardAtletismo">

                <Link to ={`/eventos/infoEvento/${evento._id}`}><h2>{evento.nombre}</h2></Link>

                <img className="cover" src={evento.cover} />

                <h3>{evento.distancia}kms en {evento.localidad}</h3>

                <h4> Fecha: {evento.fecha}</h4>

              </div>
            )

            : null
          }

        </div>
      ))}
    </div>
  )
}


export default EventsCreatedCard