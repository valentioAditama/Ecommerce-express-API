// models/users.js

class User { 
    constructor(id, fullname, email, password, role, is_active) {
        this.id = id;
        this.fullname = fullname;
        this.email = email;
        this.password = password;
        this.role = role;
        this.is_active = is_active;
    }

    to_json() {
        return {
            id: this.id,
            fullname: this.fullname,
            email: this.email,
            password: this.password,
            role: this.role, 
            is_active: this.is_active
        }
    }
}