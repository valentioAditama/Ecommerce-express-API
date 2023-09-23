// models/users.js
const mysql = require('mysql');

class User extends mysql { 
    constructor(id, fullname, email, password, role, is_active) {
        super();
        this.id = id;
        this.fullname = fullname;
        this.email = email;
        this.password = password;
        this.role = role;
        this.is_active = is_active;
    }

    static get tableName() {
        return 'users';
    }
}

module.exports = User;