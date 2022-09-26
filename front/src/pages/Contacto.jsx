import "./Contacto.css"

import React from 'react'

const Contacto = () => {
    return (


        <section>
            <div className="encabezado">
                <h2>¿Eres organizador o corredor? </h2>
                <h3>Puedes contactar en el siguiente formulario. ¡Queremos saber de ti!</h3>
            </div>

            <div className="formulario">

                <div className="linea1">
                    <input type="string" id="nombre" name="nombre" placeholder="Nombre" />
                    <input type="string" id="E-mail" name="E-mail" placeholder="E-mail" />
                </div>

                <div className="seccion2">

                    <div className="linea2">
                        <input type="string" id="Asunto" name="Asunto" placeholder="Asunto" />
                    </div>

                    <div className="mensaje">
                        <input type="string" id="Mensaje" name="Mensaje" placeholder="Mensaje" />
                    </div>

                </div>

                <div className="privacidad">
                    <input type="checkbox" id="privacidad" name="privacidad" value="true" />
                    <label htmlFor="federado">Haciendo click acepto los términos de privacidad</label>
                </div>

                <div className="botonEnviar">
                    <button><h3>Enviar Mensaje</h3></button>
                </div>



            </div>


        </section>

    )
}

export default Contacto