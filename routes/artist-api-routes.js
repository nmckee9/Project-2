var db = require("../models");

//get all artists and include any book for that particular
module.exports = function(app) {
  app.get("/api/artists", function(req, res) {

    db.Artist.findAll({ 
    }).then(function(dbArtist) {
      res.json(dbArtist);
    });
  });

  //view books under artist table in likes.html
  app.get("/api/artists/:id", function(req, res) {
    db.Artist.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Book]
    }).then(function(dbArtist) {
      res.json(dbArtist);
    });
  });

  //api route to update artist table with the name of artist when an artist like button is clicked
  app.post("/api/artists", function(req, res) {
    db.Artist.create(req.name).then(function(dbArtist) {
      res.json(dbArtist);
    });
  });

  app.delete("/api/artists/:id", function(req, res) {
    db.Artist.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbArtist) {
      res.json(dbArtist);
    });
  });

};
