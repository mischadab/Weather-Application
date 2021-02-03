// search city function
async function searchCity(city){
    var APIkey = "b13426899baf1ab4f2b674c71d680b79";
    var urlWeather = `api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}`;
    var urlForecast = `https://api.openweathermap.org/data/2.5/forecast?q=${cityVar}&appid=${APIkey}`;

 // fetch info based on location entered
    await fetch(urlWeather).then(function (response){
        return response.json();
    })
    .then(function (data) {
        var result = document.querySelector("location");
        var Kelvin = `${data.main.temp}`;
        var celcius = Math.round(Kelvin - 273.15);
        var currentDate = moment().format("l");
        result.innerHTML = `
        <div class="card" style="width: 100%;">
        <h3 class="card-title">${
          data.name
        } (${currentDate}) ${`<img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"/>`}</h3>
            <ul class="cardUl">
                <li>Temperature: ${celsius} °C</li>
                <br>
                <li>Humidity: ${data.main.humidity}</li>
                <br>
                <li>Wind speed: ${data.wind.speed} MPH</li>
            </ul>
            </div>
          </div>`
    })
}












// function citySearch(){
//     event.preventDefault();
//     var cityNames = document.querySelector('#enteredInfo').nodeValue
//     var storage = localStorage.setItem("info", JSON.stringify(cityNames));
// }

// function renderSearch(){
//     var cityInfo = JSON.parse(localStorage.getItem("info"));
    // document.querySelector("").textContent += 
// }