import "./UpdatePerfil.css"
import { useContext } from "react"
import { useForm } from 'react-hook-form'
import { useNavigate } from "react-router-dom"
import { JwtContext } from "../context/jwtContext"
import { API } from "../services/API"

import React from 'react'

const UpdatePerfilClub = () => {

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

                        <p>Nombre actual del club: {user.nombre}</p>

                        <div className="nuevoNombre">
                            <label htmlFor="nombre"><p>Nuevo Nombre:</p> </label>
                            <input type="text" id="nombre" name="nombre" {...register("nombre")} />
                        </div>

                    </div>


                    <div className="updateApellido">
                        <p>Localidad actual: {user.localidad}</p>
                        <div className="nuevoApellido">
                            <label htmlFor="apellido"><p>Nueva localidad:</p> </label>
                            <input type="text" id="apellido" name="apellido" {...register("apellido")} />
                        </div>
                    </div>

                    <div className="updateUser">
                        <p>Teléfono de contacto actual: {user.telefono}</p>
                        <div className="nuevoApellido">
                            <label htmlFor="telefono"><p>Nuevo teléfono:</p> </label>
                            <input type="text" id="telefono" name="telefono" {...register("telefono")} />
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
                   
                  
                    <button type="submit" className="btn-register">
                        {" "}
                        <h3>Cambios Terminados</h3>
                    </button>
                </div>
            </form>


        </section>
    )
}

export default UpdatePerfilClub

//SI EL USUARIO ESTÁ LOIGN COMO FEDERADO PREGUNTA SIGUES ESTANOD FEDERADO?
// Si no está logueado como federado pregunt: sigues sin estar federado?