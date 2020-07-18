
var path = require("path");

module.exports = function(app) {

  app.get("/main", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/layouts/main.html"));
  });

  // add route loads the add.html page,
  // where users can enter new characters to the db
  app.get("/results", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/layouts/results.html"));
  });

  // all route loads the all.html page,
  // where all characters in the db are displayed
  app.get("/likes", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/layouts/likes.html"));
  });

};
