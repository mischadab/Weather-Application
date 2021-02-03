// take search button into variable (API KEY)
// function ( input )



function citySearch(){
    event.preventDefault();
    var cityNames = document.querySelector('#enteredInfo').nodeValue
    var storage = localStorage.setItem("info", JSON.stringify(cityNames));
}

function renderSearch(){
    var cityInfo = JSON.parse(localStorage.getItem("info"));
    document.querySelector("").textContent += 
}