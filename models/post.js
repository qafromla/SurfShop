const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({

    title: String,
    price: String,
    description: String,
    images: [ String ],
    lat: Number,
    lng: Number,
    author: [
        {
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'User'
        }
    ],
    reviews: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Review'
        }
    ]

});

module.exports = mongoose.model('Post', PostSchema);

