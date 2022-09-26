import axios from 'axios';
import { useParams } from 'react-router-dom';
import './InfoEvento.css';
import { Link } from 'react-router-dom';

import { JwtContext } from '../context/jwtContext'

import React, { useState, useEffect, useContext } from 'react'

const InfoEvento = () => {

  const { id } = useParams()

  const { user } = useContext(JwtContext)


  const [evento, setEvento] = useState([])

  const urlByID = 'http://localhost:8080/api/eventos/id'

  const getEvento = async () => {
    const peticion = await axios.get(`${urlByID}/${id}`)
    console.log(peticion)
    const data = peticion.data.data.evento;
    setEvento(data)
  }

  useEffect(() => {
    getEvento()
    console.log(evento)

  }, [])


  return (
    <section>
      <div className="infoEvento">
        <h2 className="tituloevento">{evento.nombre}</h2>
        <img src={evento.cover} alt="" />
        <div className="infoEvento2">
          <Link to={`/eventos/participantes/${evento._id}`}><h2 className="eventoparticipantes">Consulta el listado de participantes</h2></Link>
          <h3>Se celebra en {evento.localidad}</h3>
          <h3>Precio Federados: {evento.precio1}€</h3>
          <h3>Precio No Federados: {evento.precio2}€</h3>
          <div className="infoClubh4">
            <h4>Organizado por </h4>
            <Link to={`/users/infoUser/${evento.organizador?._id}`}><h4 className="linkorganizador"> {evento.organizador?.nombre}</h4></Link>

          </div>
        </div>

        <div className="preguntainscripcion">
          {user ? (
            <div>

              {user.tipouser == "corredor" ?
                (
                  <div className="inscripcion">
                    <p>¿Te quieres inscribir?</p>
                    <Link to={`/eventos/inscripcion/${evento._id}`}> <p className="inscripcionlink"> Puedes hacerlo aquí</p></Link>
                  </div>
                )
                :
                null}
            </div> )
            : null}
        </div>
      </div>
    </section>
  )

}

export default InfoEvento