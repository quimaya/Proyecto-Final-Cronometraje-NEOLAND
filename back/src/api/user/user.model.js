const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const tipoUser = require("../../helpers/constants/user")
const sexo = require("../../helpers/constants/sexo")


const { setError } = require('../../helpers/error')
const {validator} = require("../../helpers/validator")
const bcrypt = require('bcrypt');



const schema = new Schema({
    
    nombre: { type: String, unique: false, required: false },
    apellido: { type: String},

    email: { type: String, unique: true, required: true},
    password: {type:String, required:true},

    club: {type: String, required: false},
    avatar: {type: String},
    nacimiento: {type: String},
    sexo: {type:String, enum:sexo},
    telefono: {type:String},

    fundacion: {type:String},
    localidad: {type:String},

    



    federado: {type: Boolean}, //si no está asegurado para el evento le redirijo a comprar el seguro
    tipouser: {type:String, enum:tipoUser, required:false},

    eventsCreated: [{type: Schema.Types.ObjectId, ref: 'eventos'}],
    eventsParticipated: [{type: Schema.Types.ObjectId, ref: 'eventos'}],
    
    
    
},
    {
        timestamps: true
    }
);

schema.pre( 'save', function(next) {
    if(!validator( this.password )) return next(setError(400, 'Contraseña inválida'));
    this.password = bcrypt.hashSync( this.password, 16 );
    next();
});

module.exports = mongoose.model('user', schema);