const { Comment } = require('../models');

const commentData =
[
    {
        "user_id": 5,
        "post_id": 1,
        "content": "test comment 1"
    },
    {
        "user_id": 4,
        "post_id": 2,
        "content": "test comment 2"
    },
    {
        "user_id": 2,
        "post_id": 3,
        "content": "test comment 3"
    },
    {
        "user_id": 3,
        "post_id": 4,
        "content": "test comment 4"
    },
    {
        "user_id": 1,
        "post_id": 5,
        "content": "test comment 5"
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;