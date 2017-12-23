CREATE DATABASE chat;

USE chat;

/* Create other tables and define schemas for them here! */
CREATE TABLE rooms (
  Room_ID int NOT NULL,
  RoomName varchar(25),
  PRIMARY KEY(Room_ID)
);

CREATE TABLE users (
  User_ID int NOT NULL,
  Username varchar(30),
  PRIMARY KEY(User_ID)
);

CREATE TABLE messages (
  /* Describe your table here.*/
  Message_ID int NOT NULL AUTO_INCREMENT,
  MessageText varchar(255),
  UserID int NOT NULL, 
  RoomID int NOT NULL,
  PostDate Date,
  PRIMARY KEY(Message_ID),
  FOREIGN KEY (UserID) REFERENCES users(User_ID),
  FOREIGN KEY (RoomID) REFERENCES rooms(Room_ID)
);


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

