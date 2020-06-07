// cdefine the neccesary variables

let antwerp_city;
let map;
let bounds;
let infoWindow;
let currentInfoWindow;
let service;
let infoPane;

function initMap() { 
    
    // create the map. Cordinates centered in Antwerp
    var antwerp_city = {lat: 51.219, lng: 4.402};
    map = new google.maps.Map(document.getElementById("map"), {        
         center:  antwerp_city,
         zoom: 13                   
    }); 


    // initialize the varaibles
    bounds = new google.maps.LatLngBounda();
    infoWindow = new google.maps.infoWindow;
    currentInfoWindow = infoWindow;

    // Geolocation
    if ( navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            antwerp_city = {
                lat = position.coords.latitude;
                lng = position.coords.longitude
            };
            map = new google.maps.Map(document.getElementById("map"), {        
                center:  antwerp_city,
                zoom: 13                   
        }); 
        bounds.extend(pos);

        infoWindow.setPosition(antwerp_city);
        infoWindow.setContent('Location found');
        infoWindow.open(map);
        map.setCenter(antwerp_city);

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
    // Set default location to Antwerp, Belgium
    antwerp_city = {lat: 51.219, lng: 4.402};
    map = new google.maps.Map(document.getElementById('map'), {
    center: antwerp_city,
    zoom: 13
    });

    // Display an InfoWindow at the map center
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
    'Geolocation permissions denied. Using default location.' :
    'Error: Your browser doesn\'t support geolocation.');
    infoWindow.open(map);
    currentInfoWindow = infoWindow;

}




