const router = require('express').Router();
const { Comment, Post, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
        // get all posts and JOIN with user/Comment data
        const postData = await Post.findAll({
            include: [
                {
                    model: User,
                    attributes: ['name'],
                },
                {
                    model: Comment,
                    attributes: ['user_id', 'post_id', 'content']
                },
            ],
        });

        // serialize data so the template can read it
        const posts = postData.map((post) => post.get({ plain: true }));

        const commentData = await Comment.findAll({
            include: [
                {
                    model: User,
                    attributes: ['name'],
                },
                {
                    model: Post,
                    attributes: ['user_id', 'content'],
                },
            ],
        });

        // serialize data so the template can read it
        const comments = commentData.map((comments) => comments.get({ plain: true }));
        
        // const userData = await User.findOne({
        //     where: {
        //         id: req.session.user_Id,
        //       },
        // });

        // const user = await userData.map((user) => user.get({ plain: true }));
        // pass serialized data and session flag into template
        res.render('homepage', {
            posts,
            comments,
            // user,
            logged_in: req.session.logged_in,
            user_Id: req.session.user_id
        });
    } catch (err) {
        res.status(502).json(err);
    }
});

router.get('/post/:id', async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: ['name'],
                },
            ],
        });
        const post = postData.get({ plain: true });
        res.render('post', {
            ...post,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});
// middleware to prevent access to route
router.get('/', withAuth, async (req, res) => {
    try {
        // use session id to find user
        const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['password'] },
            include: [{ model: Post }],
        });
        const user = userData.get({ plain: true });
        res.render('homepage', {
            ...user,
            logged_in: true
        });
    } catch (err) {
        res.status(500).json(err);
    }
});
router.get('/login', (req, res) => {
    // if user is logged in redirect to another route
    if (req.session.logged_in) {
        res.redirect('/');
        return;
    }
    res.render('login');
});

router.get('/signUp', (req, res) => {
    if (req.session.logged_In) {
        res.redirect('/');
        return;
    }
    res.render('signUp');
});

router.get('/posts', (req, res) => {
    // if user is not logged in redirect to login
    if (!req.session.logged_in) {
        res.redirect('/login');
        return;
    }
    res.render('newPost', {
        logged_in: req.session.logged_in,
        user_Id: req.session.user_id
    });
});


module.exports = router;