const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductosSchema = Schema({
    nombre: String,
    stock: Number,
    precioCU: Number,
    IDcategoria:{ type: Schema.Types.ObjectId, ref: 'Categorias'}
    
})

module.exports = mongoose.model('Productos', ProductosSchema)