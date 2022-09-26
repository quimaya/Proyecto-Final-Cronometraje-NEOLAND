import { Link } from "react-router-dom"
import "./Home.css"


const Home = () => {
    return (
        <section>
            <div className="topMenu">
                <div className="topleft">
                    <h2>Bienvenid@ a tu sitio web de eventos deportivos favorito</h2>
                    <h3>¿Aún estás esperando para unirte a la aventura?</h3>
                    <p>Disfruta de la naturaleza en entornos privilegiados mientras cuidas tu cuerpo y tu mente descansa </p>
                    <div className="boton1">
                        <Link to="/eventos"><button className="boton2"><h3>¡Quiero ir al próximo evento!</h3></button></Link>
                    </div>
                </div>
                <div className="topright">
                    <img src="soplao.jpg" alt="" />
                </div>

            </div>

        </section>
    )

}
export default Home