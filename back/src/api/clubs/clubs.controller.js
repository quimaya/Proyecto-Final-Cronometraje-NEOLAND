const Club = require("./clubs.model")
const { setError } = require("../../helpers/error")
const { deleteFile } = require("../../middleware/cloudinary/cloudinary.delete");


const crear = async (req, res, next) => {
    try {
        const newClub = new Club(req.body);
        if (req.file) newClub.cover = req.file.path
        const ClubExists = await Club.findOne({ nombre: newClub.nombre })
        if (ClubExists) 
        return next(setError(409, "El nombre ya existe"))
        const clubInDB = await newClub.save();
        return res.json({
            status: 201,
            message: "Evento creado",
            results: { clubInDB }
        })


    } catch (error) {
        return next(
            setError(500, error.message | "No se ha podido crear el club")
        );
    }
}


const getName = async (req, res, next) => {
    try {
        const { nombre } = req.params;
        const club = await Club.findOne({ nombre: nombre }).populate("presidente socios")
        
          { (!club) ?

            (next(setError(404, error.message | "Club no encontrado")) )
        : 
        (res.status(200).json({
            message: "club recuperado",
            club,
        }) )}
     } catch (error) {

}
}

const getById = async (req, res, next) => {
    try {
        const { id } = req.params
        const club = await Club.findById(id).populate("presidente socios")
        if (!club) return next(setError(404, 'Club no encontrado'))
        return res.json({
            status: 200,
            message: 'Club recuperado',
            data: { club: club }
        });
    } catch (error) {
        return next(setError(500, 'Error recuperando'))
    }
}

const recuperarTodo = async (req,res,next) => {
    try {
        const clubs = await Club.find().populate("presidente socios")
        return res.json({
            status: 201,
            message: "Clubs recuperados",
            results: { clubs }})

    } catch (error) {
        return next(
            setError(500,  "Error recuperando"))
    }
}



const modificarID = async (req, res, next) => {
    try {
        const { id } = req.params
        const club = new Club(req.body);
        club._id = id;
        if (req.file) deleteFile(club.cover);
        if (req.file) elementDB.cover = req.file.path
        const updatedClub = await Club.findByIdAndUpdate(id, club)
        if (!updatedClub) return next(setError(404, 'Code not found'))
        return res.json({
            status: 201,
            message: 'Club actualizado',
            data: { element: updatedClub }
        });
    } catch (error) {
        return next(setError(500, 'Fallo actualizando'));
    }
}


const borrarID = async (req, res, next) => {
    try {
        const { id } = req.params
        const clubBorrado = await Club.findByIdAndDelete(id)
         /* if (clubBorrado.cover) deleteFile(clubBorrado.cover) */

        if (!clubBorrado) return next(setError(404, 'Club no encontrado'))
        return res.json({
            status: 200,
            message: 'Club borrado',
            data: { element: clubBorrado }
        });
    } catch (error) {
        return next(setError(500, 'Fallo borrando'));
    }
}

 

module.exports = {crear, getName, getById, recuperarTodo, borrarID, modificarID}