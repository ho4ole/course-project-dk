module.exports = (sequelize, DataTypes) => {
    const Collections = sequelize.define("collection", {
       name: {
           type: DataTypes.STRING,
           allowNull: false
       },
       description: {
           type: DataTypes.STRING,
           allowNull: false
       },
       image: {
           type: DataTypes.STRING,
           allowNull: true,
           defaultValue: ""
       },
       topic: {
           type: DataTypes.STRING,
           allowNull: false
       },
       itemsCount: {
           type: DataTypes.INTEGER,
           allowNull: false
       }
   })
    return Collections
}
