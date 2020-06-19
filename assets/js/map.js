

function initMap() {

  var brussel = {
    info:
      `<h5>SleepOver Brussels</h5>
        <p>Our 4 star hotel is only a two-minute<br>\
        walk from the famous Place de la Loi.</p>        
        <p><img src="https://images.pexels.com/photos/1579739/pexels-photo-1579739.jpeg?
        cs=srgb&dl=empty-dining-tables-and-chairs-1579739.jpg&fm=jpg" width="180" height="100"></p>
        Address: Steenstraat 40<br> Brussels, 1050.
        <a href="https://www.google.be/maps/@50.8100608,3.343327,14z" target="_blank">Get Directions</a>`,

    lat: 50.830,
    long: 4.330,
  }

  var antwerp = {
    info:
      `<h5>SleepOver Antwerp</h5><br>\
       <p>This 4 star hotel is located near <br>\
       Centrale train station, metro and buses.</p>
         <p><img src="https://images.pexels.com/photos/756083/pexels-photo-756083.jpeg?
         cs=srgb&dl=photo-of-plants-near-the-glass-door-756083.jpg&fm=jpg" width="180" height="100"></p>
    	Address: Hoogstraat 201<br> Antwerp, 2000.<br>\
    	<a href="https://www.google.be/maps/@50.8100608,3.343327,14z" target="_blank">Get Directions</a>`,

    lat: 51.220,
    long: 4.420,
  }

  var brugge = {
    info:
      `<h5> SleepOver Brugge</h5><br>\
       <p>Our branch is Brugge is merely a 5 minute <br>\
       walk from the Bell Tower. Excellent view.</p>
       <p><img src="https://images.pexels.com/photos/635041/pexels-photo-635041.jpeg?
       cs=srgb&dl=brown-coffee-table-surrounded-by-four-chairs-635041.jpg&fm=jpg" width="180" height="100"></p>
    	Address: BellStraat 61<br> Brugge, 8700.<br>\
    	<a href="https://www.google.be/maps/@50.8100608,3.343327,14z" target="_blank">Get Directions</a>`,

    lat: 51.220,
    long: 3.230,
  }

  var kortrijk = {
    info:
     `<h5> SleepOver Kortijk</h5><br>\
       <p>This guest house offers comfort and privacy <br>\
        A Peaceful and Tranquil Home away from Home</p>
       <p><img src="https://images.pexels.com/photos/584399/living-room-couch-interior-room-584399.jpeg?
       cs=srgb&dl=brown-wooden-center-table-584399.jpg&fm=jpg" width="180" height="100"></p>
    	Address: Tienstraat 25<br> Kortrijk, 8500.<br>\
    	<a href="https://www.google.be/maps/@50.8100608,3.343327,14z" target="_blank">Get Directions</a>`,

    lat: 50.830,
    long: 3.270,
  }

  var gent = {
    info:
      nfo:
     `<h5> SleepOver Gent</h5><br>\
       <p>This deluxe guest house is located in a new <br>\
        layout in the outskirts of gent.</p>
       <p><img src="https://images.pexels.com/photos/1145257/pexels-photo-1145257.jpeg?
       cs=srgb&dl=white-mountain-bike-parks-near-white-concrete-poster-on-gray-1145257.jpg&fm=jpg" width="180" height="140"></p>
    	Address: Nieuwestraat 95<br> Gent, 9050.<br>\
    	<a href="https://www.google.be/maps/@50.8100608,3.343327,14z" target="_blank">Get Directions</a>`,

    lat: 51.050, 
    long: 3.720,
  }

  var locations = [
    [brussel.info, brussel.lat, brussel.long, brussel.img],
    [antwerp.info, antwerp.lat, antwerp.long],
    [brugge.info, brugge.lat, brugge.long],
    [kortrijk.info, kortrijk.lat, kortrijk.long],
    [gent.info, gent.lat, gent.long],
  ]

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: new google.maps.LatLng(51.050, 3.720),
    mapTypeId: google.maps.MapTypeId.ROADMAP,
  })

  var infowindow = new google.maps.InfoWindow({})

  var marker, i

  for (i = 0; i < locations.length; i++) {
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(locations[i][1], locations[i][2]),
      map: map,
    })

    google.maps.event.addListener(
      marker,
      'click',
      (function (marker, i) {
        return function () {
          infowindow.setContent(locations[i][0])
          infowindow.open(map, marker)
        }
      })(marker, i)
    )
  }
}




















