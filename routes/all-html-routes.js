
var path = require("path");

module.exports = function(app) {

  app.get("/main", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/layouts/main.html"));
  });

  app.get("/likes", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/layouts/likes.html"));
  });

  app.get("/books", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/layouts/books.html"));
  });
};
