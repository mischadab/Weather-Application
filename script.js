// grab input from input element on click
document.getElementById("searchButton").onclick = function() {
var enteredCity = document.getElementById("cityInput").value
// clearing input field
document.getElementById("cityInput").value = ""
searchCity(enteredCity)
}

var APIkey = "b13426899baf1ab4f2b674c71d680b79";

// search city function
async function searchCity(city){
    
    var urlWeather = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}`;
    // var urlForecast = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${APIkey}`;

 // fetch info based on location entered
    fetch(urlWeather).then(response => response.json())
    .then(json =>  {console.log (json) 
    document.getElementById("cityTitle").innerHTML = json.name
    document.getElementById("temperature").innerHTML = json.main.temp
    document.getElementById("humidity").innerHTML = json.main.humidity
    document.getElementById("wind").innerHTML = json.wind.speed
    document.getElementById("weatherIcon").src = "http://openweathermap.org/img/w/" + json.weather[0].icon + ".png"
    })
    .catch(err => console.log('Request failed', err))
    // .then(function (data) {
    //     var result = document.querySelector("location");
    //     var Kelvin = `${data.main.temp}`;
    //     var celcius = Math.round(Kelvin - 273.15);
    //     var currentDate = moment().format("l");
    //     result.innerHTML 
    // })
    forecast(city)
}

function forecast(city){
    // 5 day forecast fetch
    var forecastURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + APIkey + "&units=imperial";
    fetch(forecastURL).then(response => response.json())
    .then(json => {console.log (json)
    for (let i=0; i < json.list.length; i++) {
        if (json.list[i].dt_txt.indexOf("15:00:00") !== -1 ) {
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
          document.getElementById("fiveDay").innerHTML += col
        }
    }
    })
}

// get each card for 5day forecast an id
// how to get data from json in a fetch call



// function citySearch(){
//     event.preventDefault();
//     var cityNames = document.querySelector('#enteredInfo').nodeValue
//     var storage = localStorage.setItem("info", JSON.stringify(cityNames));
// }

// function renderSearch(){
//     var cityInfo = JSON.parse(localStorage.getItem("info"));
    // document.querySelector("").textContent += 
// }