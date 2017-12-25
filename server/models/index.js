var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      db.query(`SELECT messages.text, users.Username, rooms.RoomName FROM messages 
      INNER JOIN users ON messages.UserID = users.User_ID 
      INNER JOIN rooms ON messages.RoomID = rooms.Room_ID;`
        , function(error, data) {
          console.log('Hi from GET');
          if (error) {
            console.log(error);
          } else {
            callback(data);
          }
        });
    }, // a function which produces all the messages
    post: function (request, callback) {
      console.log(request, 'from post');
      db.query(
        `INSERT INTO rooms (RoomName, Room_ID) 
        VALUES ("${request.roomname}", (SELECT Room_ID FROM rooms WHERE RoomName = "${request.roomname}"));`, function(error, data) {
          db.query(
            `INSERT INTO users (Username, User_ID) 
            VALUES ("${request.username}", (SELECT User_ID FROM users WHERE Username = "${request.username}"));`, function(error, data) {
              db.query(
                `INSERT INTO messages (text, UserID, RoomID) 
                VALUES ("${request.message}", 1, 
                1);`, function(error, data) {
                  if (error) {
                    console.log(error);
                  } else {
                    callback(data);
                  }
                });
            });
        });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (request, callback) {
      db.query('SELECT * FROM users;', function(error, data) {
        if (error) {
          console.log(error);
        } else {
          callback(data);
        }
      });
    },
    post: function (request, callback) {
      db.query('INSERT INTO users (Username) VALUES ("' + request.username + '")', function(error, data) {
        if (error) {
          console.log(error);
        } else {
          callback(data);
        }
      }); 
    }
  }
};

