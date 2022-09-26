import "./Footer.css"
const Footer = () => {
    return (
        <div className="footer">
            <div className="menusFooter">
                <div className="menuLegal">
                    <h4>Legal</h4>
                    <ul>
                        <li>Aviso Legal </li>
                        <li>Política de Privacidad</li>
                        <li>Condiciones de Contratación</li>
                    </ul>
                </div>
                <div className="menuEnlaces">
                    <h4>Enlaces</h4>
                    <ul>
                        <li>Eventos</li>
                        <li>Clasificaciones</li>
                        <li>Sobre nosotros</li>
                    </ul>
                </div>
            </div>
            <div className="down">
                <p>Sitio web creado por Enrique Mazón, alumno de Neoland.</p>
                <p>Todos los derechos reservados</p>
            </div>
        </div>


    )

}
export default Footer