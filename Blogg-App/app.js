const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const seedDB = require('./seedDb');
const methodOverride = require('method-override');


// Routes
const postRoutes = require('./routes/post');

mongoose.connect('mongodb://localhost:27017/blogApp',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify:false,
        useCreateIndex:true
    })
    .then(() => {
        console.log("DB Connected");
    })
    .catch((err) => {
        console.log("OH NO ERROR!!!");
        console.log(err);
    });


// seedDB();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.use(express.static(path.join(__dirname, '/public')));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'))

app.get('/', (req, res) => {
    
    res.send("LANDING PAGE");
})

app.use(postRoutes);


app.listen(3000, () => {
    console.log("Server Started AT PORT 3000");
})