const bcrypt = require("bcrypt");

module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define("Users", {
        first_name: DataTypes.STRING(30),
        last_name: DataTypes.STRING(30),
        username: {
            type: DataTypes.STRING(30),
            allowNull: false,
            unique: true
        },
        email: {
            type: DataTypes.STRING(100),
            allowNull : false,
            unique: true
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

    Users.prototype.validPassword = function (password) {
        return bcrypt.compareSync(password, this.password);
    }
    
    return Users;
};
