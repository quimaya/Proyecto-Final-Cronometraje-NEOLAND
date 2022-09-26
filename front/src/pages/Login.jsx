import "./Login.css";
import { useForm } from "react-hook-form";
import { JwtContext } from "../context/jwtContext";
import { useContext } from "react";
import { API } from "../services/API"
import { useNavigate } from "react-router-dom";

//Seteamos user en el contexto una vez que logueamos.
//Traemos la función seteadora del contexto y la metemos en línea 20
//mismo que localstorage pero con el estado para que la app entera lo lea

import React from 'react'

//Creamos nueva variable de estado seteando los errores sólo con string

const Login = () => {

  const { register, handleSubmit } = useForm()

  let navigate = useNavigate()

  const {setJwt, setUser} = useContext(JwtContext)

  const formSubmit = (formData) => {
    API.post("/users/login", formData).then((res) => {
      navigate("/")

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("email", JSON.stringify(res.data.userInDB));
      setJwt(res.data.token)
      setUser(res.data.userInDb)

    }).catch((res) => {
      if(res.response.data === "No existe usuario asociado a este email") 
      (setError(404, "No existe usuario asociado a este email"))
      else {res.response.data}
      (setError(401, "Contraseña incorrecta"))
      
      //Seterror almacenamos y pintamos

    });
    ;
  };

  return (
    <section className="Login">
      <div>
      <h2>Iniciar Sesión</h2>
      </div>
      <form onSubmit={handleSubmit(formSubmit)}>
        <label htmlFor="email">Introduce Email</label>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="Email aquí"
          {...register("email")}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Introduce contraseña"
          {...register("password")}
        />
        
        <button className="btn-login" type="submit">Iniciar Sesión</button>
        <p>¿Has olvidado tu contraseña? Haz click aquí para recuperarla</p>
      </form>
 {/* 
      <div className="errorLogin">
        {setError() ? 
        (<p>"No existe email"</p>)
        :
        (<p>"No existe usuario"</p>)
        }         
      </div> */}
    {/* Si error no es string vacío que me lo pinte  */}
      
      {/* Si no encuentra el e-mail o la contraseña no funciona, que salga un texto "Este e-mail no está registrado" o "contraseña inválida"

      Poner enlace a recuperar contraseña */}
        
      
    </section>
    
  )
}

export default Login;