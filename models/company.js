'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class company extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      company.hasMany(models.phone,{as:'phone',foreignKey:'companyid'})
        }
  }
  company.init({
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    fblink: DataTypes.STRING,
    instalink: DataTypes.STRING,
    linkedin: DataTypes.STRING,
    openingtime: DataTypes.STRING,
    closingtime: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'company',
  });
  return company;
};