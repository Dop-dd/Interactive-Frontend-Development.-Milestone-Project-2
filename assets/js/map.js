
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

        


}

    