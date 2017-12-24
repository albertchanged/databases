var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      db.query('SELECT * FROM messages', function(error, data) {
        console.log('Hi from models');
        if (error) {
          console.log(error);
        } else {
          callback(data);
        }
      });
    }, // a function which produces all the messages
    post: function (request, callback) {
      console.log('HELLO FROM POST');
      db.query('INSERT INTO rooms (RoomName, Room_ID) VALUES (request.roomname, (SELECT Room_ID FROM rooms WHERE rooms.RoomName = request.roomname)); INSERT INTO users (Username, User_ID) VALUES (request.username, (SELECT User_ID FROM users WHERE users.Username = request.username)); INSERT INTO messages (`MessageText`, `UserID`, `RoomID`) VALUES (' + request.message + ', (SELECT User_ID FROM users WHERE users.Username = request.username), (SELECT Room_ID FROM rooms WHERE rooms.RoomName = request.roomname)' + ')', function(error, data) {
        // INSERT INTO rooms (RoomName) VALUES ('request.roomname');
        // INSERT INTO users (Username) VALUES ('request.username');
        if (error) {
          console.log(error);
        } else {
          callback(data);
        }
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

