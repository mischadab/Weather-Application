// grab input from input element on click
document.getElementById("searchButton").onclick = function() {
var enteredCity = document.getElementById("cityInput").value
// clearing input field
document.getElementById("cityInput").value = ""
searchCity(enteredCity)
}

// search city function
async function searchCity(city){
    
    var APIkey = "b13426899baf1ab4f2b674c71d680b79";
    var urlWeather = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}`;
    // var urlForecast = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${APIkey}`;

 // fetch info based on location entered
    fetch(urlWeather).then(response => response.json())
    .then(json = console.log (json.name))
    .catch(err => console.log('Request failed', err));
    // .then(function (data) {
    //     var result = document.querySelector("location");
    //     var Kelvin = `${data.main.temp}`;
    //     var celcius = Math.round(Kelvin - 273.15);
    //     var currentDate = moment().format("l");
    //     result.innerHTML 
    // })
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