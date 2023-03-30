// created variables for my API key, city, latitude and longitude, so when the user search a specific city or state, the API will return the weather data for that city
var APIkey = "44c0ceeaad2f13d35c6b6f46923f9c42"
var city = document.querySelector("#city").value;
var weatherdata = document.querySelector("#weatherdata");
var cityname = document.querySelector("#cityname");
var date = document.querySelector("#date");
var weathericon = document.querySelector("#weathericon");
var temperature = document.querySelector("#temperature");
var humidity = document.querySelector("#humidity");
var windspeed = document.querySelector("#windspeed");
var lat, lon;

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
        // call the getWeather function and pass in the lat and lon values
        getWeather("https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=" + APIkey);
    });

}

// function to get weather using fetch for the queryURL, using the lat and lon from the getCity function
function getWeather(queryURL) {
    fetch(queryURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
        // loop through the data list and display the weather data for the current day and the next 5 days, displaying the city name, date, weather icon, temperature, humidity, and wind speed

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

