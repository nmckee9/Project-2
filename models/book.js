module.exports = function(sequelize, DataTypes) {
  var Book = sequelize.define("Book", {
    title: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1]
      }
    },
  });

  Book.associate = function(models) {
    // We're saying that a Book should belong to an Artist or Track
    // A Book can't be created without an Artist or Track due to the foreign key constraint
    Book.belongsTo(models.Artist, {
      foreignKey: {
        allowNull: true
      }
    });

    Book.belongsTo(models.Track, {
      foreignKey: {
        allowNull: true
      }
    });

    Book.belongsToMany(models.Tag, {
      through: "BookTags"
    });
  };

  return Book;
};
