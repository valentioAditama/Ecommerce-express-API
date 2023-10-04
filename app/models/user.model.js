module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("users", {
    fullname: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    },
    role: {
      type: Sequelize.TINYINT(1)
    }, 
    is_active: {
      type: Sequelize.TINYINT(1)
    },
    created_at: {
      type: Sequelize.TIMESTAMP(1)
    },
    modified: {
      type: Sequelize.TIMESTAMP(1)
    }
  });

  return User;
};
