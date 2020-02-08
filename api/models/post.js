const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const PostSchema = new Schema({
    title: String,
    price: String,
    description: String,
    images: [ String ],
    location: String,
    lat: Number,
    long: Number,
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    reviews:[{
        type: Schema.Types.ObjectId,
        ref: 'Review'
    }] 
});

PostSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('Post', PostSchema);



