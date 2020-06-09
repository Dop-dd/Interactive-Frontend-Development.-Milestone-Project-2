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




