// GLOBAL VARIABLES
var APIkey = "b13426899baf1ab4f2b674c71d680b79";

// grab input from input element on click
document.getElementById("searchButton").onclick = function() {
var enteredCity = document.getElementById("cityInput").value
if (enteredCity){
    // clearing input field
    document.getElementById("cityInput").value = ""
    searchCity(enteredCity)
    }
}

// make search cities appear underneath search bar as a list from local storage
function makeList(){
   var savedCities = JSON.parse(localStorage.getItem("cities")) || []
    for (let i=0; i < savedCities.length; i++) {
        createList(savedCities[i])
    }
}
makeList()

// search city function
async function searchCity(city){
    var cities = JSON.parse(localStorage.getItem("cities")) || []
    if (cities.indexOf(city) === -1 ) {
        cities.push(city)
        localStorage.setItem("cities", JSON.stringify(cities))
        createList(city)
    }
// WEATHER URL 
var urlWeather = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}&units=metric`;
 

 // fetch info based on location entered
    fetch(urlWeather).then(response => response.json())
    .then(json =>  {console.log (json) 
// inserting the weather stuff into HTML
    document.getElementById("cityTitle").innerHTML = json.name
    document.getElementById("temperature").innerHTML = json.main.temp
    document.getElementById("humidity").innerHTML = json.main.humidity
    document.getElementById("wind").innerHTML = json.wind.speed
    document.getElementById("weatherIcon").src = "http://openweathermap.org/img/w/" + json.weather[0].icon + ".png"
// lat & lon to get the UV index 
    var lat = json.coord.lat
    var lon = json.coord.lon
    forecast(city)
    uv(lat, lon)
    })
    .catch(err => console.log('Request failed', err))
}

// function to insert 5 day forecast into the HTML
function forecast(city){
    // 5 day forecast fetch
    var forecastURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + APIkey + "&units=metric";
    fetch(forecastURL).then(response => response.json())
    .then(json => {console.log (json)
        // reset html to not repeat 5 day forecast over and over again
        document.getElementById("fiveDay").innerHTML = ""
    for (let i=0; i < json.list.length; i++) {
        if (json.list[i].dt_txt.indexOf("15:00:00") !== -1 ) {
            // card with 5 day forecast
            let col = `
            <div class="card forecast">
            <div class="card-body">
              <h5 class="card-title">${new Date(
                  json.list[i].dt_txt
              ).toLocaleDateString()}</h5>
              <img src='${"http://openweathermap.org/img/w/" + json.list[i].weather[0].icon + ".png"}'/>
              <p class="card-text">${"Temperature: " +json.list[i].main.temp_max+
              " °C"}</p>
              <p class="card-text">${"Humidity: " + json.list[i].main.humidity + "%" }</p>
            </div>
          </div> ` 
          // insert
          document.getElementById("fiveDay").innerHTML += col
        }
    }
    })
}

// get UV index for daily forecast
function uv(lat, lon){
    let uvURL = "http://api.openweathermap.org/data/2.5/uvi?appid=" + APIkey + "&lat=" + lat + "&lon=" + lon;
    fetch(uvURL).then(response => response.json())
    .then(json => {console.log(json)
        document.getElementById("uvin").innerHTML = json.value
    })
}

// create list of cities searched to be added underneath search 
function createList(city) {
    var cityList = document.getElementById("searchedCities")
    var list = `<button>${city}</button>`
    cityList.innerHTML += list
}

// make the searched cities list clickable
document.getElementById("searchedCities").addEventListener("click", function(event){
    if (!event.target.classList.contains("something")) {
    searchCity(event.target.textContent)
    }
})