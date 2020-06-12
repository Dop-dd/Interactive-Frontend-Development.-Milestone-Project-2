/*--------Create variables--------*/

let my_location, map, bounds, infoWindow, currentInfoWindow, service, infoPane;

function initMap() {
  // Initialize variables
  bounds = new google.maps.LatLngBounds();
  infoWindow = new google.maps.InfoWindow();
  currentInfoWindow = infoWindow;

  // Add a sidebar with panel as id
  infoPane = document.getElementById("panel");

  /* Try HTML Geolocation. 
    Source code at: https://developers.google.com/maps/documentation/javascript/examples/map-geolocation
    */
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        my_location = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        map = new google.maps.Map(document.getElementById("map"), {
          center: my_location,
          zoom: 15,
        });
        bounds.extend(my_location);

        infoWindow.setPosition(my_location);
        infoWindow.setContent("Location found.");
        infoWindow.open(map);
        map.setCenter(my_location);

        // Call Places Nearby Search on user's location
        getNearbyPlaces(my_location);
      },
      () => {
        // Browser supports geolocation, but user has denied permission
        handleLocationError(true, infoWindow);
      }
    );
  } else {
    // Browser doesn't support geolocation
    handleLocationError(false, infoWindow);
  }

  /*---------- --------Search Box-------------------------------------- */
  var input = document.getElementById("user-input");
  var searchBox = new google.maps.places.SearchBox(input);
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

  // Bias the SearchBox results towards current map's viewport.
  map.addListener("bounds_changed", function () {
    searchBox.setBounds(map.getBounds());
  });

  /*------------------------------------------------------------*/
}

// Handle a geolocation error
function handleLocationError(browserHasGeolocation, infoWindow) {
  // Set my default location to ntwerp, Belgium
  my_location = { lat: 51.219, lng: 4.402 };
  map = new google.maps.Map(document.getElementById("map"), {
    center: my_location,
    zoom: 13,
  });

  // Display an InfoWindow at the map center : Example at: https://developers.google.com/maps/documentation/javascript/geolocation
  infoWindow.setPosition(my_location);
  infoWindow.setContent(
    browserHasGeolocation
      ? "Geolocation permissions denied. Using default location."
      : "Error: Your browser doesn't support geolocation."
  );
  infoWindow.open(map);
  currentInfoWindow = infoWindow;

  // Call Places Nearby Search on the default location
  getNearbyPlaces(my_location);
}

/* Perform a Places Nearby Search Request: Link at 
    https://developers.google.com/maps/documentation/javascript/examples/place-search: Requires the Places library
    */

function getNearbyPlaces(position) {
  let request = {
    location: position,
    rankBy: google.maps.places.RankBy.DISTANCE,
    keyword: "hotel",
  };

  service = new google.maps.places.PlacesService(map);
  service.nearbySearch(request, nearbyCallback);
}

// Handle the results of the Nearby Search
function nearbyCallback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    createMarkers(results);
  }
}

// Set markers at the location of each place result
function createMarkers(places) {
  places.forEach((place) => {
    let marker = new google.maps.Marker({
      position: place.geometry.location,
      map: map,
      title: place.name,
    });

    // Add click listener to each marker: Link at: https://developers.google.com/maps/documentation/javascript/events
    google.maps.event.addListener(marker, "click", () => {
      let request = {
        placeId: place.place_id,
        fields: [
          "name",
          "formatted_address",
          "geometry",
          "rating",
          "website",
          "photos",
        ],
      };

      /* Only fetch the details of a place when the user clicks on a marker.
           Examples at: https://developers.google.com/maps/documentation/javascript/places */
      service.getDetails(request, (placeResult, status) => {
        showDetails(placeResult, marker, status);
      });
    });

    // Adjust the map bounds to include the location of this marker
    bounds.extend(place.geometry.location);
  });
  /*  adjust the bounds of the map to show all the markers within the visible area. */
  map.fitBounds(bounds);
}

// Builds an InfoWindow to display details above the marker
function showDetails(placeResult, marker, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    let placeInfowindow = new google.maps.InfoWindow();
    let rating = "None";
    if (placeResult.rating) rating = placeResult.rating;
    placeInfowindow.setContent(
      "<div><strong>" +
        placeResult.name +
        "</strong><br>" +
        "Rating: " +
        rating +
        "</div>"
    );
    placeInfowindow.open(marker.map, marker);
    currentInfoWindow.close();
    currentInfoWindow = placeInfowindow;
    showPanel(placeResult);
  } else {
    console.log("showDetails failed: " + status);
  }
}

// Displays place details in a sidebar
function showPanel(placeResult) {
  // If infoPane is already open, close it
  if (infoPane.classList.contains("open")) {
    infoPane.classList.remove("open");
  }

  // Clear the previous details
  while (infoPane.lastChild) {
    infoPane.removeChild(infoPane.lastChild);
  }

  // Add the primary photo, if found: Examples at https://developers.google.com/places/web-service/photos
  if (placeResult.photos) {
    let firstPhoto = placeResult.photos[0];
    let photo = document.createElement("img");
    photo.classList.add("hero");
    photo.src = firstPhoto.getUrl();
    infoPane.appendChild(photo);
  }

  // Add place details with text formatting
  let name = document.createElement("h1");
  name.classList.add("place");
  name.textContent = placeResult.name;
  infoPane.appendChild(name);
  if (placeResult.rating) {
    let rating = document.createElement("p");
    rating.classList.add("details");
    rating.textContent = `Rating: ${placeResult.rating} \u272e`;
    infoPane.appendChild(rating);
  }

  let address = document.createElement("p");
  address.classList.add("details");
  address.textContent = placeResult.formatted_address;
  infoPane.appendChild(address);
  if (placeResult.website) {
    let websitePara = document.createElement("p");
    let websiteLink = document.createElement("a");
    let websiteUrl = document.createTextNode(placeResult.website);
    websiteLink.appendChild(websiteUrl);
    websiteLink.title = placeResult.website;
    websiteLink.href = placeResult.website;
    websitePara.appendChild(websiteLink);
    infoPane.appendChild(websitePara);
  }

  // Open the infoPane
  infoPane.classList.add("open");
}
