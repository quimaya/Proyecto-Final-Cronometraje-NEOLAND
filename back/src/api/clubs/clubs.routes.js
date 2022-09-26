const ClubRoutes = require('express').Router();

const {crear, getName, getById, recuperarTodo, borrarID, modificarID} = require("./clubs.controller")

const upload = require ("../../middleware/cloudinary/cloudinary.upload")


ClubRoutes.post('/crear', upload.single("cover"), crear );

ClubRoutes.get('/:nombre', getName );
ClubRoutes.get('/id/:id', getById )
ClubRoutes.get('/', recuperarTodo);

ClubRoutes.patch('/updateID/:id', upload.single("cover"), modificarID );

ClubRoutes.delete('/borrar/:id', borrarID );




module.exports = ClubRoutes;