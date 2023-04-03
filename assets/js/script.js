// created variables for my API key, city, latitude and longitude, so when the user search a specific city or state, the API will return the weather data for that city
var APIkey = "44c0ceeaad2f13d35c6b6f46923f9c42"
var city = document.querySelector("#city").value;
var lat, lon;
var weatherEl = document.getElementById("weather");
var fiveDayforecastEl = document.getElementById("fivedayforecast");

// need my queryURL to be a variable with lat and lon, so when the user search a specific city or state, the API will return the weather data for that city
var cityURL = "https://api.openweathermap.org/geo/1.0/direct?q=" + city + "&limit=5&appid=" + APIkey;
var queryURL = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=" + APIkey;
var getweatherbtn = document.querySelector("#getweatherbtn");

// function to get lat and lon for city using fetch for the cityURl but then covert the data to the queryURL to grab weather forecast data
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
        // used my lat and lon variables to grab the data for lat and lon, so when the user search a specific city or state, the API will return the weather data for that city
        getWeather("https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=" + APIkey)
    });
}

// function to get weather forecast data using fetch for the queryURL
function getWeather(queryURL) {
    fetch(queryURL)
      .then(function (response) {
        return response.json();
      })
      // created variables for city name, date, weather icon, temperature, humidity, and wind speed so that i can display the data on the page
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
        //console logged the data to make sure it was working
        console.log(cityname);
        console.log(date);
        console.log(weathericon);
        console.log(temperature);
        console.log(humidity);
        console.log(windspeed);
        // created elements to display the data on the page for the daily forecast
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
        // created variables for, date, weather icon, temperature, humidity, and wind speed for the 5 day forecast
        var date1 = data.list[7].dt_txt;
        date1 = date1.split(" ");
        date1 = date1[0];
        var weathericon1 = data.list[7].weather[0].icon;
        var temperature1 = data.list[7].main.temp;
        temperature1 = (temperature1 - 273.15) * 1.8 + 32;
        temperature1 = Math.round(temperature1);
        var humidity1 = data.list[7].main.humidity;
        var windspeed1 = data.list[7].wind.speed;
        windspeed1 = Math.round(windspeed1);
        // created elements to display the data on the page for the 5 day forecast
        var date1El = document.createElement("h3");
        date1El.textContent = date1;
        fiveDayforecastEl.appendChild(date1El);

        var weathericon1El = document.createElement("img");
        weathericon1El.setAttribute("src", "http://openweathermap.org/img/w/" + weathericon1 + ".png");
        weathericon1El.setAttribute("style", "width: 100px; height: 100px;")
        fiveDayforecastEl.appendChild(weathericon1El);

        var temperature1El = document.createElement("p");
        temperature1El.textContent = "Temperature: " + temperature1 + "°F";
        fiveDayforecastEl.appendChild(temperature1El);

        var humidity1El = document.createElement("p");
        humidity1El.textContent = "Humidity: " + humidity1 + "%";
        fiveDayforecastEl.appendChild(humidity1El);

        var windspeed1El = document.createElement("p");
        windspeed1El.textContent = "Wind Speed: " + windspeed1 + " MPH";
        fiveDayforecastEl.appendChild(windspeed1El);
        
        
        
        


        




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

