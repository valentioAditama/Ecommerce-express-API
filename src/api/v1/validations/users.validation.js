const { check } = require("express-validator");

const userValidation = () => {
  return [
    check("fullname").exists().notEmpty(),
    check("email").exists().notEmpty().isEmail(),
    check("password").exists().notEmpty().minLength(8),
  ];
};

module.exports = userValidation;
