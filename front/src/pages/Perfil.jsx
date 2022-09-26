import React from 'react'
import { Link } from 'react-router-dom'
import { JwtContext } from '../context/jwtContext'
import { useContext } from 'react'
import './Perfil.css'


const Perfil = () => {

  const { user } = useContext(JwtContext)


  return (
    <section className="perfildisplay">
      <h2>¡Hola {user.nombre}!</h2>
      {user.tipouser == "club" ?
        (<Link to={`./eventscreated/${user._id}`}><h3 className="welcome">Estos son los eventos organizados por el club</h3></Link>)

        : null /* (<h3> Consulta los eventos en los que has participado</h3>) */
      }


      <div className="perfilContainer">
        <div className="updatePerfil">
          {user.tipouser == "club" ?
            (
            <Link to="./updatePerfilClub"><h3 className="updatePerfilSentence">¿Algún cambio en el club? Actualízalo aquí</h3></Link>)
            :
            (<Link to="./updatePerfil"><h3 className="updatePerfilSentence">¿Algún cambio en tu perfil? Háznoslo saber aquí</h3></Link>)


          }
        </div>
        <div></div>


      </div>
    </section>
  )
}

export default Perfil

//Montar una página con 3 funcionalidades claras puestas en fila. Cada funcionalidad con una imagen
//Modificar perfil, consulta clasificaciones, consulta eventos.


