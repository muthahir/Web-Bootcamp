
const express = require('express');
const router = express.Router();
const Post = require('../models/post');
const Comment = require('../models/comment');


// Display all the post
router.get('/posts', async(req, res) => {
    
    const posts=await Post.find({});

    res.render('posts/index',{posts});
})


// Get the form for new post
router.get('/posts/new', (req, res) => {
    res.render('posts/new');
})


// Create New Post
router.post('/posts', async(req, res) => {


    await Post.create(req.body.post);

    res.redirect('/posts');
});


// Show particular post
router.get('/posts/:id', async(req, res) => {
    
    const post=await Post.findById(req.params.id).populate('comments');

   

    res.render('posts/show', { post });
})

// Get the edit form
router.get('/posts/:id/edit', async(req, res) => {

    const post=await Post.findById(req.params.id);

    res.render('posts/edit',{post});
})

// Upadate the particular post
router.patch('/posts/:id', async(req, res) => {
    
    await Post.findByIdAndUpdate(req.params.id, req.body.post);

    res.redirect(`/posts/${req.params.id}`)
})


// Delete a particular product
router.delete('/posts/:id', async (req, res) => {
    await Post.findByIdAndDelete(req.params.id);
    res.redirect('/posts');
})




// Creating a New Comment on a Product

router.post('/posts/:id/comment', async (req, res) => {
    
    const post = await Post.findById(req.params.id);
    const comment = new Comment(req.body);
    console.log(comment);

    post.comments.push(comment);

    await comment.save();
    await post.save();

    res.redirect(`/posts/${req.params.id}`);
})


module.exports = router;