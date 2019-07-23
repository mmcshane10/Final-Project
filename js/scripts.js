// Business Logic

function Venue(name, genre, capacity, allAges, address, contactInfo) {
  this.name = name;
  this.genre = genre;
  this.capacity = capacity;
  this.allAges = allAges;
  this.address = address;
  this.contactInfo = contactInfo;
}

var wonderBallroom = new Venue("wonderballroom", "metal", "club", false, "128 N.E. Russel Street, Portland, Oregon 97212", "kat@wonderballroom.com");

var roselandTheater = new Venue("roselandtheater", "hipHop", "house", true, "8 N.W. 6th Avenue, Portland, Oregon 97209", "info@roseland.com");

var mississippiStudios = new Venue("mississippistudios", "metal", "house", false, "3939 N. Mississippi Street, Portland, Oregon 97227", "info@mississippistudios.com");

var revolutionHall = new Venue("revolutionhall", "rock", "club", false, "1300 SE Stark Street, Portland OR 97214", "contact@revhall.com");

var modaCenter = new Venue("modacenter", "rock", "stadium", false, "1 N. Center Court Street, Portland, Oregon 97227", "events@rosequarter.com");

var dougFir = new Venue("dougfir", "hipHop", "house", true, "830 E Burnside St, Portland, OR 97214", "Diego@dougfirlounge.com")

var venueList = [wonderBallroom, roselandTheater, mississippiStudios, revolutionHall, modaCenter, dougFir];


// UI Logic

$(document).ready(function() {
  $("form#venueFinder").submit(function(event) {
    event.preventDefault();

    var genreInput = $("#genreSelect").val()
    console.log(genreInput);
    var sizeInput = $("#sizeSelect").val()
    console.log(sizeInput);

      for (var i=0; i< venueList.length; i++) {
        if (venueList[i].genre === genreInput && venueList[i].capacity === sizeInput) {
          console.log(venueList[i].name);
          $("#" + venueList[i].name).show();
        }
      }

    // Create a loop to create the HTML to return the matching objects to the ID in the dom
    // Unless we are going to show and hide cards for each venue...
    });
  });
