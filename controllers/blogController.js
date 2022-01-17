const Blog = require('../models/blog');

// redirect homepage to /blogs
const blog_home = (req, res) => {
    res.redirect('/blogs');
}

// Page About
const blog_about = (req, res) => {
    res.render('about', {title: 'About'});
}

// load Blog from server and display to screen
const blog_index = (req, res) =>{
    Blog.find().sort({createdAt: -1})
    .then((result) => {
        res.render('blogs_main/index', { blogs: result, title: 'All blogs' });
    })
    .catch((err) => { console.log(err);});
}

const blog_details = (req, res) => {
    const id = req.params.id;
    Blog.findById(id)
        .then((result) => {
            res.render('blogs_main/details', {blogDetails: result, title:'Blog details'})
        })
        .catch((err) => {console.log(err)});
}

const blog_create = (req, res) => {
    res.render('blogs_main/create', {title: 'create a new blog'});
}

const blog_post = (req, res) => {
      // console.log(req.body);
      const blog = new Blog(req.body); // get input from submit
      blog.save() // save data to db server
          .then((result) => {
              res.redirect('/blogs');
          })
          .catch((err) => console.log(err));
}

const blog_delete = (req, res) => {
    const id = req.params.id;
    Blog.findByIdAndDelete(id)
        .then(result => {
            res.json({ redirectDel: '/blogs'})
        })
        .catch(err => console.log(err));
}

module.exports = {
    blog_home,
    blog_about,
    blog_index,
    blog_details,
    blog_create,
    blog_post,
    blog_delete,

}