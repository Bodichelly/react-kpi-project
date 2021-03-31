export default (orm, DataTypes) => {
  const Area = orm.define('area', {
    documentCode: {
      allowNull: false,
      type: DataTypes.STRING
    },
    date: {
      allowNull: false,
      type: DataTypes.DATE
    },
    description: {
      allowNull: false,
      type: DataTypes.STRING
    }
  }, {});

  return Area;
};
