const UserRoutes = require('express').Router();
const { register, login, userByID, getUsers, actualizar, borrar, actualizarEmail } = require('./user.controller');
const upload = require("../../middleware/cloudinary/cloudinary.upload")


UserRoutes.post('/register',  upload.single("avatar"),  register );
UserRoutes.post('/login', login );

UserRoutes.get('/:email', userByID );
UserRoutes.get('/', getUsers);
UserRoutes.get('/id/:id', userByID );


UserRoutes.patch('/update/:id',  upload.single("avatar"), actualizar );
UserRoutes.patch('/update/email/:email',  upload.single("avatar"), actualizarEmail );

UserRoutes.delete('/borrar/:email', borrar );



module.exports = UserRoutes;