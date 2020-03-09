module.exports = (sequelize, DataTypes) => {
  const Feeds = sequelize.define("Feeds", {
    user_id: {
      type: DataTypes.STRING,
      allowNull: false
    },
    activity_type: {
      type: DataTypes.STRING
    },
    restaurant_id: {
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
