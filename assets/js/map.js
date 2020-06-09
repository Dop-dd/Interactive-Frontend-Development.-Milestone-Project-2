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


    

