const Sequelize = require('sequelize');

module.exports = (sequelize, Sequelize) => {
  const Users = sequelize.define('users', {
    fullname: {
      type: DataTypes.STRING
    }, 
    email: {
      type: DataTypes.STRING
    }, 
    password: {
      type: DataTypes.STRING
    }, 
    role: {
      type: DataTypes.TEXT('tiny')
    }, 
    is_active: {
      type: DataTypes.TEXT('tiny')
    },
  }); 
  
  return Users;
}