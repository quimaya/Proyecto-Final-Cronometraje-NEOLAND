import "./UpdatePerfil.css"
import { useContext } from "react"
import { useForm } from 'react-hook-form'
import { useNavigate } from "react-router-dom"
import { JwtContext } from "../context/jwtContext"
import { API } from "../services/API"

import React from 'react'

const UpdatePerfil = () => {

    const { user, logout } = useContext(JwtContext)
    const { register, handleSubmit } = useForm()

    let navigate = useNavigate()

    const formSubmit = data => {
        const formData = new FormData();

        formData.append("nombre", data.nombre);
        formData.append("apellido", data.apellido);
        formData.append("nacimiento", data.nacimiento);

        formData.append("club", data.club);
        formData.append("avatar", data.avatar[0]);

        formData.append("federado", data.federado);
        formData.append("tipouser", data.tipouser);

        API.patch(`/users/update/${user._id}`, formData).then((res => logout() &
            navigate("/login2")))
    }


    return (
        <section>
            <form onSubmit={handleSubmit(formSubmit)}>

                <h2>¿Algún cambio últimamente? Puede que sea hora de actualizar tu perfil</h2>
                <div className="formulario">

                    <div className="updateNombre">

                        <p>Nombre actual: {user.nombre}</p>

                        <div className="nuevoNombre">
                            <label htmlFor="nombre"><p>Nuevo Nombre:</p> </label>
                            <input type="text" id="nombre" name="nombre" {...register("nombre")} />
                        </div>

                    </div>


                    <div className="updateApellido">
                        <p>Apellido actual: {user.apellido}</p>
                        <div className="nuevoApellido">
                            <label htmlFor="apellido"><p>Nuevo apellido:</p> </label>
                            <input type="text" id="apellido" name="apellido" {...register("apellido")} />
                        </div>
                    </div>

                    <div className="updateUser">
                        <p>Tipo de Usuario: {user.tipouser}</p>
                        <div className="nuevoUsuario">

                            <label htmlFor="apellido"><p>Nuevo tipo de usuario:</p> </label>
                            <select name="federado" id="federado" {...register("tipouser")} >
                                <option value="club">Club</option>
                                <option value="corredor">Corredor</option>
                                <option value="entrenador">Entrenador</option>
                            </select>
                        </div>
                    </div>
                    <div className="updateClub">
                        <p>Club actual: {user.club}</p>
                        <div className="nuevoClub">
                            <label htmlFor="club"><p>Nuevo Club:</p> </label>
                            <input type="text" id="club" name="club" {...register("Club")} />
                        </div>
                    </div>
                    <div className="updateAvatar">
                        <div className="avatarformulario">

                            <p>Avatar: </p>
                            <img src={user.avatar} alt="" />
                        </div>

                        <div className="nuevoAvatar">
                            <label htmlFor="avatar"><p>Nuevo Avatar:</p> </label>
                            <input type="file" id="avatar" name="avatar" {...register("avatar")} />
                        </div>
                    </div>
                    <div className="updateNacimiento">
                        <p>Fecha nacimiento registrada: {user.nacimiento}</p>
                        <div className="nuevoNacimiento">

                            <label htmlFor="nacimiento"><p>Quizás quieres cambiar tu fecha de nacimiento..</p> </label>
                            <input type="date" id="nacimiento" name="nacimiento" {...register("nacimiento")} />
                        </div>
                    </div>

                    <div className="updateFederado">

                        {user.federado == true ? (

                            <div className="nuevoFederado">
                                <label htmlFor="federado"><p>¿Sigues federado?</p></label>
                                <select name="federado" id="federado" {...register("federado")} >
                                    <option value="true">Si, sigo federado</option>
                                    <option value="false"><p>No, ya no estoy federado</p></option>
                                </select>
                            </div>
                        )
                            : (
                                <div className="nuevoFederado">
                                    <label htmlFor="federado"><p>¿Sigues sin estar federado?</p> </label>
                                    <select name="federado" id="federado" {...register("federado")} >
                                        <option value="true">No, ahora estoy federado</option>
                                        <option value="false"><p>Sí, sigo sin estarlo</p></option>
                                    </select>
                                </div>

                            )
                        }

                    </div>
                    <button type="submit" className="btn-register">
                        {" "}
                        <h3>Cambios Terminados</h3>
                    </button>
                </div>
            </form>


        </section>
    )
}

export default UpdatePerfil

//SI EL USUARIO ESTÁ LOIGN COMO FEDERADO PREGUNTA SIGUES ESTANOD FEDERADO?
// Si no está logueado como federado pregunt: sigues sin estar federado?