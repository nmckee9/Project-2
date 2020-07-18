
var path = require("path");

module.exports = function(app) {

  app.get("/rabbit-home", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/view.html"));
  });

  // add route loads the add.html page,
  // where users can enter new characters to the db
  app.get("/rabbit-results", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/results.html"));
  });

  // all route loads the all.html page,
  // where all characters in the db are displayed
  app.get("/rabbit-likes", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/likes.html"));
  });

};
