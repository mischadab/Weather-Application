
// $("#searchButton").on("click", function(){
//     var enteredCity = $("#cityInput").val();
//     console.log(enteredCity)
// })

// grab input from input element on click
document.getElementById("searchButton").onclick = function() {
var enteredCity = document.getElementById("cityInput").value
}



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
        result.innerHTML
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