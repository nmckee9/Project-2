git $(document).ready(function () {
  const selectChoice = $("#inlineFormCustomSelect");
  let search = $("#searchInput");
  const submitBtn = $("#mainSearch");
  const bookPreviewBtn = $("book-preview-button");


  $(submitBtn).on("click", function () {
    if (!search.val().trim()) {
      return;
    }

    if (selectChoice.children("option:selected").val() === "1") {
      $(".book-div").empty();
      renderArtistBooks();

    } else {
      $(".book-div").empty();
      renderGenreBooks();
    }
  });

  function renderArtistBooks() {
    const searchTerm = search.val();
    console.log("https://www.googleapis.com/books/v1/volumes?q=" + '"' + searchTerm + '"')
    $.ajax({
      url: "https://www.googleapis.com/books/v1/volumes?q=" + '"' + searchTerm + '"',

      dataType: "json",
      success: function (data) {
        console.log(data);
        if (!data.items) {
          const noBooksDiv = $("<div>");
          noBooksDiv.addClass("no-books-found-div");
          noBooksDiv.text("No books found...");
        }
        //add title and author contents to html book list from json
        const musicBookContainer = $("<div>");
        musicBookContainer.addClass("both-container");
        const bookDiv = $("<div>");
        bookDiv.addClass("book-div col div.jumbotron jumbotron");
        musicBookContainer.append(bookDiv);

        const booklistHeader = $("<h2>");
        booklistHeader.text("Read about " + searchTerm + "...");
        bookDiv.append(booklistHeader);
        const list = $("<ul>");
        list.addClass("booklist");
        bookDiv.append(list);

        $(".jumbotron").append(musicBookContainer);

        for (let i = 0; i < data.items.length; i++) {
          const listItem = $("<li>");
          listItem.addClass("book-item");
          listItem.text(data.items[i].volumeInfo.title + " by " + data.items[i].volumeInfo.authors[0]);
          bookDiv.append(listItem);

          const bookPreviewBtn = $("<a>");
          bookPreviewBtn.addClass("book-preview-button btn");
          bookPreviewBtn.attr("href", "https://books.google.com/books?id=" + data.items[i].id);
          bookPreviewBtn.attr("target", "_blank");
          bookPreviewBtn.text("Preview");
          listItem.append(bookPreviewBtn);

          const likeBookBtn = $("<button>");
          likeBookBtn.addClass("artist-like-book-button");
          bookPreviewBtn.attr("book-title", data.items[i].volumeInfo.title);
          likeBookBtn.text("Like");
          listItem.append(likeBookBtn);

          list.append(listItem);
          bookDiv.append(list);

        }
      },
      type: "GET"
    });

    //get preview of book to appear when user clicks Book Preview button
  }

  function renderGenreBooks() {
    //loop through anD get the genre strings from the json pertaining to the song or alum searched. Push the genres into the genres array
    const genreArray = []; //from spotify json result
    //select random genre from spotifyJSONresults to find a book about
    $.ajax({
      url: "https://www.googleapis.com/books/v1/volumes?q=" + '"history of ' + genreArray[Math.floor(Math.random() * genreArray.length)] + ' music"',
      dataType: "json",
      success: function (data) {
        console.log(data);
        if (!data.items) {
          const noBooksDiv = $("<div>");
          noBooksDiv.addClass("no-books-found-div");
          noBooksDiv.text("No books found...");
        }
        //add title and author contents to html book list from json
        const musicBookContainer = $("<div>");
        musicBookContainer.addClass("both-container");
        const bookDiv = $("<div>");
        bookDiv.addClass("book-div col div.jumbotron jumbotron");
        musicBookContainer.append(bookDiv);

        const booklistHeader = $("<h2>");
        booklistHeader.text("Read about " + searchTerm + "...");
        bookDiv.append(booklistHeader);
        const list = $("<ul>");
        list.addClass("booklist");
        bookDiv.append(list);

        $(".jumbotron").append(musicBookContainer);

        for (let i = 0; i < data.items.length; i++) {
          const listItem = $("<li>");
          listItem.addClass("book-item");
          listItem.text(data.items[i].volumeInfo.title + " by " + data.items[i].volumeInfo.authors[0]);
          bookDiv.append(listItem);

          const bookPreviewBtn = $("<a>");
          bookPreviewBtn.addClass("book-preview-button btn");
          bookPreviewBtn.attr("href", "https://books.google.com/books?id=" + data.items[i].id);
          bookPreviewBtn.attr("target", "_blank");
          bookPreviewBtn.text("Preview");
          listItem.append(bookPreviewBtn);

          const likeBookBtn = $("<button>");
          likeBookBtn.addClass("artist-like-book-button");
          bookPreviewBtn.attr("book-title", data.items[i].volumeInfo.title);
          likeBookBtn.text("Like");
          listItem.append(likeBookBtn);

          list.append(listItem);
          bookDiv.append(list);

        }
      },
      type: "GET"
    });

  }


  //Artist Like button clicked then perform the function that updates artist table
  $(document).on("click", ".artist-like-book-button", handleArtistLikeClick);

  function handleArtistLikeClick() {
    // Calling the upsertArtist function and passing in the value of the name input
    addArtist({
      name: nameInput
        .val()
        .trim()
    });
  }

  function addArtist(artistData) {
    $.post("/api/artists", artistata)
      .then(getArtists);
  }

    //Track Like button clicked then perform the function that updates track table
    $(document).on("click", ".track-like-book-button", handleTrackLikeClick);


  function handleTrackLikeClick() {
    // Calling the upsertArtist function and passing in the value of the name input
    addTrack({
      name: nameInput
        .val()
        .trim()
    });
  }

  function addArtist(artistData) {
    $.post("/api/artists", artistData)
  }
});




});

