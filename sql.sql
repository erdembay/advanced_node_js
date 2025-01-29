CREATE TABLE `node-complete`.`products` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(225) NOT NULL,
  `price` DOUBLE NOT NULL,
  `description` TEXT NOT NULL,
  `image` VARCHAR(225) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE);
INSERT INTO `node-complete`.`products` (`title`, `price`, `description`, `image`) VALUES ('A Book', 19.99, 'A very good book', 'https://images-na.ssl-images-amazon.com/images/I/51N6X6Z6XeL._SX329_BO1,204,203,200_.jpg');