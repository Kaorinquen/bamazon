DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (

    id INTEGER(15) AUTO_INCREMENT NOT NULL,
    item_id INTEGER(6) NOT NULL,
    product_name VARCHAR(30) NOT NULL,
    department_name VARCHAR(30) NOT NULL,
    price FLOAT(6),
    quantity INTEGER(3),

);

SELECT * FROM products;

INSERT INTO products (item_id, product_name, department_name, price, quantity)
VALUES (154432,"Grey Long-Sleeve Henley", "Clothing", 25.99, 10);

INSERT INTO products (item_id, product_name, department_name, price, quantity)
VALUES (456874, "Digital Alarm Clock", "Electronics", 9.99, 10);

INSERT INTO products (item_id, product_name, department_name, price, quantity)
VALUES (734850, "Cast-iron Skillet", "Home Goods", 20.89, 10);

INSERT INTO products (item_id, product_name, department_name, price, quantity)
VALUES (498135, "44-inch HD TV", "Electronics", 149.99, 10);

INSERT INTO products (item_id, product_name, department_name, price, quantity)
VALUES (798468, " 5-Speed Blender", "Home Goods", 24.99, 10);

INSERT INTO products (item_id, product_name, department_name, price, quantity)
VALUES (178364, "Acid Wash Jeans", "Clothing", 45.99, 10);

INSERT INTO products (item_id, product_name, department_name, price, quantity)
VALUES (948752, "Bananas", "Food and Drink", ""