import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

import './Inscripcion.css'
import { JwtContext } from "../context/jwtContext";
import { API } from "../services/API";


import React, { useState, useContext, useEffect } from 'react'

const Inscripcion = () => {

    const { id } = useParams()

    const { user } = useContext(JwtContext)

    const [evento, setEvento] = useState([])

    let navigate = useNavigate()

    const urlByID = 'http://localhost:8080/api/eventos/id'

    const getEvento = async () => {
        const peticion = await axios.get(`${urlByID}/${id}`)
        const data = peticion.data.data.evento;
        setEvento(data)
    }

    const addParticipante = async () => {

        const userid = user._id
        const data = {
            "participantes" : [...evento.participantes, userid ]
        }
        API.patch (`/eventos/updateID/${evento._id}`, data).then((res) => {
            navigate(`/eventos/infoevento/${evento._id}`)
        })


    }




    useEffect(() => {
        getEvento()
        console.log(evento)

    }, [])


    return (
        <section className="Inscripcion">
            <h2>Hola {user.nombre}, estás a punto de inscribirte a {evento.nombre}</h2>
            <h3>¿Estás seguro de inscribirte?</h3>
            <h3>Recuerda que son {evento.distancia} kilómetros..</h3>
            <button onClick={() => addParticipante()} type="button">¡Me da igual la distancia, quiero inscribirme!</button>

        </section>

    )
}

export default Inscripcion