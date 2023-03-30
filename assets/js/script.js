// created variables for my API key, city, latitude and longitude, so when the user search a specific city or state, the API will return the weather data for that city
var APIkey = "44c0ceeaad2f13d35c6b6f46923f9c42"
var city = document.querySelector("#city").value;
var lat, lon;
var citynameEl = document.querySelector("#cityname");
var dateEl = document.querySelector("#date");
var weathericonEl = document.querySelector("#weathericon");
var temperatureEl = document.querySelector("#temperature");
var humidityEl = document.querySelector("#humidity");
var windspeedEl = document.querySelector("#windspeed");

// need my queryURL to be a variable with lat and lon, so when the user search a specific city or state, the API will return the weather data for that city
var cityURL = "https://api.openweathermap.org/geo/1.0/direct?q=" + city + "&limit=5&appid=" + APIkey;
var queryURL = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=" + APIkey;
var getweatherbtn = document.querySelector("#getweatherbtn");

// function to get weather using fetch for the cityURl but then covert the data to the queryURL
function getCity(cityURL) {
    fetch(cityURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
        lat = data[0].lat;
        lon = data[0].lon;
        console.log(lat);
        console.log(lon);
        // how do I get the queryURL to be a variable with lat and lon, so when the user search a specific city or state, the API will return the weather data for that city
        getWeather(queryURL);
    });
}


function getWeather(queryURL) {
    fetch(queryURL)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        var cityname = data.city.name;
        var date = data.list[0].dt_txt;
        var weathericon = data.list[0].weather[0].icon;
        var temperature = data.list[0].main.temp;
        var humidity = data.list[0].main.humidity;
        var windspeed = data.list[0].wind.speed;
        //console.log(data);
        console.log(cityname);
        console.log(date);
        console.log(weathericon);
        console.log(temperature);
        console.log(humidity);
        console.log(windspeed);
    });
}
    

// event listener for search button
getweatherbtn.addEventListener("click", function(event) {
    event.preventDefault();
    var city = document.querySelector("#city").value;
    var  cityURL = "https://api.openweathermap.org/geo/1.0/direct?q=" + city + "&limit=1&appid=" + APIkey;
    console.log(city);
    getCity(cityURL);
});

