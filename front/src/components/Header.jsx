import "./Header.css"
import { Link } from "react-router-dom"
import { JwtContext } from "../context/jwtContext"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"

import React from 'react'

const Header = () => {

  const { user, logout } = useContext(JwtContext)
  let navigate = useNavigate

  return (
    <header>
      <nav className="menuTop">
        <ul>
          <div className="menuleft">
            <li><Link to="/eventos"> <h2>Próximos Eventos</h2></Link></li>
          </div>


          <div className="menuright">
            <li><Link to="/perfil"><h3>Perfil</h3></Link></li>
            <div className="perfil">

              <li><Link to="/perfil"></Link></li>
            </div>

            <div className="login-logout">

              {user ? (
                <div className="avatar-logout">

                  <Link to="/perfil"><div className="avatar">
                    <img className="login-avatar" src={user.avatar} />
                  </div>
                  </Link>

                  <div className="bienvenido">
                    {user.sexo == "Mujer" ?
                      (<p>Bienvenida, {user.nombre}</p>)
                      :
                      (<p>Bienvenido, {user.nombre}</p>)}

                  </div>

                  <div>
                    <button onClick={() =>
                      logout() & navigate("/")}>Cerrar Sesión</button>
                  </div>
                </div>
              )
                : (
                  <div className="login-register">

                    <li><Link to="login" className="loginLink"> Login</Link> </li>
                    <li><Link to="register" className="registerLink"> Registrar</Link></li>
                  </div>)
              }
            </div>
          </div>


        </ul>

      </nav>
      <nav className="menuDown">

        <ul>

          <div className="logo">
            <li><Link to="/"><img className="logo-uno-home" src="/logo-uno-crono.png" alt="logo-uno" /></Link></li>
          </div>

          <div className="links">
            <li> <Link to="/blog"> <h3>Novedades </h3></Link></li>
            <li> <Link to="/contacto"> <h3>Contacto </h3></Link></li>
          </div>

        </ul>
      </nav>
    </header>
  )
}

export default Header