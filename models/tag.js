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
      // We're saying that a Tag should belong to an Author
      // A Tag can't be created without an Author due to the foreign key constraint
      Tag.belongsToMany(models.Post, {
        through: 'BookTags'
      });
    };
  
    return Tag;
  };
  