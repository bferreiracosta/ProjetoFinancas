const mongoose = require('mongoose');

module.exports = mongoose.connect('mongodb://localhost/db_finance');

mongoose.Error.messages.general.required = "O atributo '{PATH} é obrigatorio.";
mongoose.Error.messages.Number.min = "O '{VALUE} é menor que o limite minimo de '{MIN}'.";
mongoose.Error.messages.Number.max = "O '{VALUE} é maior que o limite maximo de '{MAX}'.";
mongoose.Error.messages.String.enum = "O '{VALUE} não e valida para '{PATH}'.";