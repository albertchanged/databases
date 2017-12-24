CREATE DATABASE chat;

USE chat;

/* Create other tables and define schemas for them here! */
CREATE TABLE rooms (
  Room_ID int(30) NOT NULL AUTO_INCREMENT,
  RoomName varchar(25) DEFAULT 'lobby',
  PRIMARY KEY(Room_ID)
);

CREATE TABLE users (
  User_ID int(30) NOT NULL AUTO_INCREMENT,
  Username varchar(30) DEFAULT 'anonymous',
  PRIMARY KEY(User_ID)
);

CREATE TABLE messages (
  /* Describe your table here.*/
  Message_ID int(255) NOT NULL AUTO_INCREMENT,
  MessageText varchar(255) DEFAULT ' ',
  UserID int(30) NOT NULL, 
  RoomID int(30) NOT NULL,
  Room_Name varchar(25),
  User_Name varchar(25),
  PRIMARY KEY(Message_ID),
  FOREIGN KEY (UserID) REFERENCES users(User_ID),
  FOREIGN KEY (RoomID) REFERENCES rooms(Room_ID)
);


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

