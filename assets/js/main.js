


/*link = "http://api.openweathermap.org/data/2.5/weather?q=Kortrijk&APPID=a94db86edd8f41368aaa7bb614031d6b&units=metric";

var request = new XMLHttpRequest();
request.open('GET',link,true);
request.onload = function(){
 var obj = JSON.parse(this.response);

 
 document.getElementById('weather').innerHTML = obj.weather[0].description;
 document.getElementById('alocation').innerHTML = obj.name;
 document.getElementById('temp').innerHTML = obj.main.temp ;
 document.getElementById('humidity').innerHTML = obj.main.humidity;
 document.getElementById('pressure').innerHTML = obj.main.pressure;
 document.getElementById('feels_like').innerHTML = obj.main.feels_like;
  document.getElementById('wind').innerHTML = obj.wind.speed;
 document.getElementById('icon').src = "http://openweathermap.org/img/w/" + obj.weather[0].icon + ".png";

 if (request.status >= 200 && request.status < 400) {
 var temp = obj.main.temp;
 var humidity = obj.main.humidity;
 var pressure = obj.main.pressure;
 var feels_like = obj.main.feels_like;
 var wind = obj.wind.speed;
 }
 else{
  console.log("The city doesn't exist! Kindly check");
 }
}
request.send();

 */

// 444444444444

// 444444444444444

// 4444444444444


