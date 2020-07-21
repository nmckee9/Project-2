const Spotify = require("node-spotify-api");

const spotify = new Spotify({
  id: "efdaf3cc320542a98e7cdda2c0006e8e",
  secret: "f9fe54f2e444436793812058af96e513",
});

$(document).ready(() => {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  //   $.get("/api/user_data").then(data => {
  //     $(".member-name").text(data.email);
  //   });

  $("#mainSearch").on("click", (event) => {
    event.preventDefault();
    let queryType = $("#inlineFormCustomSelect").val();
    let queryName = $("#searchInput").val();
    if (queryType === "1") {
      spotify
        .search({ type: "artist", query: queryName, limit: 5 })
        .then((response) => {
          let artistDiv = $("<div>");
          for (let i = 0; i < response.artists.items.length; i++) {
            let artistName = $("<p>").text(
              `Artist Name: ${response.artists.items[0].name}`
            );

            // spotify
            // .request(`https://api.spotify.com/v1/artists/${response.artists.items[i].id}/top-tracks?country=US`)
            // .then(res => {
            //     const topFiveDiv = $("<div>");
            //     for (let k = 0; k < 5; i++){
            //         let title = $("<p>").text(`Title: ${res.tracks[k].name}`);
            //         let artist = $("<p>").text(`Artist: ${res.tracks[k].artists[0].name}`);
            //         let album = $("<p>").text(`Album: ${res.tracks[k].album.name}`);
            //         topFiveDiv.append(title, artist, album);
            //       }
            //     $(".jumbotron").append(topFiveDiv);
            // })
            // .catch(err => {
            //     if (err) throw err;
            // })
          }
        })
        .catch((err) => {
          if (err) {
            throw err;
          }
        });
    } else if (queryType === "2") {
      spotify
        .search({ type: "track", query: queryName, limit: 5 })
        .then((response) => {
          const songsDiv = $("<div>");
          for (let i = 0; i < response.tracks.items.length; i++) {
            let title = $("<p>").text(response.tracks.items[i].name);
            let artist = $("<p>").text(
              response.tracks.items[i].artists[0].name
            );
            let album = $("<p>").text(response.tracks.items[i].album.name);
            songsDiv.append(title, artist, album);
          }
          $(".jumbotron").append(songsDiv);
        });
    }
  });
});
