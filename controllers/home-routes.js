const router = require('express').Router();
const { User, Meme, Comment, Image } = require('../models');


// Displays all the saved memes on the page
router.get("/", async (req, res) => {
    try {
          // Gets all entries and joins with user data
          const memeData = await Meme.findAll({
              include: [
                  {
                    model: User,
                    attributes: ["username"],
                  },
                  {
                    model: Image,
                    attributes: ["img_url"],
                },
              ],
          });
          
          // Serializes data to pass to Handlebars
          const memes = memeData.map((meme) => meme.get({ plain:true }));
  
          res.render("homepage", { memes, logged_in: req.session.logged_in });
      } catch (err) {
          console.log(err);
          res.status(500).json(err);
      }
  });


// Displays a single meme with its comments and renders an add comment section
router.get('/memes/:id', async (req, res) => {
    try {
      const memeData = await Entry.findByPk(req.params.id, {
        include: [
          {
            model: User,
            attributes: ['username'],
          },
          {
            model: Comment,
            attributes: ['comment_text', "user_id"],
            include: [User],
          },
          {
            model: Image,
            attributes: ['id', "img_url"],
          },
        ],
      });
  
      const meme = memeData.get({ plain: true });
      res.render('entrywithcomments', {
        ...meme,
        logged_in: req.session.logged_in
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });


// Displays the login page HTML
router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
      res.redirect('/dashboard');
      return;
    }
  
    res.render('login');
});


// Display the sign up page HTML
router.get("/signup", (req, res) => {
    res.render("signup");
})









module.exports = router;