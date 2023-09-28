const db = require('../../../config/database');

class Cart {
  constructor(id, products_id, is_active) {
    this.id = id;
    this.products_id = products_id;
    this.is_active = is_active;
  }

  static getAll(callback) {
    db.query(`SELECT * FROM cart where is_active = 1`, (err, result) => {
      if (err) throw err;
      return callback(null, result);
    });
  }

  static getById(id, callback) {
    db.query(`SELECT * FROM cart where id = ${id}`, (err, result) => {
      if (err) throw err;
      if (result.length === 0) {
        return callback(null, null);
      }
      return callback(null, result);
    });
  }

  static create(products_id, is_active, callback) {
    db.query(
      `INSERT INTO cart (products_id, is_active) VALUES (${products_id}, ${is_active})`,
      (err, result) => {
        if (err) throw err;
        return callback(null, result);
      },
    );
  }

  static update(id, products_id, callback) {
    db.query(
      `UPDATE cart SET products_id = ${products_id} WHERE id = ${id}`,
      (err, result) => {
        if (err) throw err;
        if (result.length === 0) {
          return callback(null, null);
        }
        return callback(null, result);
      },
    );
  }

  static delete(id, callback) {
    db.query(
      `UPDATE cart SET is_active = 0 WHERE id = ${id}`,
      (err, result) => {
        if (err) throw err;
        if (result.length === 0) {
          return callback(null, null);
        }
        return callback(null, result);
      },
    );
  }
}

module.exports = Cart;
