// created variables for my API key, city, state, and queryURL, so when the user search a specific city or state, the API will return the weather data for that city
var APIkey = "21ebfd56b0f5a31d68ebf78b983534f6"
var city; 
var state;
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "," + state + "&appid=" + APIkey;

// function to get weather using fetch 
function getWeather() {
    fetch(queryURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
    });
}