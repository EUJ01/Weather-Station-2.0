function getCountry() {
    var country = document.getElementById("citySearch").value;
    document.getElementById("citySearch").value = '';
    document.getElementById("weatherbox").textContent = '';

    url = `https://restcountries.com/v3.1/name/${country}`;

    fetch(url)
        .then(res => res.json())
        .then(data => displayCountry(data));
    // .then(data => console.log(data));
}

var lat = 0;
var long = 0;

function displayCountry(data) {

    document.getElementById("container").value = "";
    var container = document.getElementById("container");

    container.innerHTML = `<img src = "${data[0].flags.png}">
                        <h2>Name: ${data[0].name.common}</h2>
                        <h2>Capital: ${data[0].capital}</h2>
                        <h2>Population: ${data[0].population}</h2>
                        <h2>Region: ${data[0].subregion}</h2>`;

    lat = data[0].latlng[0];
    long = data[0].latlng[1];

    // console.log(lat, long);
}

function getWeather() {
    var url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=707f887ecd5251999113de968cac62e8&units=metric`;

    fetch(url)
        .then(res => res.json())
        // .then(data => console.log(data));
        .then(data => displayWeather(data));
}

function displayWeather(data) {

    document.getElementById("weatherbox").value = '';
    var weatherbox = document.getElementById("weatherbox");
    var icon = `${data.weather[0].icon}`;

    weatherbox.innerHTML = `<img src = "http://openweathermap.org/img/w/${icon}.png">
                        <h3>Weather: ${data.weather[0].description}</h3>
                        <h3>Temp: ${data.main.temp} °C</h3>
                        <h3>Feels Like: ${data.main.feels_like} °C</h3>
                        <h3>Humidity: ${data.main.humidity}%</h3>
                        <h3>Wind Speed: ${data.wind.speed} m/s</h3>`;
}