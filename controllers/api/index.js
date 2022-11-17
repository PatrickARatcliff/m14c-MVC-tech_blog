const router = require('express').Router();
const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');
const commentRoutes = require('./commentRoutes');

// localhost:3001/api/
router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comment', commentRoutes);

module.exports = router;