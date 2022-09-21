'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class phone extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      
      phone.belongsTo(models.company,{as:'company',foreignKey:'companyid'})
    }
  }
  phone.init({
    phoneno: DataTypes.STRING,
    companyid: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'phone',
  });
  return phone;
};