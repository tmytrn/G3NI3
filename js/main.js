function checkWeather(position){
  var url= "https://api.darksky.net/forecast/e1ce9ae5cc1effb2878122eeff0d7cfe/"
  url = url + position.coords.latitude + "," + position.coords.longitude

  jsonp(url, function(data){
      console.log(data);
    if ( data.currently.apparentTemperature <= 32 ){
      window.location.href = "closed.html";
      console.log("It's cold! Go home!");
    }
    else if ( data.currently.precipType == "snow" && data.currently.precipIntensity >= 0.60 && data.currently.windSpeed >= 50){
      console.log("You were buried in the tundra and died before you made it to the gallery doors.");
    }
    else {
      console.log("Come in!");
    }



/* URL CONDITIONAL
if (someCondition || someOtherCondition)
       window.location.href = "firstURLhere";
   else
       window.location.href = "alternativeURLhere";
*/

  });
}

navigator.geolocation.getCurrentPosition(checkWeather);
