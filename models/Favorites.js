module.exports = (sequelize, DataTypes) => {
  const Favorites = sequelize.define("Favorites", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    rating: {
      type: DataTypes.INTEGER
    },
    price: {
      type: DataTypes.STRING
    },
    image: {
      type: DataTypes.STRING
    },
    link: {
      type: DataTypes.STRING
    },
    is_closed: {
      type: DataTypes.BOOLEAN
    },
    restaurant_id: {
      type: DataTypes.STRING
    },
    display_phone: {
      type: DataTypes.STRING
    },
    // display_address: {
    //   type: DataTypes.JSON
    // },
    // category: {
    //   type: DataTypes.JSON
    // },
    latitude: {
      type: DataTypes.INTEGER
    },
    longitude: {
      type: DataTypes.INTEGER
    },
    distance: {
      type: DataTypes.INTEGER
    },
    // transactions: {
    //   type: DataTypes.JSON
    // },
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

    Favorites.associate = function(models) {
      Favorites.belongsTo(models.Users, {
        foreignKey: {
          allowNull: true
        }
      });
    };

  return Favorites;
};
