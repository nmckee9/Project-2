
var db = require("../models");

module.exports = function (app) {

  // GET route for getting all of the books related to an artist when the user clicks View Liked Books that belong to an Artist
  app.get("/api/artist/books", function (req, res) {
    var query = {};
    if (req.query.artist_id) {
      query.ArtistId = req.query.artist;
    }
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Arstist
    db.Book.findAll({
      where: query,
      include: [db.Artist]
    }).then(function (dbBook) {
      res.json(dbBook);
    });
  });

  // GET route for getting all of the books related to a track when the user clicks View Liked Books that belong to a Track
  app.get("/api/track/books", function (req, res) {
    var query = {};
    if (req.query.track_id) {
      query.TrackId = req.query.track_id;
    }
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Track
    db.Book.findAll({
      where: query,
      include: [db.Track]
    }).then(function (dbBook) {
      res.json(dbBook);
    });
  });


  app.get("/api/books", function(req, res) {

    db.Book.findAll({
    }).then(function(dbBook) {
      res.json(dbBook);
    });
  });

  //view books under artist table in likes.html
  app.get("/api/books/:id", function(req, res) {
    db.Book.findOne({
      where: {
        id: req.params.id
      },
    }).then(function(dbBook) {
      res.json(dbBook);
    });
  });
  // POST route for saving a new book when user clicks Like button for a book
  app.post("/api/books", function (req, res) {
    db.Book.create({title: req.body.title}).then(function (dbBook) {
      res.json(dbBook);
    });
  });

  // DELETE route for deleting books (every book has their own id whether associated with an artist or track)
  app.delete("/api/books/:id", function (req, res) {
    db.Book.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (dbBook) {
      res.json(dbBook);
    });
  });
};
