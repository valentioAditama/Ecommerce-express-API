const db = require('../../../config/database');

class User {
  constructor(id, fullname, email, password, role, is_active) {
    this.id = id;
    this.fullname = fullname;
    this.email = email;
    this.password = password;
    this.role = role;
    this.is_active = is_active;
  }

  static getAll(callback) {
    db.query(`SELECT * FROM users where is_active = 1`, (err, result) => {
      if (err) {
        return callback(err, null);
      }
      return callback(null, result);
    });
  }

  static findById(id, callback) {
    db.query(
      `SELECT * FROM users WHERE id = ${id} is_active = 1`,
      (err, result) => {
        if (err) {
          return callback(err, null);
        }
        if (result.length === 0) {
          return callback(null, null);
        }
        const user = new User(
          result[0].id,
          result[0].fullname,
          result[0].email,
          result[0].password,
          result[0].role,
          result[0].is_active,
        );
        return callback(null, user);
      },
    );
  }

  static create(fullname, email, password, role, is_active, callback) {
    db.query(
      `INSERT INTO users (fullname, email, password, role, is_active) VALUES (?, ?, ?, ?, ?)`,
      [fullname, email, password, role, is_active],
      (err, result) => {
        if (err) {
          return callback(err, null);
        }
        const createdUser = new User(
          result.insertId,
          fullname,
          email,
          password,
          role,
          is_active,
        );
        return callback(null, createdUser);
      },
    );
  }

  static update(fullname, email, password, userId, callback) {
    db.query(
      `UPDATE users SET fullname = '${fullname}', email = '${email}', password = '${password}' where id = ${userId}`,
      (err, result) => {
        if (err) {
          return callback(err, null);
        }

        if (result.affectedRows === 0) {
          return callback(null, null);
        }

        const updatedUser = new User(userId, fullname, email, password);

        return callback(null, updatedUser);
      },
    );
  }

  static delete(userId, is_active, callback) {
    db.query(
      `UPDATE users SET is_active = '${is_active}' where id = ${userId}`,
      (err, result) => {
        if (err) {
          return callback(err, null);
        }

        if (result.affectedRows === 0) {
          return callback(null, null);
        }

        let deleteUsers = {
          id: userId,
          is_active: is_active,
        };

        return callback(null, deleteUsers);
      },
    );
  }
}

module.exports = User;
