
var map;

function initMap() { 
    
    // create the map. Cordinates centered in Antwerp
    var antwerp_city = {lat: 51.219, lng: 4.402};
    map = new google.maps.Map(document.getElementById("map"), {        
         center:  antwerp_city,
         zoom: 13                   
    }); 

      // Create the Places service. This service requires the Places library. https://developers.google.com/maps/documentation/javascript/examples/place-search-pagination
    var service = new google.maps.places.PlacesService(map);
    var getNextPage = null;
    var moreButton = document.getElementById('more');
    moreButton.onclick = function() {
        moreButton.disable = true;
        if (getNextPage) getNextPage();
    };

    // Perform a nearby search.
    var input = document.getElementById('user-input');
    //map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

    service.nearbySearch(
        {location: antwerp_city, radius: 500, type: ['hotel']},
        function(results, status, pagination) {
            if (status !== 'OK') return;

            createMarkers(results);
            moreButton.disable = !pagination.hasNextPage;
            getNextPage = pagination.hasNextPage && function() {
                pagination.nextPage();
            };
        });

        // Adding Auto Complete Searh option. Examples at https://developers.google.com/maps/documentation/javascript/examples/places-autocomplete

        var autocomplete = new google.maps.places.Autocomplete(input);

        // Bind the map's bounds (viewport) property to the autocomplete object,        
        autocomplete.bindTo('bounds', map);

        var infowindow = new google.maps.InfoWindow();
        var marker = new google.maps.Marker({
            map: map,
            anchorPoint: new google.maps.Point(0, -29)
        });

        // Add an event listener. Example at: https://developers.google.com/maps/documentation/javascript/examples/rectangle-event

        autocomplete.addListener('place_changed', function() {
            infowindow.close();
            marker.setVisible(false);
            var place = autocomplete.getPlace();
            if (!place.geometry) {
                window.alert("No geometry data found for the specified location");
                return;
            }

            // If the place has a geometry, then present it on a map.
            if (place.geometry.viewport) {
                map.fitBounds(place.geometry.viewport);
            } else {
                map.setCenter(place.geometry.location);
                map.setZoom(17) //Because it looks good.
            }

        //Converting MarkerImage objects to type Icon. Example at https://developers.google.com/maps/documentation/javascript/markers
            
            marker.setIcon(({
                url: place.icon,
                size: new google.maps.Size(71, 71),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(17, 34),
                scaledSize: new google.maps.Size(35, 35)
            }));

            marker.setPosition(place.geometry.location);
            marker.setVisible(true);

        // getting the details of a place on the map. https://developers.google.com/maps/documentation/javascript/examples/places-autocomplete
            
        var address = '';
        if (place.address_components) {
            address = [
            (place.address_components[0] && place.address_components[0].short_name || ''),
            (place.address_components[1] && place.address_components[1].short_name || ''),
            (place.address_components[2] && place.address_components[2].short_name || '')
            ].join(' ');
         }

        // get the Name and Address o the place: https://developers.google.com/maps/documentation/javascript/examples/place-details

            infowindow.setContent('<div><strong>' + place.name + '</strong><br>' + address);
            infowindow.open(map, marker);

            infowindow.setContent('<div><strong>' + place.name + '</strong><br>' + address);
            infowindow.open(map, marker);
          
           
        /* Get each component of the address from the place details and then fill-in the corresponding id on the index.html page.
            Examples at: https://developers.google.com/maps/documentation/javascript/examples/places-autocomplete-addressform
        */
         for (var i = 0; i < place.address_components.length; i++) {
            if (place.address_components[i].types[0] == 'postal_code') {
                document.getElementById('postal_code').innerHTML = place.address_components[i].long_name;
         }
            if (place.address_components[i].types[0] == 'country') {
                document.getElementById('country').innerHTML = place.address_components[i].long_name;
        }
    }
        document.getElementById('location').innerHTML = place.formatted_address;
        document.getElementById('lat').innerHTML = place.geometry.location.lat();
        document.getElementById('lon').innerHTML = place.geometry.location.lng();
    });

 }     
    
    function createMarkers(places) {
  var bounds = new google.maps.LatLngBounds();
  var placesList = document.getElementById('places');

  for (var i = 0, place; place = places[i]; i++) {
    var image = {
      url: place.icon,
      size: new google.maps.Size(71, 71),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(17, 34),
      scaledSize: new google.maps.Size(25, 25)
    };

    var marker = new google.maps.Marker({
      map: map,
      icon: image,
      title: place.name,
      position: place.geometry.location
    });

    var li = document.createElement('li');
    li.textContent = place.name;
    placesList.appendChild(li);

    bounds.extend(place.geometry.location);
  }
  map.fitBounds(bounds);
}





    