import "./ParticipantesCard.css"

import React from 'react'

const ParticipantesCard = ({ participantes }) => {

    console.log(participantes)
    return (
        <div>
            {
                participantes !== undefined && participantes.length > 0 ?

                    (
                        participantes.map((participante, index) =>

                            <div key={participante._id}>

                                <div className="participantescontainer">

                                    <p> {index + 1}</p>

                                    <p>{participante.nombre}</p>
                                    <p>{participante.apellido}</p>
                                    <p> {participante.club}</p>
                                    <p> {participante.nacimiento}</p>
                                </div>
                            </div>
                        ))


                    : null
            }

        </div>
    )
}

export default ParticipantesCard