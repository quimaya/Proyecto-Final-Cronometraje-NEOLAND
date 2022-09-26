const User = require("./user.model");
const { setError } = require("../../helpers/error")
const { createToken } = require("../../middleware/token");
const bcrypt = require("bcrypt");
const {deleteFile} = require("../../middleware/cloudinary/cloudinary.delete")


const register = async (req, res, next) => {
    try {
      const newUser = new User(req.body);
      if (req.file) newUser.avatar = req.file.path
      const userExists = await User.findOne({ email: newUser.email });
      if (userExists)
        return next(setError(409, "E-mail repetido, utilice otro"));
      const userInDB = await newUser.save();
      return res.json({
        status: 201,
        message: "Usuario creado",
        results: { userInDB },
      });
    } catch (error) {
      return next(
        setError(500, error.message | "No se ha podido registrar")
      );
    }
  };

  const login = async (req, res, next) => {
    try {
      const userInDB = await User.findOne({ email: req.body.email });
      if (!userInDB) return next(setError(404, "Email no registrado, prueba con otro o crea tu cuenta"));
      if (bcrypt.compareSync(req.body.password, userInDB.password)) {
        const token = createToken(userInDB._id, userInDB.email);
        return res.status(200).json({ userInDB, token });
      } else {
        return next(setError(401, "Contraseña incorrecta"));
      }
    } catch (error) {
      return next(setError(500, "Error de logeo"));
    }
  };

  const userByID = async (req, res, next) => {
    try {
      const { id } = req.params;
      const user = await User.findById(id);
      if (!user)
        return next(setError(404, error.message | "No existe usuario asociado a este email"));
      return res.status(200).json({
        message: "Datos de usuario",
        user,
      });
    } catch (error) {
      return next(
        setError(500, "Error buscando usuario")
      );
    }
  };

    const getUsers = async ( req, res, next) => {
    try {
      const users = await User.find().populate("eventsCreated eventsParticipated");
      return res.json({
        status: 200,
        message: 'Usuarios recuperados',
        results: { users }})
  
    } catch (error) {
      return next(
        setError(500,  "Error recuperando")
      );
      
    }
  }

  const actualizar = async (req, res, next) => {
    try {
        const { id } = req.params;
        const user = new User(req.body);
        user._id = id;
        //if (req.file) deleteFile(user.avatar)
        if (req.file) user.avatar = req.file.path
    
        const updatedUser = await User.findByIdAndUpdate(id, user);
        if (!updatedUser) return next(setError(404, "Usuario no encotrado"));
        return res.json({
          status: 201,
          message: "Usuario actualizado",
          data: { updatedUser },
        });
      } catch (error) {
        return next(setError(500, "No se ha podido actualizar"));
      }
    };

    const actualizarEmail = async (req, res, next) => {
      try {
          const { email } = req.params;
          const user = new User(req.body);
          user._id = id;
          if (req.file) user.avatar = req.file.path
      
          const updatedUser = await User.findOneAndUpdate(email, user);
          if (!updatedUser) return next(setError(404, "Usuario no encotrado"));
          return res.json({
            status: 201,
            message: "Usuario actualizado",
            data: { updatedUser },
          });
        } catch (error) {
          return next(setError(500, "No se ha podido actualizar"));
        }
      };
  

  const borrar = async (req, res, next) => {
    try {
      const { email } = req.params;
      const emailUser = await User.findOneAndRemove( { email: email });
      if (emailUser.avatar) deleteFile(emailUser.avatar)
      if( !emailUser ) return next( setError( 404, 'Usuario no existente'));
      return res.json({
        status: 200,
        message: 'Usuario borrado',
        results: { emailUser }
      });
    } catch (error) {
      return next(
        setError(500,  "No se ha podido borrar el evento")
      );
    }
  };

  module.exports = {register, login, userByID, getUsers, actualizar, borrar, actualizarEmail}