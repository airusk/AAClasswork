PRAGMA foreign_keys = ON;

DROP TABLE IF EXISTS question_likes;
DROP TABLE IF EXISTS replies;
DROP TABLE IF EXISTS question_follows;
DROP TABLE IF EXISTS questions;
DROP TABLE IF EXISTS users;

-- users
CREATE TABLE users
(
  id INTEGER PRIMARY KEY,
  fname VARCHAR (255) NOT NULL,
  lname VARCHAR (255) NOT NULL
);

-- questions
CREATE TABLE questions
(
  id INTEGER PRIMARY KEY,
  title VARCHAR (255) NOT NULL,
  body TEXT NOT NULL,
  author_id INTEGER NOT NULL,
  FOREIGN KEY (author_id) REFERENCES users(id)
);

-- question_follows
CREATE TABLE question_follows
(
  id INTEGER PRIMARY KEY,
  question_id INTEGER NOT NULL,
  user_id INTEGER NOT NULL,

  FOREIGN KEY (question_id) REFERENCES questions(id),
  FOREIGN KEY (user_id) REFERENCES users(id)
);

-- replies
CREATE TABLE replies
(
  id INTEGER PRIMARY KEY,
  question_id INTEGER NOT NULL,
  parent_reply_id INTEGER,
  user_id INTEGER NOT NULL,
  body TEXT NOT NULL,

  FOREIGN KEY (question_id) REFERENCES questions(id),
  FOREIGN KEY (parent_reply_id) REFERENCES replies(id),
  FOREIGN KEY (user_id) REFERENCES users(id)
);

-- question_likes
CREATE TABLE question_likes
(
  id INTEGER PRIMARY KEY,
  question_id INTEGER NOT NULL,
  user_id INTEGER NOT NULL,

  FOREIGN KEY (question_id) REFERENCES questions(id),
  FOREIGN KEY (user_id) REFERENCES users(id)
);


INSERT INTO
  users (fname, lname)
VALUES
  ('Youngjun', 'Na'),
  ('Will', 'Smith'),
  ('Kevin', 'Suriawijaya'),
  ('Danna', 'Xu'),
  ('Paul', 'Rose');

INSERT INTO
  questions (title, body, author_id)
VALUES
  ('Flat Earth?', 'Is the earth flat?', 1),
  ('Pizza', 'Will there be free pizza today?', 2),
  ('Semicolons?', 'Why do we use semicolons? ;)', 3),
  ('help', 'How do I open VSCode?', 1),
  ('Accidentally wore shorts', 'I wore shorts today, will I get a strike?', 5);

INSERT INTO
  question_follows (question_id, user_id)
VALUES
  (1,1),
  (1,2),
  (1,3),
  (1,4),
  (1,5),
  (2,4),
  (2,3),
  (4,3),
  (4,4),
  (5,1);

INSERT INTO
  replies (question_id,parent_reply_id,user_id,body)
VALUES
  (1,NULL,2,'It looks that way.'),
  (1,1,1,'A fellow flat earther I see.'),
  (2,NULL,4,'No.'),
  (2,NULL,3,'Can we get burritos instead?'),
  (4,NULL,2,'i think you have to type VSCode in to google.'),
  (5,NULL,1,'You owe me $400.'),
  (5,6,1,'I m calling the cops');

INSERT INTO
  question_likes (question_id,user_id)
VALUES
  (1,4),
  (2,4),
  (3,4),
  (4,4),
  (5,4),
  (1,2),
  (2,1),
  (3,3),
  (4,2);