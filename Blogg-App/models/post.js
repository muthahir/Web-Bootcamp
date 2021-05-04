const mongoose = require('mongoose');
const Comment = require('./comment');

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required:true
    },
    img: {
        type: String,
    },
    
    desc: {
        type: String
    },
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:'Comment'
        }
    ]
});


const Post = mongoose.model('Post', postSchema);

module.exports = Post;