$(document).ready(function () {

  const artistContainer = $("#likelist-Artist");
  const trackContainer = $("#likelist-Tracks");
  const bookContainer = $("#likelist-Books");

  // Getting artists, tracks, and books from database when page loads
  getArtists();
  getTracks();
  // getBooks();

  // This function grabs all artists from the database and renders to page
  function getArtists() {
    console.log("hello artist");
    $.get("/api/artists", function (data) {
      artists = data;
      artistContainer.empty();
      if (artists.length === 0) {
        const noArtistsMessage = $("<p>");
        noArtistsMessage.text("No liked artists yet...");
        artistContainer.append(noArtistsMessage);
      }

      if (artists.length !== 0) {
        for (let i = 0; i < artists.length; i++) {
          const row = $("<li>");
          row.addClass("list-group-item artistResult");
          row.text(artists[i].name);
          const artistDeleteBtn = $("<button>");
          artistDeleteBtn.addClass("badge badge-info deleteArtist");
          artistDeleteBtn.attr("id", artists[i].id);
          artistDeleteBtn.text("remove");
          row.append(artistDeleteBtn);
          artistContainer.prepend(row);
        }
      }
    });
  }

  $(".artistResult").on("click", function deletArtist(event) {
    event.stopPropagation();
    const search = $(this).val();
    window.location.replace("/main");
    //how do we want to display this artist search?
  });

  // This function resets the artists displayed with new artists from the database and displays artists

  $(".deleteArtist").on("click", function (event) {
    event.stopPropagation();
    const id = $(this).attr("id");

    $.ajax({
      url: "/api/artists" + id,
      type: "DELETE",
      success: function () {
        getArtists;
      }
    });
  });


  ////////////////////////////////////////////Tracks
  function getTracks() {
    console.log("hello track");
    $.get("/api/tracks", function (data) {
      tracks = data;
      trackContainer.empty();
      if (tracks.length === 0) {
        const noTracksMessage = $("<p>");
        noTracksMessage.text("No liked tracks yet...");
        artistContainer.append(noTracksMessage);
      }

      if (tracks.length !== 0) {
        for (let i = 0; i < tracks.length; i++) {
          const row = $("<li>");
          row.addClass("list-group-item trackResult");
          row.text(tracks[i].name);
          const trackDeleteBtn = $("<button>");
          trackDeleteBtn.addClass("badge badge-info deleteTrack");
          trackDeleteBtn.attr("data-trackId", tracks[i].id);
          trackDeleteBtn.text("remove");
          row.append(trackDeleteBtn);
          trackContainer.prepend(row);
        }
      }
    });
  }

  $(".trackResults").on("click", function deletArtist(event) {
    event.stopPropagation();
    const search = $(this).val();
    window.location.replace("/main");
    //how do we want to display this artist search?
  });

  // This function resets the artists displayed with new artists from the database and displays artists

  trackContainer.on("click", $(".deleteTrack"), function (event) {
    event.stopPropagation();

    const id = event.target.getAttribute("data-trackId");
    console.log("id", id);//gets id
    //but does not delete it...
    $.ajax({
      url: "/api/tracks/" + id,
      type: "DELETE",
      success: function () {
        console.log("success!!!");
      }
    });
  });

});