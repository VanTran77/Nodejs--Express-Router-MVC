const express = require('express');
const blogController = require('../controllers/blogController');
const router = express.Router();

// redirect Homepage to /Blogs
router.get('/', blogController.blog_home);

// open /about page
router.get('/about', blogController.blog_about);

//redirect to create page
router.get('/blogs/create', blogController.blog_create);

// get data from submit and save input messages to db server
router.post('/blogs', blogController.blog_post);

// call blogController, then load Blog from server and display to screen
router.get('/blogs', blogController.blog_index);

// load single blog from db server
router.get('/blogs/:id', blogController.blog_details);

// Delete blog and redirect to /blogs
router.delete('/blogs/:id', blogController.blog_delete);

module.exports = router;