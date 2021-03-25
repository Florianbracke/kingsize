const database = require('../utility/database');

module.exports = class User {
    constructor(name,email,password) {
        this.name = name;
        this.email = email;
        this.passwrod = password;
    }

    static find(email) {
        return database.execute(
            'SELECT * FROM users WHERE emai = ?' 
            [email]);
    }

    static save(user) {
        return database.execute(
            'INSERT INTO users (name, email, password) VALUES (?, ?, ?)', 
            [user.name, user.email, user.password] 
        )
    }
};

