const EventosRoutes = require('express').Router();

const {crear, eventoByID, recuperar, recuperarTodo, modificar,
    modificarID, borrar, borrarID} = require("./eventos.controller")

const upload = require ("../../middleware/cloudinary/cloudinary.upload")


EventosRoutes.post('/crear', upload.single("cover"), crear );

EventosRoutes.get('/nombre/:nombre', recuperar );
EventosRoutes.get('/', recuperarTodo);
EventosRoutes.get('/id/:id', eventoByID);

EventosRoutes.patch('/update/:nombre', upload.single("cover"), modificar );
EventosRoutes.patch('/updateID/:id', upload.single("cover"), modificarID );

EventosRoutes.delete('/borrar/:nombre', borrar );
EventosRoutes.delete('/borrarID/:id', borrarID );


module.exports = EventosRoutes;