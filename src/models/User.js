const { Schema, model } = require('mongoose');
const bcrypt = require('bcryptjs');
const UserSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    usuario: {
        type: String,
        required: true
    },
    password: {
        type: String,
        require: true
    },
    ids_movies: {
        type: Array
    }
});
UserSchema.methods.encrypPassword = async password => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
};
UserSchema.methods.matchPassword = function(password) {
    return await bcrypt.compare(password, this.password);
};
module.exports = model('User', UserSchema);