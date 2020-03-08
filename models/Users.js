const bcrypt = require("bcrypt");

module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define("Users", {
        first_name: DataTypes.STRING(30),
        last_name: DataTypes.STRING(30),
        username: {
            type: DataTypes.STRING(30),
            allowNull: false,
            // unique: true
           // unique: true --incorporate later when not in development
        },
        email: {
            type: DataTypes.STRING(100),
            allowNull : false
            //  unique: true  --incorporate later when not in development
        },
        password: {
            type: DataTypes.STRING,
            allowNull : false
        },
        zip_code: {
            type: DataTypes.INTEGER
        },
        createdAt: {
            allowNull: true,
            defaultValue: new Date(),
            type: DataTypes.DATE
        },
        updatedAt: {
            allowNull: true,
            defaultValue: new Date(),
            type: DataTypes.DATE
        }

    });

    Users.associate = (models) => {
        Users.hasMany(models.Favorites, {
            onDelete:"cascade"
        });
    };

    //creates encrypted password
    Users.beforeCreate((users)=> {
        const salt = bcrypt.genSaltSync();
        users.password = bcrypt.hashSync(users.password, salt);
    });

    // Users.beforeCreate(function (user, options, done) {
    //     console.log('werk')
    // })

    //password validation
    // Users.prototype.validPassword = (password, saltedPassword) => {
    //     console.log({ passedInPassword: password })
    //     console.log({ saltedPassword });
    //     return bcrypt.compareSync(password, saltedPassword)
    // };
    Users.prototype.validPassword = function (password) {
        return bcrypt.compareSync(password, this.password);
    }
    
    return Users;
};
