/*-----------Location Details Toggle-------------*/

$(document).ready(function(){
  $(".hero-button").click(function(){
    $(".full-address").toggle("slow");   
    });   
   });
   
/*-----------Location Details End-------------*/


/*-----------Covid-19 Info-------------*/

link = "https://coronavirus-tracker-api.herokuapp.com/v2/locations/"

var request = new XMLHttpRequest();
request.open('GET',link,true);
request.onload = function(){
 var obj = JSON.parse(this.response);


 document.getElementById('latest-all').innerHTML = obj.latest.confirmed;
 document.getElementById('deaths-all').innerHTML = obj.latest.deaths;
 document.getElementById('idd').innerHTML = obj.locations[23].id;
 document.getElementById('country-name').innerHTML = obj.locations[23].country; 
 document.getElementById('country_population').innerHTML = obj.locations[23].country_population;
 

 document.getElementById('last_updated').innerHTML = obj.locations[23].last_updated;
 document.getElementById('confirmed').innerHTML = obj.locations[23].latest.confirmed;
 document.getElementById('deaths').innerHTML = obj.locations[23].latest.deaths;


 if (request.status >= 200 && request.status < 400) {
    console.log(data);

var latest_all = obj.latest.confirmed;
var deaths_all = obj.latest.deaths;
var country = obj.locations[23].country; 
 var country_population = obj.locations[23].country_population;
 

var idd =obj.locations[23].id;
 var last_updated = obj.locations[23].last_updated;
 var confirmed = obj.locations[23].latest.confirmed;
 var deaths = obj.locations[23].latest.deaths;
  
}
 else{
  console.log("The city doesn't exist! Kindly check");
 }
}
request.send();

/*-----------Covid-19 Info End-------------*/


/*-----------Weather API-------------*/

link = "http://api.weatherapi.com/v1/current.json?key=%20ca056fcd55444d88b7065838200606&q=Antwerp/"

var request = new XMLHttpRequest();
request.open('GET',link,true);
request.onload = function(){
 var obj = JSON.parse(this.response);

 
 document.getElementById('name').innerHTML = obj.location.name;
 document.getElementById('countryName').innerHTML = obj.location.country; 
 document.getElementById('local-time').innerHTML = obj.location.localtime;
 
document.getElementById('text').innerHTML = obj.current.condition.text;
 document.getElementById('temp').innerHTML = obj.current.temp_c;
 document.getElementById('pressure').innerHTML = obj.current.pressure_mb;
 document.getElementById('humidity').innerHTML = obj.current.humidity;
 document.getElementById('wind').innerHTML = obj.current.wind_kph;

 document.getElementById('visibility').innerHTML = obj.current.vis_km;
 
 document.getElementById('code').innerHTML = obj.current.condition.code;
  
 
 document.getElementById('feelsLike').innerHTML = obj.current.condition.feelslike_c;

 document.getElementById('icon').src = 	"//cdn.weatherapi.com/weather/64x64/day/113.png/"
 	+ obj.current.condition.icon + ".png";


 if (request.status >= 200 && request.status < 400) {

var name = obj.location.name;
var country = obj.location.country; 
 var time = obj.location.localtime;

var text = obj.current.condition.text;
 var temp_C = obj.current.temp_c;
 var pressure = obj.current.pressure_mb;
 var humidity = obj.current.humidity;
  var wind = obj.current.wind_kph;

  var visibility = obj.current.vis_km;

 var code = obj.current.condition.code; 

 var feels_like = obj.data.current_condition[0].FeelsLikeC;

 }
 else{
  console.log("The city doesn't exist! Kindly check");
 }
}
request.send();