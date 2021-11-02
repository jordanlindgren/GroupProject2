const router = require('express').Router();
const { User, Entry, Comment } = require('../models');
const withAuth = require('../utils/auth');


// Displays all memes created by a user who is logged in
router.get("/", withAuth, (req, res) => {
    Meme.findAll({
        where: {
            user_id: req.session.user_id
        },
        include: [
            {
                model: User,
                attributes: ["username"],
            },
        ],
    })
    .then(allMyMemes => {
        const myMemes = allMyMemes.map((meme) => meme.get ({ plain:true }));

        res.render("profile-landing", { myMemes, logged_in: req.session.logged_in });
    })
    .catch (err => {
        console.log(err);
        res.status(500).json(err);
    }) 
});


// Displays a single meme created by this user with the option to edit or delete
router.get("/profile/:id", withAuth, async (req, res) => {
    try {
        const myMemeData = await Meme.findByPk(req.params.id, {
            include: [
              {
                model: User,
                attributes: ['username'],
              },
            ], 
        });

        const myMeme = myMemeData.get ({ plain: true});

        res.render("meme-update-delete", {
            ...myMeme,
            logged_in: req.session.logged_in 
        });
    } catch (err) {
        res.status(500).json(err);
    }    
});


// Displays HTML for creating a new meme
router.get("/create", (req, res) => {
    res.render("create-meme", {logged_in: req.session.logged_in});

});







