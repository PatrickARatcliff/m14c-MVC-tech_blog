const belongsToUser = (req) => {
    if (req.session.user_id === post.user_id)
    { return true; }
  };
  
  module.exports = belongsToUser;
  