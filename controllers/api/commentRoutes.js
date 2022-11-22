const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');


// http://localhost:3001/api/comment
router.post('/', withAuth, async (req, res) => {
  console.log('hello george');
  try {
    console.log(req.body, req.session.user_id, req.body.post_id);
    const newComment = await Comment.create({
      ...req.body,
      user_id: req.session.user_id,
      post_id: req.body.post_id
    });

    res.status(200).json(newComment);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const commentData = await Comment.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!commentData) {
      res.status(404).json({ message: 'No comment found with this id!' });
      return;
    }

    res.status(200).json(commentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
