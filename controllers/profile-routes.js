const router = require('express').Router();
const { User, Meme, Comment, Image } = require('../models');
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
            {
                model: Image,
                attributes: ["id", "img_url"],
            },
        ],
    })
    .then(allMyMemes => {
        const myMemes = allMyMemes.map((meme) => meme.get ({ plain:true }));

        res.render("profile-landing", { myMemes, logged_in: req.session.logged_in, layout:"profile" });
    })
    .catch (err => {
        console.log(err);
        res.status(500).json(err);
    }) 
});

// Displays a single meme created by this user with the option to edit or delete
router.get("/:id", withAuth, async (req, res) => {
    try {
        const myMemeData = await Meme.findByPk(req.params.id, {
            include: [
              {
                model: User,
                attributes: ['username'],
              },
              {
                model: Image,
                attributes: ["id", "img_url"],
              },
            ], 
        });

        const myMeme = myMemeData.get ({ plain: true});

        console.log(myMeme);
        res.render("meme-update-delete", {
            ...myMeme,
            logged_in: req.session.logged_in ,
            layout:"profile"
        });
    } catch (err) {
        res.status(500).json(err);
    }    
});

// Displays all images in database
router.get("/create", withAuth, (req, res) => {
    console.log("Made it");
    Image.findAll({})
    .then(allImages => {
        const images = allImages.map((image) => image.get ({ plain:true }));

        console.log(images);
        res.render("choose-image", { images, logged_in: req.session.logged_in, layout:"profile" });
    })
    .catch ((err) => { res.status(500).json(err);
        console.log(err);
    }) 
});


// Displays HTML for creating a new meme
router.get("/create/:id", withAuth, async (req, res) => {
    try {
        const myImageData = await Image.findByPk(req.params.id, {
            // include: [
            //   {
            //     model: User,
            //     attributes: ['username'],
            //   },
            // ], 
        });

        const myImage = myImageData.get ({ plain: true});

        res.render("create-meme", {
            ...myImage,
            logged_in: req.session.logged_in ,
            layout:"profile"
        });
    } catch (err) {
        res.status(500).json(err);
    }    
});

module.exports = router;





