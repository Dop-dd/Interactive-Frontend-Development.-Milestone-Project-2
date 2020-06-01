
var map;

function initAutocomplete() { 
    
    // create the map. Cordinates centered in Antwerp
    var antwerp_city = {lat: 52.219, lng: 4.402};
    map = new google.maps.Map(document.getElementById("map"), {        
         center:  antwerp_city,
         zoom: 17                   
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
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

    service.nearbySearch(
        {location: antwerp_city, radius: 500, type: ['hotel']},
        function(results, status, pagination) {
            if (status !== 'OK') return;

            createMarkers(results);
            moreButtons.disable = ipagination.hasNestPage;
            getNextPage = pagination.hasNestPage && function() {
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

        })


            



}

    