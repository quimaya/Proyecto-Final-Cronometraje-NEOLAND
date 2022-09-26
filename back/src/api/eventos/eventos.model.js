const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const tipoEvento = require("../../helpers/constants/evento")


const schema = new Schema({
    nombre: { type: String, unique: false, required: true },  
    cover: {type: String, required: false},

    distancia: {type:String, required:true},
    deporte: {type:String, enum:tipoEvento},

    localidad: {type:String},
    recorrido: {type:String},
    fecha: {type:String,},
    
    precio1: {type: String},
    precio2: {type: String},

    inscripcionOpen: {type: Boolean},


    organizador: {type: Schema.Types.ObjectId, ref: 'user'},

    participantes: [{type: Schema.Types.ObjectId, ref: 'user', required:false}],

    results: [{type: Schema.Types.ObjectId, ref: 'user', required:false}]

},
    {
        timestamps: true
    }
);

module.exports = mongoose.model('eventos', schema);