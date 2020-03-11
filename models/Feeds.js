module.exports = (sequelize, DataTypes) => {
  const Feeds = sequelize.define("Feeds", {
    user_id: {
      type: DataTypes.STRING,
      allowNull: false
    },
    username: {
      type: DataTypes.STRING
    },
    activity_type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    link: {
      type: DataTypes.STRING,
    },
    image: {
      type: DataTypes.STRING,
    },
    restaurant_name: {
      type: DataTypes.STRING
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

  return Feeds;
};
