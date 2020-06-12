/*-----------Location Details Toggle-------------*/

$(document).ready(function () {
  $(".hero-button").click(function () {
    $(".covid-update").toggle("slow");
  });
});

/*-----------Location Details End-------------*/

/*-----------Covid-19 Info-------------*/

link = "https://coronavirus-tracker-api.herokuapp.com/v2/locations/";

var request = new XMLHttpRequest();
request.open("GET", link, true);
request.onload = function () {
  var obj = JSON.parse(this.response);

  document.getElementById("latest-all").innerHTML = obj.latest.confirmed;
  document.getElementById("deaths-all").innerHTML = obj.latest.deaths;
  document.getElementById("idd").innerHTML = obj.locations[23].id;
  document.getElementById("country-name").innerHTML = obj.locations[23].country;
  document.getElementById("country_population").innerHTML =
    obj.locations[23].country_population;

  document.getElementById("last_updated").innerHTML =
    obj.locations[23].last_updated;
  document.getElementById("confirmed").innerHTML =
    obj.locations[23].latest.confirmed;
  document.getElementById("deaths").innerHTML = obj.locations[23].latest.deaths;

  if (request.status >= 200 && request.status < 400) {
    var latest_all = obj.latest.confirmed;
    var deaths_all = obj.latest.deaths;
    var country = obj.locations[23].country;
    var country_population = obj.locations[23].country_population;

    var idd = obj.locations[23].id;
    var last_updated = obj.locations[23].last_updated;
    var confirmed = obj.locations[23].latest.confirmed;
    var deaths = obj.locations[23].latest.deaths;
  } else {
    console.log("The city doesn't exist! Kindly check");
  }
};
request.send();

/*-----------Covid-19 Info End-------------*/
