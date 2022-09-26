import { useForm } from 'react-hook-form'
import { API } from '../services/API'
import { useNavigate } from 'react-router-dom'
import { JwtContext } from '../context/jwtContext'
import { useContext } from 'react'
import { useParams } from 'react-router-dom'

import './CrearEvento.css'

import React from 'react'

const CrearEvento = () => {

  const { user } = useContext(JwtContext)

  const { register, handleSubmit } = useForm();



  let navigate = useNavigate();

  const formSubmit = (data) => {
    const formData = new FormData();
    formData.append("nombre", data.nombre);
    formData.append("cover", data.cover[0]);
    formData.append("distancia", data.distancia);
    formData.append("deporte", data.deporte);

    formData.append("localidad", data.localidad);
    formData.append("recorrido", data.recorrido[0]);

    formData.append("fecha", data.fecha);
    formData.append("precio1", data.precio1);
    formData.append("precio2", data.precio2);

    formData.append("organizador", user._id);




    API.post("/eventos/crear", formData).then((res) => {

      navigate("/eventos");
      if (res) navigate("/eventos");
      ;
    });
  };

  return (

    <section className="registerEvent">
      <h2>Es hora de crear tu propio evento</h2>
      <div className="formulariocreacion">


        <form onSubmit={handleSubmit(formSubmit)}>

          <div className="primaryInputs">

            <label htmlFor="nombre">Nombre del Evento</label>
            <input type="text" id="nombre" name="nombre" placeholder="Campo requerido" {...register("nombre")} />

            <label htmlFor="deporte">Elige deporte</label>
            <select name="deporte" id="deporte" {...register("deporte")}>
              <option value="ciclismo">Ciclismo</option>
              <option value="atletismo">Atletismo</option>
            </select>

            <label htmlFor="localidad">¿Dónde se celebra?</label>
            <input type="text" id="localidad" name="localidad" placeholder="Campo requerido"{...register("localidad")} />

            <label htmlFor="cover">El flyer pubicitario</label>
            <input
              type="file"
              id="cover"
              name="cover"
              {...register("cover")}
            />

            <label htmlFor="distancia">¿Cuántos kms tiene?</label>
            <input type="text" id="distancia" name="distancia" placeholder="Campo requerido"{...register("distancia")} />

            <label htmlFor="fecha">Fecha del evento</label>
            <input
              type="date" id="fecha" name="fecha" placeholder="Introduce fecha"
              {...register("fecha")}
            />
          </div>
          <div className="secondaryInputs">
            <label htmlFor="recorrido">Un mapa de la prueba</label>
            <input
              type="file"
              id="recorrido"
              name="recorrido"
              {...register("recorrido")}
            />


            <label htmlFor="precio1">Precio para federados</label>
            <input type="text" id="precio1" name="precio1"  {...register("precio1")} />


            <label htmlFor="precio1">Precio para No federados</label>
            <input type="text" id="precio2" name="precio2"  {...register("precio2")} />

          </div>

          <button type="submit" className="btn-evento">
            {" "}
            Registrar Evento
          </button>
        </form>
      </div>
    </section>
  )
}

export default CrearEvento