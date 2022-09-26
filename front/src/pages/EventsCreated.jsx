import { useState } from 'react'

import './EventsCreated.css'
import { useEffect } from 'react'
import { API } from '../services/API'

import React from 'react'
import EventsCreatedCard from '../components/EventsCreatedCard'

const EventsCreated = () => {


    const [allEventos, setEventos] = useState([])


    const getEventosCreated = async () => {
        API.get("/eventos").then((resEventos) => {
          setEventos(resEventos.data.results.eventos)
        })
      }

    useEffect(() => {
        getEventosCreated()
        console.log(allEventos)

    }, [])


    return (
        <section className="eventosCreados">
            <h2>Estos son los eventos organizados por el club</h2>
            <EventsCreatedCard eventos={allEventos} />
        </section>
    )
}

export default EventsCreated