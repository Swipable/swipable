module.exports = (sequelize, DataTypes) => {
    const Favorites = sequelize.define("Favorites", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        display_address: {
            type: DataTypes.STRING
        },
        display_phone: {
            type: DataTypes.STRING
        },
        category: {
            type: DataTypes.STRING
        },
        rating: {
            type: DataTypes.INTEGER
        },
        latitude: {
            type: DataTypes.INTEGER
        },
        longitude: {
            type: DataTypes.INTEGER
        },
        delivery: {
            type: DataTypes.BOOLEAN 
        },
        is_closed: {
            type: DataTypes.BOOLEAN
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

    Favorites.associate = function (models) {
        Favorites.belongsTo(models.Users, {
            foreignKey: {
                allowNull: false
              }
        });
    };

    return Favorites;
};