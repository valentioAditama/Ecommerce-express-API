const db = require('../../../config/database');

class Products {
  constructor(id, user_id, title, price, product_detail, is_active) {
    this.id = id;
    this.user_id = user_id;
    this.title = title;
    this.price = price;
    this.product_detail = product_detail;
    this.is_active = is_active;
  }

  static getAll(callback) {
    db.query(`SELECT * FROM products WHERE is_active = 1`, (err, result) => {
      if (err) {
        return callback(err, null);
      }
      return callback(null, result);
    });
  }

  static findById(id, callback) {
    db.query(
      `SELECT * FROM products where id = ${id} is_active = 1`,
      (err, result) => {
        if (err) {
          return callback(err, null);
        }
        if (result.length === 0) {
          return callback(null, null);
        }
        const products = new Products(
          result[0].id,
          result[0].user_id,
          result[0].title,
          result[0].price,
          result[0].product_detail,
          result[0].is_active,
        );
        return callback(null, products);
      },
    );
  }

  static create(user_id, title, price, product_detail, is_active, callback) {
    db.query(
      `INSERT INTO products (user_id, title, price, product_detail, is_active) VALUES (?,?,?,?,?)`,
      [user_id, title, price, product_detail, is_active],
      (err, result) => {
        if (err) {
          return callback(err, null);
        }
        const createdProduct = new Products(
          result.insertId,
          user_id,
          title,
          price,
          product_detail,
          is_active,
        );
        return callback(null, createdProduct);
      },
    );
  }

  static update(id, title, price, product_detail, callback) {
    db.query(
      `UPDATE products SET title =?, price =?, product_detail =?, is_active =? WHERE id =?`,
      [title, price, product_detail, id],
      (err, result) => {
        if (err) {
          return callback(err, null);
        }

        if (result.length === 0) {
          return callback(null, null);
        }

        const updatedProduct = new Products(id, title, price, product_detail);
        return callback(null, updatedProduct);
      },
    );
  }

  static delete(id, callback) {
    db.query(
      `UPDATE products SET is_active = 0 WHERE id =?`,
      [id],
      (err, result) => {
        if (err) {
          return callback(err, null);
        }

        if (result.length === 0) {
          return callback(null, null);
        }

        let deletedProduct = {
          id: id,
          is_active: 0, // false for active
        };

        return callback(null, deletedProduct);
      },
    );
  }
}

module.exports = Products;
