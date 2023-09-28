const db = require('../../../config/database');

class Product_attributes {
  constructor(id, products_id, products_size) {
    this.id = id;
    this.products_id = products_id;
    this.products_size = products_size;
  }

  static getAll(callback) {
    db.query(
      `SELECT * FROM product_attributes WHERE is_active = 1 `,
      (err, result) => {
        if (err) {
          return callback(err, null);
        }
        return callback(null, result);
      },
    );
  }

  static findById(id, callback) {
    db.query(
      `SELECT * FROM product_attributes WHERE id = ${id}`,
      (err, result) => {
        if (err) {
          return callback(err, null);
        }
        return callback(null, result);
      },
    );
  }

  static create(products_id, products_size, callback) {
    db.query(
      `INSERT INTO product_attributes (products_id, products_size) VALUES ('${products_id}', '${products_size}')`,
      (err, result) => {
        if (err) {
          return callback(err, null);
        }
        return callback(null, result);
      },
    );
  }

  static update(id, products_id, products_size, callback) {
    db.query(
      `UPDATE product_attributes SET products_id = '${products_id}', products_size = '${products_size}' WHERE id = ${id}`,
      (err, result) => {
        if (err) {
          return callback(err, null);
        }

        if (result.length === 0) {
          return callback(null, null);
        }

        return callback(null, result);
      },
    );
  }

  static delete(id, callback) {
    db.query(
      `UPDATE product_attributes SET is_active = 0 WHERE id = ${id}`,
      (err, result) => {
        if (err) {
          return callback(err, null);
        }

        if (result.length === 0) {
          return callback(null, null);
        }

        return callback(null, result);
      },
    );
  }
}

module.exports = Product_attributes;
