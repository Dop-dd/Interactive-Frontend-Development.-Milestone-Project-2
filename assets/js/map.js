function initMap() {
  /*--------------define City variables--------
  Example code at: https://developers.google.com/maps/documentation/javascript/custom-markers
  */

  var brussel = {
    info: `<h5 class="info-heading">SleepOver Brussels</h5>
        <p class="map-desc">Our 4 star hotel is only a two-minute<br>\
        walk from the famous Place de la Loi.</p>        
        <p class="map-image"><img src="https://images.pexels.com/photos/1579739/pexels-photo-1579739.jpeg?
        cs=srgb&dl=empty-dining-tables-and-chairs-1579739.jpg&fm=jpg"></p>
        <p class="map-text">Address: Steenstraat 40<br> Brussels, 1050. <br>
        Phone: 0800 122 233 344 <br>
        Email: info@sleepoverhotels.com <br>
        <a href="https://www.google.be/maps/@50.8100608,3.343327,14z" target="_blank">Get Directions</a></p>`,

    lat: 50.83,
    long: 4.33,
  };

  var antwerp = {
    info: `<h5 class="info-heading">SleepOver Antwerp</h5><br>\
        <p class="map-desc">This 4 star hotel is located opposite<br>\
        the Antwerp Centrale train station.</p>
        <p class="map-image"><img src="https://images.pexels.com/photos/756083/pexels-photo-756083.jpeg?
        cs=srgb&dl=photo-of-plants-near-the-glass-door-756083.jpg&fm=jpg"></p>
        <p class="map-text">Address: Hoogstraat 201<br> Antwerp, 2000.<br>\
        Phone: 0800 122 233 344 <br>
        Email: info@sleepoverhotels.com <br>
    	<a href="https://www.google.be/maps/@50.8100608,3.343327,14z" target="_blank">Get Directions</a></p>`,

    lat: 51.22,
    long: 4.42,
  };

  var brugge = {
    info: `<h5 class="info-heading">SleepOver Brugge</h5><br>\
       <p class="map-desc">Our hotel in Brugge is 5 minutes<br>\
        away from the Bell Tower. </p>
       <p class="map-image"><img src="https://images.pexels.com/photos/635041/pexels-photo-635041.jpeg?
       cs=srgb&dl=brown-coffee-table-surrounded-by-four-chairs-635041.jpg&fm=jpg"></p>
        <p class="map-text">Address: BellStraat 61<br> Brugge, 8700.<br>\
        Phone: 0800 122 233 344 <br>
        Email: info@sleepoverhotels.com <br>
    	<a href="https://www.google.be/maps/@50.8100608,3.343327,14z" target="_blank">Get Directions</a></p>`,

    lat: 51.22,
    long: 3.23,
  };

  var kortrijk = {
    info: `<h5 class="info-heading">SleepOver Kortijk</h5><br>\
       <p class="map-desc">Our guest house offers a peaceful<br>\
        andtTranquil home away from home</p>
       <p class="map-image"><img src="https://images.pexels.com/photos/584399/living-room-couch-interior-room-584399.jpeg?
       cs=srgb&dl=brown-wooden-center-table-584399.jpg&fm=jpg"></p>
        <p class="map-text">Address: Tienstraat 25<br> Kortrijk, 8500.<br>\
        Phone: 0800 122 233 344 <br>
        Email: info@sleepoverhotels.com <br>
    	<a href="https://www.google.be/maps/@50.8100608,3.343327,14z" target="_blank">Get Directions</a></p>`,

    lat: 50.83,
    long: 3.27,
  };

  var gent = {
    info: `<h5 class="info-heading">SleepOver Gent</h5><br>\
       <p class="map-desc">Deluxe guest house located in a new <br>\
        layout in the outskirts of Gent.</p>
       <p class="map-image"><img src="https://images.pexels.com/photos/1145257/pexels-photo-1145257.jpeg?
       cs=srgb&dl=white-mountain-bike-parks-near-white-concrete-poster-on-gray-1145257.jpg&fm=jpg"></p>
        <p class="map-text">Address: Nieuwestraat 95<br> Gent, 9050.<br>\
        Phone: 0800 122 233 344 <br>
        Email: info@sleepoverhotels.com <br>
    	<a href="https://www.google.be/maps/@50.8100608,3.343327,14z" target="_blank">Get Directions</a></p>`,

    lat: 51.05,
    long: 3.72,
  };

  var locations = [
    [
        brussel.info, 
        brussel.lat, 
        brussel.long,         
    ],
    [
        antwerp.info, 
        antwerp.lat, 
        antwerp.long
    ],
    [
        brugge.info, 
        brugge.lat, 
        brugge.long
    ],
    [
        kortrijk.info, 
        kortrijk.lat, 
        kortrijk.long
    ],
    [
        gent.info, 
        gent.lat, 
        gent.long
    ],
  ];

  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 9,
    center: new google.maps.LatLng(51.05, 3.72),
    mapTypeId: google.maps.MapTypeId.ROADMAP,
  });

/* InfoWindow example code at: https://developers.google.com/maps/documentation/javascript/infowindows */
  
var infowindow = new google.maps.InfoWindow({});

  var marker, i;

  for (i = 0; i < locations.length; i++) {
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(locations[i][1], locations[i][2]),
      map: map,
    });
/* Event Listener example code at: https://developers.google.com/maps/documentation/javascript/events */

    google.maps.event.addListener(
      marker,
      "click",
      (function (marker, i) {
        return function () {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);
        };
      })(marker, i)
    );
  }
}
