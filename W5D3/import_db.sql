DROP TABLE IF EXISTS cattoys; /*lets us run the file multiple times and start fresh
(create table from scratch) each time we run the file*/
DROP TABLE IF EXISTS cats; /*Drop all joins table first b/c they are referencing other tables. Can't dop the other tables 
if something is refrencing them*/ 
DROP TABLE IF EXISTS toys;

CREATE TABLE cats (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    color VARCHAR(255),
    breed VARCHAR(255) /*NO TRAILING COMMAS!!*/
); /*REMEMBER THE SEMICOLON!!*/

INSERT INTO cats(name, color,breed) /*specifies the order we will be supplying values in below*/
VALUES ('Fred','Yellow','Tabby'), /*,...; <- if you want to add more make sure you separte by commas and end list with semicolon*/
('Phil','Rainbow','Nyan'),
('Keven', 'Black', 'Bangs'),
('C@T','Silver', 'Totally Cat'),
('Youngjun', 'Omni', 'Potent');

CREATE TABLE toys (
    id SERIAL PRIMARY KEY,
    price FLOAT,
    color VARCHAR(255),
    name VARCHAR(255)
);

INSERT INTO toys(price, color, name)
VALUES (3.99, 'Vermillion', 'Yarn Ball'),
(399.00, 'Blue', 'Tower'),
(27.00, 'Yellow', 'Scratching Post'),
(1000000.00, 'Clown', 'Human'),
(13.37, 'Gray', 'Mouse');

CREATE TABLE cattoys(
    id SERIAL PRIMARY KEY,
    cat_id INTEGER,
    toy_id INTEGER,

    FOREIGN KEY (cat_id) REFERENCES cats(id),
    FOREIGN KEY (toy_id) REFERENCES toys(id)
);

INSERT INTO cattoys(cat_id,toy_id)
VALUES (
  (SELECT id FROM cats WHERE name = 'Fred'),
  NULL),

  ((SELECT id FROM cats WHERE name = 'Phil'),
  (SELECT id FROM toys WHERE name = 'Human')),

  ((SELECT id FROM cats WHERE name = 'Keven'),
  (SELECT id FROM toys WHERE name = 'Scratching Post')),

  ((SELECT id FROM cats WHERE name = 'Keven'),
  (SELECT id FROM toys WHERE name = 'Mouse')),

  ((SELECT id FROM cats WHERE name = 'Keven'),
  (SELECT id FROM toys WHERE name = 'Yarn Ball')),

  ((SELECT id FROM cats WHERE name = 'C@T'),
  (SELECT id FROM toys WHERE name = 'Yarn Ball')),

  ((SELECT id FROM cats WHERE name = 'Youngjun'),
  (SELECT id FROM toys WHERE name = 'Human'));




