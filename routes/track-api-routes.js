var db = require("../models");

//get all tracks and include any book for that particular
module.exports = function(app) {
  app.get("/api/tracks", function(req, res) {

    db.Track.findAll({
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
    }).then(function(dbTrack) {
      res.json(dbTrack);
    });
  });

  //api route to update artist table with the name of artist when an artist like button is clicked
  app.post("/api/tracks", function(req, res) {
    db.Track.create({name: req.body.name}).then(function(dbTrack) {
      res.json(dbTrack);
    });
  });

  app.delete("/api/tracks/:id", function(req, res) {
    db.Track.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbTrack) {
      res.json(dbTrack);
    });
  });

};
