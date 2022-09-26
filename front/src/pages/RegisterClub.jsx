import { useForm } from 'react-hook-form'
import { API } from '../services/API'
import { useNavigate } from 'react-router-dom'
import { JwtContext } from '../context/jwtContext'
import { useContext } from 'react'

import './RegisterClub.css'

import React from 'react'

const RegisterClub = () => {

    const { user } = useContext(JwtContext)

    const { register, handleSubmit } = useForm();



    let navigate = useNavigate();

    const formSubmit = (data) => {
        const formData = new FormData();

        formData.append("nombre", data.nombre);

        formData.append("club", data.nombre);

        formData.append("avatar", data.avatar[0]);
        formData.append("email", data.email);
        formData.append("password", data.password);


        formData.append("localidad", data.localidad);
        formData.append("telefono", data.telefono);

        formData.append("fundacion", data.fundacion);

        formData.append("tipouser", data.tipouser == "club");


        //Marcar CLUB COMO TIPO DE USUARIO POR DEFECTO
        //NOMBRE DEL CLUB = NOMBRE USER





        API.post("/users/register", formData).then((res) => {

            navigate("/login");
            if (res) navigate("/login");
            ;
        });
    };

    return (

        <section className="registerClub">
            <h2>Ya puedes crear tu propio club</h2>
            <div className="formularioclub">


                <form onSubmit={handleSubmit(formSubmit)}>

                    <div className="Inputs1">

                        <label htmlFor="club">Nombre del Club</label>
                        <input type="text" id="nombre" name="nombre" placeholder="Campo requerido" {...register("nombre")} />


                        <label htmlFor="localidad">Localidad del club</label>
                        <input type="text" id="localidad" name="localidad" placeholder="Campo requerido"{...register("localidad")} />

                        <label htmlFor="email">E-mail</label>
                        <input type="email" id="email" name="email" placeholder="Mail del club" required {...register("email")} />

                        <label htmlFor="password">Contraseña</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Contraseña segura"
                            minlenght="5"
                            required
                            {...register("password")} />

                        <label htmlFor="telefono">Un Teléfono de contacto</label>
                        <input type="telefono" id="telefono" name="telefono" placeholder="Sólo números" required {...register("telefono")} />



                        <label htmlFor="avatar">Logo del club</label>
                        <input
                            type="file"
                            id="avatar"
                            name="avatar"
                            {...register("avatar")}
                        />

                        <label htmlFor="fundacion">Año de la fundación</label>
                        <input type="text" id="fundacion" name="fundacion" placeholder="Campo requerido"{...register("fundacion")} />


                    </div>


                    <button type="submit" className="boton-club">
                        {" "}
                        Registrar Club
                    </button>
                </form>
            </div>
        </section>
    )
}

export default RegisterClub