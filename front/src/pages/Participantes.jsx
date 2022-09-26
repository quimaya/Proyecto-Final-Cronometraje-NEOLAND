import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ParticipantesCard from '../components/ParticipantesCard'
import { API } from '../services/API'
import './Participantes.css'

const Participantes = () => {

    const { id } = useParams()

    const [evento, setEvento] = useState({})

    const getEvento = async () => {

        API.get(`/eventos/id/${id}`).then((resEventos) => {
            console.log(resEventos)
            setEvento(resEventos.data.data.evento)

        })
    }

    useEffect(() => {
        getEvento()

    }, [])
    return (

        <section className="participantesdisplay">
            <h2>Participantes en {evento.nombre}</h2>

            <div className="encabezadoParticipantes">

                <p>Dorsal</p>
                <p>Nombre</p>
                <p>Apellido</p>
                <p>Club</p>
                <p>Fecha de Nacimiento</p>
            </div>

            <ParticipantesCard participantes={evento.participantes} />

        </section>

    )
}

export default Participantes