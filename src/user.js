const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

const UserSchema = new Schema({
    // name: { 
    //     type: String,
    //     validate: {
    //         //ham co san
    //         validator: (name) => name.length > 1,
            
    //         //message muon show
    //         message: 'Name must be longer than 2 characters'
    //     },
    //     required: [true, 'Name is required!']
    // },
    name: String,
    postCount: Number
});

const User = mongoose.model('user', UserSchema);

module.exports = User;