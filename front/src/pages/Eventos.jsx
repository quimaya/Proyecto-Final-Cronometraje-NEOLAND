import { Link } from 'react-router-dom'
import { useEffect, useState } from "react"
import { API } from '../services/API'
import EventosCardCiclismo from '../components/EventosCardCiclismo'
import EventosCardAtletismo from '../components/EventosCardAtletismo'
import { useContext } from 'react'
import { JwtContext } from '../context/jwtContext'
import "./Eventos.css"


import React from 'react'

const Eventos = () => {

  const { user } = useContext(JwtContext)

  const [allEventos, setEventos] = useState([])

  const [showCiclismo, setShowCiclismo] = useState(true)

  const getAllEventos = async () => {
    API.get("/eventos").then((resEventos) => {
      setEventos(resEventos.data.results.eventos)
    })
  }

  useEffect(() => {
    getAllEventos()
  }, [])

  return (
    <section>

      <div className="container">

        <div className="encabezado">
          
          {user ? (

            <div>
              {user.tipouser === "club" ?

                (<Link to="./crearevento"><button><h2>¡Ya puedes crear tu evento aquí!</h2></button></Link>)
                :
                (<Link to="/registerclub"><button><h2>No puedes crear un evento si no eres club. ¡Registra uno aquí!</h2></button></Link>)
              }
            </div>
          ) :
            (null)
          }

        </div>


        <div className="filtros">
          <button className="botonCiclismo" onClick={() => setShowCiclismo(true)}> <h3>Eventos de Ciclismo</h3>

          </button>

          <button className="botonAtletismo" onClick={() => setShowCiclismo(false)}> <h3>Eventos de Atletismo</h3>

          </button>
        </div>

        <div className="Card">

          {showCiclismo ?
            <EventosCardCiclismo eventos={allEventos} />
            :
            <EventosCardAtletismo eventos={allEventos} />
          }
        </div>
      </div>
    </section>
  )
}

export default Eventos