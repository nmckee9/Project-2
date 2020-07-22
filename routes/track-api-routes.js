var db = require("../models");

//get all tracks and include any book for that particular
module.exports = function(app) {
  app.get("/api/tracks", function(req, res) {

    db.Track.findAll({
      include: [db.Book]
    }).then(function(dbTrack) {
      res.json(dbTrack);
    });
  });

  //view books under artist table in likes.html
  app.get("/api/tracks/:id", function(req, res) {
   
    db.Track.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Book]
    }).then(function(dbTrack) {
      res.json(dbTrack);
    });
  });

  //api route to update artist table with the name of artist when an artist like button is clicked
  app.post("/api/tracks", function(req, res) {
    db.Track.create(req.title).then(function(dbArtist) {
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
