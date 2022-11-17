const belongsToUser = (req) => {
    return req.session.user_id
  };
  
  module.exports = belongsToUser;
  