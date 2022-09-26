import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { JwtContextProvider } from "./context/jwtContext";

import React from 'react'
import Header from "./components/Header";
import Footer from './components/Footer'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import RegisterClub from './pages/RegisterClub'
import Clasificaciones from './pages/Register'
import Eventos from "./pages/Eventos";
import InfoEvento from "./pages/InfoEvento";
import RequiredAuth from "./components/RequiredAuth";
import Perfil from "./pages/Perfil";
import CrearEvento from './pages/CrearEvento'
import Login2 from "./pages/Login2";
import EventsCreated from "./pages/EventsCreated";
import Historia from "./pages/Historia";
import InfoEventoClub from "./pages/InfoEventoClub";
import Contacto from "./pages/Contacto";
import Blog from "./pages/Blog";
import Post from "./pages/Post";
import UpdatePerfilClub from "./pages/UpdatePerfilClub";
import Inscripcion from "./pages/Inscripcion";
import Participantes from "./pages/Participantes";

import './App.css'
import UpdatePerfil from "./pages/UpdatePerfil";

const App = () => {


  return (
    <JwtContextProvider>
      <div className="App">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/eventos" element={<Eventos/>} />
            <Route path="/perfil/eventscreated/:id" element={<EventsCreated/>} />
            
            <Route path="/blog" element={<Blog/>} />
            <Route path="/blog/post/:id" element={<Post/>} />

            <Route path="/login" element={<Login/>} />
            <Route path="/login2" element={<Login2/>} />

            <Route path="/register" element={<Register/>} />
            <Route path="/registerclub" element={<RegisterClub/>} />

            <Route path="/eventos/infoEvento/:id" element={<InfoEvento/>} />
            <Route path="/eventos/inscripcion/:id" element={<Inscripcion/>} />

            <Route path="/eventos/participantes/:id" element={<Participantes/>} />


            <Route path="/users/infoUser/:id" element={<InfoEventoClub/>} />

            <Route path="/historia" element={<Historia/>} />
            <Route path="/contacto" element={<Contacto/>} />


            <Route path="/perfil" element={<RequiredAuth><Perfil/></RequiredAuth>} />
            <Route path="/perfil/updateperfil" element={<RequiredAuth><UpdatePerfil/></RequiredAuth>} />
            <Route path="/perfil/updateperfilclub" element={<RequiredAuth><UpdatePerfilClub/></RequiredAuth>} />


            <Route path="/clasificaciones" element={<RequiredAuth><Clasificaciones/></RequiredAuth>} />
            <Route path="/eventos/crearevento" element={<RequiredAuth><CrearEvento/></RequiredAuth>} />



          </Routes>
          <Footer />
        </Router>
      </div>
    </JwtContextProvider>
  )
}

export default App