export default (orm, DataTypes) => {
  const User = orm.define('user', {
    role: {
      allowNull: false,
      type: DataTypes.STRING
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING
    },
    login: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true
    },
    passwordHash: {
      allowNull: false,
      type: DataTypes.STRING
    }
  }, {});

  return User;
};
