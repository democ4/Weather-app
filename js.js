// api key cb546d76dd8db56bb7bc557b6c68224b

const temp = document.querySelector(".temp")
const city = document.querySelector(".cityName")

const feelLike = document.querySelector("#feelLike")
const cloduy = document.querySelector("#cloduy")
const humidity = document.querySelector("#humidity")
const icon = document.querySelector("#icon")
// http://openweathermap.org/img/wn/10d@2x.png

const button = document.querySelector("button")
const input = document.querySelector("input")
button.addEventListener("click",searchcity)
function searchcity (){
    let city = input.value
    input.value=""
    getWeatherInfor(city)
}

getWeatherInfor("london")
async function getWeatherInfor(input){

     let cityname = input
   
    try{

        const res= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=cb546d76dd8db56bb7bc557b6c68224b&units=metric `, {mode: 'cors'})
        const ul = await res.json();
        
        console.log(ul);
        temp.textContent = ul.main.temp +"°C"
        city.textContent  = ul.name;
        feelLike.textContent  = "feels like " + ul.main.feels_like +"°C";
        humidity.textContent  = "humidity " + ul.main.humidity +"%";
        cloduy.textContent  = ul.weather[0].description;
        
        icon.src= `http://openweathermap.org/img/wn/${ ul.weather[0].icon}@2x.png`
    }catch(err){
        console.log('fetch failed', err);

    }
        
}
//fetch("https://api.openweathermap.org/data/2.5/weather?q=London&appid=cb546d76dd8db56bb7bc557b6c68224b", {mode: 'cors'})
//api.openweathermap.org/data/2.5/weather?q=London&appid={API key}
//api.openweathermap.org/data/2.5/find?q=London&units=imperial 

/*
let cityname = "London"
fetch("https://api.openweathermap.org/data/2.5/weather?q=London&appid=cb546d76dd8db56bb7bc557b6c68224b", {mode: 'cors'})
.then(function(response) {
     const ul = response.json()
     console.log(ul)
     return ul
})
.then(function(response){
    console.log(response.main)
}
)
.then(x=>{
       
})
*/


// get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
