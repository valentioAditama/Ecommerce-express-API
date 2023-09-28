const db = require('../../../config/database');

class Checkout {
  constructor(id, products_id, totally, status) {
    this.id = id;
    this.products_id = products_id;
    this.totally = totally;
    this.status = status;
  }

  static getAll(callback) {
    db.query('SELECT * FROM checkout WHERE status = 1', (err, result) => {
      if (err) throw err;
      callback(null, result);
    });
  }

  static findById(id, callback) {
    db.query('SELECT * FROM checkout WHERE id =?', [id], (err, result) => {
      if (err) throw err;
      if (result.length === 0) {
        return callback(null, null);
      }
      callback(null, result);
    });
  }

  static create(products_id, totally, status, callback) {
    db.query(
      'INSERT INTO checkout (products_id, totally, status) VALUES (?,?,?)',
      [products_id, totally, status],
      (err, result) => {
        if (err) throw err;
        callback(null, result);
      },
    );
  }

  static update(id, products_id, totally, status, callback) {
    db.query(
      'UPDATE checkout SET products_id =?, totally =?, status =? WHERE id =?',
      [products_id, totally, status, id],
      (err, result) => {
        if (err) throw err;
        if (result.length === 0) {
          return callback(null, null);
        }
        callback(null, result);
      },
    );
  }

  static delete(id, callback) {
    db.query(
      'UPDATE checkout SET status = 0 WHERE id =?',
      [status, id],
      (err, result) => {
        if (err) throw err;
        if (result.length === 0) {
          return callback(null, null);
        }
        callback(null, result);
      },
    );
  }
}

module.exports = Checkout;
