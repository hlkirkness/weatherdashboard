function initPage(){
    const APIKey = "8726f60f15f35e166930b6a44a0b0406";
    const searchName = document.getElementById("search-name");
    const searchCity = document.getElementById("search-button");
    const clearCity = document.getElementById("clear-history");
    const cityNameEl = document.getElementById("city-name");
    const currentTempEl = document.getElementById("temperature");
    const currentHumidityEl = document.getElementById("humidity");
    const currentWindEl = document.getElementById("wind-speed");
    const currentUVEl = document.getElementById("UV-index");
    const todaysWeather = document.getElementById("todays-weather")
    let searchHistory = JSON.parse(localStorage.getItem("search")) || [];

    function todaysForecast(cityName) {
        let queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + APIKey;
        fetch(queryURL)
            .then(function (response){
                let lat = response.data.coord.lat;
                let lon = response.data.coord.lon;
                let UVURL = "https://api.openweathermap.org/data/2.5/uvi/forecast?lat=" + lat + "&lon=" + lon + "&appid=" + APIKey + "&cnt=1";
                fetch(UVURL)
                let cityID = response.data.id;
                let forecastURL = "https://api.openweathermap.org/data/2.5/forecast?id=" + cityID + "&appid=" + APIKey;
                fetch(forecastURL)
            })
    }
}

initPage();