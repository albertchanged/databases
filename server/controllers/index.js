var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      console.log('hi from controllers GET');
      models.messages.get(function(data) {
        res.send(JSON.parse(data));
      });
      // res.end();
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log('hi from controllers POST');
      models.messages.post(req.body, function(data) {
        // console.log(req.body);
        res.send('success');
      });
      // res.end();
    } // a function which handles posting a message to the database
  },
  users: {
    // Ditto as above
    get: function (req, res) {
      console.log('hi from controllers GET');
      models.users.get(function(data) {
        res.send(data);
      });
    },
    post: function (req, res) {
      // models.users.post(req, function(data) {
      models.users.post(req.body, function(data) {
        // console.log(req.body);
        res.send(data);
      });
      // res.end();
    }
  }
};

