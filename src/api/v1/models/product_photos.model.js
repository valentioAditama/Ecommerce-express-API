const db = require('../../../config/database');

class Product_photos {
  constructor(id, products_id, path) {
    this.id = id;
    this.products_id = products_id;
    this.path = path;
  }

  static getAll(callback) {
    db.query(
      `SELECT * FROM product_photos WHERE is_active = 1`,
      (err, result) => {
        if (err) {
          return callback(err, null);
        }
        return callback(null, result);
      },
    );
  }

  static getById(id, callback) {
    db.query(
      `SELECT * FROM product_photo WHERE id = ? is_active = 1`,
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

  static create(products_id, path, callback) {
    db.query(
      `INSERT INTO product_photos (products_id, path) VALUES (?,?)`,
      [products_id, path],
      (err, result) => {
        if (err) {
          return callback(err, null);
        }
        return callback(null, result);
      },
    );
  }

  static update(id, products_id, path, callback) {
    db.query(
      `UPDATE product_photos SET products_id =?, path =? WHERE id =?`,
      [products_id, path, id],
      (err, result) => {
        if (err) {
          return callback(err, null);
        }
        return callback(null, result);
      },
    );
  }

  static delete(id, callback) {
    db.query(
      `UPDATE product_photos SET is_active = 0 WHERE id =?`,
      [id],
      (err, result) => {
        if (err) {
          return callback(err, null);
        }
        return callback(null, result);
      },
    );
  }
}

module.exports = Product_photos;
