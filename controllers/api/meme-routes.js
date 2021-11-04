const router = require('express').Router();
const { Meme } = require('../../models');
const withAuth = require('../../utils/auth');


// Adds new meme to database
router.post('/', withAuth, async (req, res) => {
    try {
      const newMeme = await Meme.create({
        ...req.body,
        user_id: req.session.user_id,
      });
  
      res.status(200).json(newMeme);
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
  });


// Updates a meme by id
router.put('/:id', withAuth, (req, res) => {
    Meme.update (req.body, {
      where: {
        id: req.params.id
      },
    })
    .then(updatedMeme => res.json(updatedMeme))
    .catch((err) => {res.json(err),
    console.log(err) });
  });


// Deletes a meme by id
router.delete('/:id', withAuth, async (req, res) => {
    try {
      const memeData = await Meme.destroy({
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });
    
      if (!memeData) {
        res.status(404).json({ message: 'No meme found with this id!' });
        return;
      }
    
      res.status(200).json(memeData);
    } catch (err) {
      res.status(500).json(err);
    }
});
  

module.exports = router; 



