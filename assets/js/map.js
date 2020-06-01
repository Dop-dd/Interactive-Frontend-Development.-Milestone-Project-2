
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


}

    