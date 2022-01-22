const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const app = express();

const blogRoutes = require('./routes/blogRoutes');

const dbURI = 'mongodb+srv://nodejs:password@nodejsmongo.a4lyw.mongodb.net/node-tuts?retryWrites=true&w=majority';
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then((result) => app.listen(2000))
    .catch((err) => console.log(err));

app.set('view engine', 'ejs');

// allow access file in Public folder
app.use(express.static('public'));

//  submitting a form with post method
app.use(express.urlencoded({extended:true}));

// redirect to /blogs
app.use(blogRoutes);

app.use((req,res) => {
    res.status(404).render('404', {title: '404'});
})




