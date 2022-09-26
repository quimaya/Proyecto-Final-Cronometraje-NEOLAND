const Evento = require("./eventos.model")
const { setError } = require("../../helpers/error")
const { deleteFile } = require("../../middleware/cloudinary/cloudinary.delete");


const crear = async (req, res, next) => {
    try {
        const newEvento = new Evento(req.body);
        if (req.file) newEvento.cover = req.file.path
        const EventoExists = await Evento.findOne({ nombre: newEvento.nombre })
        if (EventoExists) 
        return next(setError(409, "El nombre ya existe"))
        const eventoInDB = await newEvento.save();
        return res.json({
            status: 201,
            message: "Evento creado",
            results: { eventoInDB }
        })


    } catch (error) {
        return next(
            setError(500, error.message | "No se ha podido crear el evento")
        );
    }
}


const recuperar = async (req, res, next) => {
    try {
        const { nombre } = req.params;
        const evento = await Evento.findOne({ nombre: nombre }).populate("organizador participantes")
        
          { (!evento) ?

            (next(setError(404, error.message | "Evento no encontrado")) )
        : 
        (res.status(200).json({
            message: "evento recuperado",
            evento,
        }) )}
     } catch (error) {

}
}

const eventoByID = async (req,res,next) => {
    try {
        const {id} = req.params
        const evento = await Evento.findById(id).populate("organizador participantes results")
        if (!evento) return next(setError(404, 'Evento no encontrado'))
        return res.json({
            status:200,
            message: "Evento recuperado",
            data: {evento:evento}
        })
    } catch (error) {
        return next(setError(500, "Fallo recuperando"))
    }
}

const recuperarTodo = async (req,res,next) => {
    try {
        const eventos = await Evento.find().populate("organizador participantes results")
        return res.json({
            status: 201,
            message: "Eventos recuperados",
            results: { eventos }})

    } catch (error) {
        return next(
            setError(500,  "Error recuperando"))
    }
}

const modificar = async (req, res, next) => {
    try {
        const {nombre} = req.params
        const evento = new Evento(req.body)
       
        if (req.file) deleteFile(evento.cover);
        if (req.file) elementDB.cover = req.file.path;

        const updatedEvento = await Evento.findOneAndUpdate({nombre: nombre})
        if (!updatedEvento) return next (setError(404, "Evento no encontrado"))

        return res.json({
            status: 201,
            message: "Evento actualizado",
            data: { updatedEvento },
          });
        

    } catch (error) {
        return next(setError(500, "No se ha podido actualizar el evento"));

    }
}

const modificarID = async (req, res, next) => {
    try {
        const { id } = req.params
        const evento = new Evento(req.body);
        evento._id = id;
        if (req.file) deleteFile(evento.cover);
        if (req.file) elementDB.cover = req.file.path
        const updatedEvento = await Evento.findByIdAndUpdate(id, evento)
        if (!updatedEvento) return next(setError(404, 'Code not found'))
        return res.json({
            status: 201,
            message: 'Evento actualizado',
            data: { element: updatedEvento }
        });
    } catch (error) {
        return next(setError(500, 'Fallo actualizando'));
    }
}

const borrar = 

async (req, res, next) => {
    try {
      const { nombre } = req.params;
      const nombreEvento = await Evento.findOneAndRemove( { nombre: nombre });
      if (nombreEvento.cover) deleteFile(nombreEvento.cover)
      if( !nombreEvento ) return next( setError( 404, 'Evento no encontrado'));
      return res.json({
        status: 200,
        message: 'Evento borrado',
        results: { nombreEvento }
      });

    } catch (error) {
      return next(
        setError(500,  "Error borrando evento")
      );
    }
  };

  const borrarID = async (req, res, next) => {
    try {
        const { id } = req.params
        const eventoBorrado = await Evento.findByIdAndDelete(id)
        if (eventoBorrado.cover) deleteFile(eventoBorrado.cover)

        if (!eventoBorrado) return next(setError(404, 'Evento no encontrado'))
        return res.json({
            status: 200,
            message: 'evento borrado',
            data: { element: eventoBorrado }
        });
    } catch (error) {
        return next(setError(500, 'Fallo borrando'));
    }
}

module.exports = {crear, recuperar, eventoByID, recuperarTodo, modificar, borrar, modificarID, borrarID}