const Post = require("./post.model")
const { setError } = require("../../helpers/error")
const { deleteFile } = require("../../middleware/cloudinary/cloudinary.delete");


const crear = async (req, res, next) => {
    try {
        const newPost = new Post(req.body);
        if (req.file) newPost.cover = req.file.path
        const PostExists = await Post.findOne({ titulo: newPost.titulo })
        if (PostExists) 
        return next(setError(409, "El nombre ya existe"))
        const postInDB = await newPost.save();
        return res.json({
            status: 201,
            message: "Post creado",
            results: { postInDB }
        })


    } catch (error) {
        return next(
            setError(500, error.message | "No se ha podido crear el post")
        );
    }
}




const getById = async (req, res, next) => {
    try {
        const { id } = req.params
        const post = await Post.findById(id)
        if (!post) return next(setError(404, 'Post no encontrado'))
        return res.json({
            status: 200,
            message: 'Post recuperado',
            data: { post: post }
        });
    } catch (error) {
        return next(setError(500, 'Error recuperando'))
    }
}

const recuperarTodo = async (req,res,next) => {
    try {
        const posts = await Post.find()
        return res.json({
            status: 201,
            message: "Posts recuperados",
            results: { posts }})

    } catch (error) {
        return next(
            setError(500,  "Error recuperando"))
    }
}



const modificarID = async (req, res, next) => {
    try {
        const { id } = req.params
        const post = new Post(req.body);
        post._id = id;
        if (req.file) deleteFile(post.cover);
        if (req.file) elementDB.cover = req.file.path
        const updatedPost = await Post.findByIdAndUpdate(id, post)
        if (!updatedPost) return next(setError(404, 'Code not found'))
        return res.json({
            status: 201,
            message: 'Club actualizado',
            data: { element: updatedPost }
        });
    } catch (error) {
        return next(setError(500, 'Fallo actualizando'));
    }
}


const borrarID = async (req, res, next) => {
    try {
        const { id } = req.params
        const postBorrado = await Post.findByIdAndDelete(id)
         /* if (postBorrado.cover) deleteFile(postBorrado.cover) */

        if (!postBorrado) return next(setError(404, 'Post no encontrado'))
        return res.json({
            status: 200,
            message: 'Post borrado',
            data: { element: postBorrado }
        });
    } catch (error) {
        return next(setError(500, 'Fallo borrando'));
    }
}

 

module.exports = {crear, getById, recuperarTodo, borrarID, modificarID}