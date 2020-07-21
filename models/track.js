module.exports = function(sequelize, DataTypes) {
  var Track = sequelize.define("Track", {
    // Giving the Track model a name of type STRING
    name: DataTypes.STRING
  });

  Track.associate = function(models) {
    // Associating Track with 
    // When an Author is deleted, also delete any associated Posts
    Track.hasMany(models.Book, {
      onDelete: "cascade"
    });
  };

  return Track;
};
