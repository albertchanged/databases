var db = require('../db');

module.exports = {
  messages: {
    get: function () {
      // model.db.query(...)
    }, // a function which produces all the messages
    post: function () {} // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

