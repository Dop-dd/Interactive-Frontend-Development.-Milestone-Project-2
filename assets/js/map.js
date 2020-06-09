    /*--------Create variables--------*/
    
    let my_location;
    let map;
    let bounds;
    let infoWindow;
    let currentInfoWindow;
    let service;
    let infoPane;

    function initMap() {      
      // Initialize variables
      bounds = new google.maps.LatLngBounds();
      infoWindow = new google.maps.InfoWindow;
      currentInfoWindow = infoWindow;

      // Add a sidebar with panel as id 
      infoPane = document.getElementById('panel');

    /* Try HTML Geolocation. 
    Source code at: https://developers.google.com/maps/documentation/javascript/examples/map-geolocation
    */
   if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
          my_location = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          map = new google.maps.Map(document.getElementById('map'), {
            center: my_location,
            zoom: 15
          });
          bounds.extend(my_location);

          infoWindow.setPosition(my_location);
          infoWindow.setContent('Location found.');
          infoWindow.open(map);
          map.setCenter(my_location);

          // Call Places Nearby Search on user's location
          getNearbyPlaces(my_location);
        }, () => {
          // Browser supports geolocation, but user has denied permission
          handleLocationError(true, infoWindow);
        });
      } else {
        // Browser doesn't support geolocation
        handleLocationError(false, infoWindow);
      } 

    }

    // Handle a geolocation error
    function handleLocationError(browserHasGeolocation, infoWindow) {
      // Set my default location to ntwerp, Belgium
      my_location = {lat: 51.219, lng: 4.402};
      map = new google.maps.Map(document.getElementById('map'), {
        center: my_location,
        zoom: 13
      });

      // Display an InfoWindow at the map center : Example at: https://developers.google.com/maps/documentation/javascript/geolocation
      infoWindow.setPosition(my_location);
      infoWindow.setContent(browserHasGeolocation ?
        'Geolocation permissions denied. Using default location.' :
        'Error: Your browser doesn\'t support geolocation.');
      infoWindow.open(map);
      currentInfoWindow = infoWindow;

      // Call Places Nearby Search on the default location
      getNearbyPlaces(pos);
    }

    /* Perform a Places Nearby Search Request: Link at 
    https://developers.google.com/maps/documentation/javascript/examples/place-search: Requires the Places library
    */

    function getNearbyPlaces(position) {
      let request = {
        location: position,
        rankBy: google.maps.places.RankBy.DISTANCE,
        keyword: 'hotel'
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
      places.forEach(place => {
        let marker = new google.maps.Marker({
          position: place.geometry.location,
          map: map,
          title: place.name
        });

        // Add click listener to each marker: Link at: https://developers.google.com/maps/documentation/javascript/events
        google.maps.event.addListener(marker, 'click', () => {
          let request = {
            placeId: place.place_id,
            fields: ['name', 'formatted_address', 'geometry', 'rating',
              'website', 'photos']
          };

          /* Only fetch the details of a place when the user clicks on a marker.
           Examples at: https://developers.google.com/maps/documentation/javascript/places */
          service.getDetails(request, (placeResult, status) => {
            showDetails(placeResult, marker, status)
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
        placeInfowindow.setContent('<div><strong>' + placeResult.name +
          '</strong><br>' + 'Rating: ' + rating + '</div>');
        placeInfowindow.open(marker.map, marker);
        currentInfoWindow.close();
        currentInfoWindow = placeInfowindow;
        showPanel(placeResult);
      } else {
        console.log('showDetails failed: ' + status);
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






