import { useForm } from "react-hook-form";
import { API } from "../services/API";
import "./Register.css";
import { useNavigate } from "react-router-dom";
import React from 'react'
import { Link } from "react-router-dom";

const Register = () => {


  const { register, handleSubmit } = useForm();

  let navigate = useNavigate();

  const formSubmit = (data) => {
    const formData = new FormData();
    formData.append("nombre", data.nombre);
    formData.append("apellido", data.apellido);
    formData.append("email", data.email);
    formData.append("password", data.password);

    formData.append("club", data.club);
    formData.append("avatar", data.avatar[0]);

    formData.append("federado", data.federado);
    formData.append("tipouser", data.tipouser);
    formData.append("nacimiento", data.nacimiento);
    formData.append("sexo", data.sexo);




    API.post("/users/register", formData).then((res) => {

      navigate("/login");
      if (res) navigate("/login");
      console.log("Usuario registrado", res);
    });
  };

  return (
    <section className="registerUser">
      <h2 >Regístrate aquí para entrar en la comunidad de UNO</h2>
      <Link to="/registerclub"><h3 className="h3registro">¿Quieres registrar un club? Puedes hacerlo en este enlace </h3></Link>
      <div className="registerForm">

        <form onSubmit={handleSubmit(formSubmit)}>

          <div className="inputsRequeridos">


            <label htmlFor="nombre">Nombre</label>
            <input type="text" id="nombre" name="nombre" placeholder="Introduce nombre" required {...register("nombre")} />


            <label htmlFor="apellido">Apellido</label>
            <input type="text" id="apellido" name="apellido" placeholder="Introduce apellido" {...register("apellido")} />


            <label htmlFor="sexo">Sexo</label>
            <select name="sexo" id="sexo" {...register("sexo")}>
              <option value="Hombre">Hombre</option>
              <option value="Mujer">Mujer</option>
            </select>

            <label htmlFor="nacimiento">Tu fecha de nacimiento</label>
            <input type="date" id="nacimiento" name="nacimiento" placeholder="Busca el día en que naciste" {...register("nacimiento")} />


            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" name="email" placeholder="Tu mejor e-mail" required {...register("email")} />


            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Contraseña segura"
              minlenght="5"
              required
              {...register("password")} />


            <label htmlFor="avatar">Foto</label>
            <input
              type="file"
              id="avatar"
              name="avatar"
              {...register("avatar")}
            />

            <label htmlFor="club">Club</label>
            <input type="text" id="apellido" name="apellido" placeholder="Introduce club" {...register("club")} />


            <label htmlFor="tipouser">Tipo de Usuario</label>
            <select name="tipouser" id="tipouser" {...register("tipouser")}>
              <option value="corredor">Corredor</option>
              <option value="club">Club</option>
              <option value="entrenador">Entrenador</option>
            </select>


            <div className="federado">
              <input type="checkbox" id="federado" name="federado" value="true"  {...register("federado")} />
              <label htmlFor="federado">Estoy federado</label>
            </div>

          </div>


          <button type="submit" className="btn-register">
            {" "}
            Registro Terminado
          </button>

          <div className="comunicacionesComerciales">

            <div className="comunicaciones">

              <input type="checkbox" id="comunicaciones" name="comunicaciones" value="true"  {...register("federado")} />
              <label htmlFor="federado">Quiero recibir comunicaciones comerciales</label>

            </div>
            <div className="privacidad">
              <input type="checkbox" id="privacidad" name="privacidad" value="true"  {...register("privacidad")} />
              <label htmlFor="federado">Acepto los términos de privacidad</label>
            </div>

          </div>
        </form>
      </div>
    </section>
  )
}

export default Register