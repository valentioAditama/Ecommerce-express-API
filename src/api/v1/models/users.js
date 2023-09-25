module.exports = {
  get: function(con, callback) {
    con.query("SELECT * FROM users")
  },

  create: function(con, data, callback) {
    con.query(
      `INSERT INTO users SET 
      fullname = '${data.fullname}', 
      email = '${data.email}',
      password = '${data.password}'
      role = '${data.role}'
      is_active = '${data.is_active}'`,
      callback
    )
  },
}