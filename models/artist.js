module.exports = function(sequelize, DataTypes) {
  var Artist = sequelize.define("Artist", {
    // Giving the Author model a name of type STRING
    name: DataTypes.STRING
  });

  Artist.associate = function(models) {
    // Associating Artist with 
    // When an Artist is deleted, also delete any associated Posts
    Artist.hasMany(models.Book, {
      onDelete: "cascade"
    });
  };

  return Artist;
};
