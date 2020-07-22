module.exports = function(sequelize, DataTypes) {
    var Tag = sequelize.define("Tag", {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      }
    });
  
    Tag.associate = function(models) {
      // We're saying that a Tag should belong to a Book
      // A Tag can't be created without an Artist or Track due to the foreign key constraint
      Tag.belongsToMany(models.Book, {
        through: 'BookTags'
      });
    };
  
    return Tag;
  };
  