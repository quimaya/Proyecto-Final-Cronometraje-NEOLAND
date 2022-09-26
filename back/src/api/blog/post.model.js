const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    
    titulo: { type: String, unique: false, required: true },  
    intro: {type:String},
    cover: {type: String, required: false},
    fechaPublicacion: {type:String},

    contenido: {type: String},

    

},
    {
        timestamps: true
    }
);

module.exports = mongoose.model('post', schema);
