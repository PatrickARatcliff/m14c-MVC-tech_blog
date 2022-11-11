const { Post } = require('../models');

const postData =
[
    {
        "user_id": 1,
        "content": "test post 1"
    },
    {
        "user_id": 2,
        "content": "test post 2"
    },
    {
        "user_id": 3,
        "content": "test post 3"
    },
    {
        "user_id": 4,
        "content": "test post 4"
    },
    {
        "user_id": 5,
        "content": "test post 5"
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;