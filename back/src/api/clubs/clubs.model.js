const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    
    nombre: { type: String, unique: false, required: true },  
    localidad: {type: String, required: true},
    cover: {type: String, required: false},
    fundacion: {type:String},

    presidente: {type: Schema.Types.ObjectId, ref: "user"},

    socios: [{type: Schema.Types.ObjectId, ref: "user"}]

},
    {
        timestamps: true
    }
);

module.exports = mongoose.model('clubs', schema);
