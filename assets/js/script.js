// created variables for my API key, city, state, and queryURL, so when the user search a specific city or state, the API will return the weather data for that city
var APIkey = "44c0ceeaad2f13d35c6b6f46923f9c42"
var city; 
var state;
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "," + state + "&appid=" + APIkey;
var getweatherbtn = document.querySelector("#getweatherbtn");

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

// event listener for search button
getweatherbtn.addEventListener("click", function(event) {
    event.preventDefault();
    city = document.querySelector("#city").value;
    state = document.querySelector("#state").value;
    queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "," + state + "&appid=" + APIkey;
    getWeather();
}
);
