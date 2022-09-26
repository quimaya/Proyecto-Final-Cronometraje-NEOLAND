import axios from 'axios';
import { useParams } from 'react-router-dom';
import './InfoEvento.css';
import { Link } from 'react-router-dom';

import React, { useState, useEffect } from 'react'

const InfoEventoClub = () => {

    const { id } = useParams()

    const [user, setEvento] = useState([])

    const urlByID = 'http://localhost:8080/api/users/id'

    const getEvento = async () => {
        const peticion = await axios.get(`${urlByID}/${id}`)
        console.log(peticion)
        const data = peticion.data.user;
        setEvento(data)
    }

    useEffect(() => {
        getEvento()
        console.log(user)

    }, [])


    return (
        <section>
            <div className="infoEvento">
            <h2>{user.nombre}</h2>
            <div className="infoEvento2">

                <img src={user.avatar} alt="" />
                <Link to={`/perfil/eventscreated/${user._id}`}><h2>Eventos Organizados</h2></Link>
                    <h3>La sede está en {user.localidad}</h3>
                    <h3> Se fundó en el año {user.fundacion}</h3>
                    <h4>Telefono de contacto: {user.telefono}</h4>
                    <h4>E-mail de contacto: {user.email}</h4>

            </div>
            </div>
        </section>
    )

}

export default InfoEventoClub