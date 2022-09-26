const BlogRoutes = require('express').Router();

const {crear, getById, recuperarTodo, borrarID, modificarID} = require("./post.controller")

const upload = require ("../../middleware/cloudinary/cloudinary.upload")


BlogRoutes.post('/crear', upload.single("cover"), crear );


BlogRoutes.get('/id/:id', getById )
BlogRoutes.get('/', recuperarTodo);

BlogRoutes.patch('/updateID/:id', upload.single("cover"), modificarID );

BlogRoutes.delete('/borrar/:id', borrarID );




module.exports = BlogRoutes;