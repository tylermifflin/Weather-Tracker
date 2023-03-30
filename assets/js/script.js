// created variables for my API key, city, latitude and longitude, so when the user search a specific city or state, the API will return the weather data for that city
var APIkey = "44c0ceeaad2f13d35c6b6f46923f9c42"
var city = document.querySelector("#city").value;
var lat, lon;
var weatherEl = document.getElementById("weather");

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
        getWeather("https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=" + APIkey)
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
        date = date.split(" ");
        date = date[0];
        var weathericon = data.list[0].weather[0].icon;
        var temperature = data.list[0].main.temp;
        temperature = (temperature - 273.15) * 1.8 + 32;
        temperature = Math.round(temperature);
        var humidity = data.list[0].main.humidity;
        var windspeed = data.list[0].wind.speed;
        windspeed = Math.round(windspeed);
        //console.log(data);
        console.log(cityname);
        console.log(date);
        console.log(weathericon);
        console.log(temperature);
        console.log(humidity);
        console.log(windspeed);

        var searchedcity = document.createElement("h2");
        searchedcity.textContent = cityname + " " + date;
        weatherEl.appendChild(searchedcity);
        
        var weathericonEl = document.createElement("img");
        weathericonEl.setAttribute("src", "http://openweathermap.org/img/w/" + weathericon + ".png");
        weathericonEl.setAttribute("style", "width: 100px; height: 100px;")
        weatherEl.appendChild(weathericonEl);

        var temperatureEl = document.createElement("p");
        temperatureEl.textContent = "Temperature: " + temperature + "°F";
        weatherEl.appendChild(temperatureEl);

        var humidityEl = document.createElement("p");
        humidityEl.textContent = "Humidity: " + humidity + "%";
        weatherEl.appendChild(humidityEl);

        var windspeedEl = document.createElement("p");
        windspeedEl.textContent = "Wind Speed: " + windspeed + " MPH";
        weatherEl.appendChild(windspeedEl);

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

