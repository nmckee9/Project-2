var db = require("../models");

module.exports = function (app) {

    app.get("/api/", function (req, res) {
        db.Likes.findAll({}).then(function (like) {

            res.json(like);
        });
    });

    app.get("/api/likes/:id", function (req, res) {
        db.Post.findOne({
            where: {
                id: req.params.id
            }
        })
            .then(function (dbPost) {
                res.json(dbPost);
            });
    });

    app.post("/api/song", function (req, res) {
        db.Likes.create({
            song: req.body.song,
        }).then(function (like) {

            res.json(like);
        });
    });

    app.post("/api/artist", function (req, res) {

        db.Like.create({
            artist: req.body.artist,
        }).then(function (like) {
            res.json(like);
        });
    });

    app.post("/api/book", function (req, res) {
        db.Like.create({
            book: req.body.book,
        }).then(function (like) {
            res.json(like);
        });
    });


    app.delete("/api/likes/:id", function (req, res) {
        db.Like.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (like) {
            res.json(like);
        });

    });
}
