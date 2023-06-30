const cityNameInput = document.querySelector(".search input")
const searchButton = document.querySelector(".search button")
const weatherIcon = document.querySelector(".weather-icon")
const weatherBlock = document.querySelector(".weather")
const errorMessage = document.querySelector(".error")
const cityName = document.querySelector(".city")
const temp = document.querySelector(".temp")
const humidity = document.querySelector(".humidity")
const wind = document.querySelector(".wind")

const apiKey = openWeatherMapKey; // Replace with your open weather map token
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    const data = await response.json();

    if(response.status == 404){
        errorMessage.style.display = "block"
        weatherBlock.style.display = "none"
    }else{
        cityName.innerHTML = data.name;
        temp.innerHTML = `${Math.round(data.main.temp)}°C`;
        humidity.innerHTML = `${data.main.humidity}%`
        wind.innerHTML = `${data.wind.speed} km/h`

        checkCloudState(data.weather[0].main)

        errorMessage.style.display = "none"
        weatherBlock.style.display = "block"
    }
}

searchButton.addEventListener("click", handleClickButton)
cityNameInput.addEventListener("keyup", handleKeyPress)

function handleClickButton(){
    checkWeather(cityNameInput.value)
}

function handleKeyPress(event){
    if (event.keyCode === 13) {
        checkWeather(cityNameInput.value)
    }
}

function checkCloudState(cloudState){
    if(cloudState == "Clouds"){
        weatherIcon.src = "./images/clouds.png"
    }
    else if(cloudState == "Clear"){
        weatherIcon.src = "./images/clear.png"
    }
    else if(cloudState == "Rain"){
        weatherIcon.src = "./images/rain.png"
    }
    else if(cloudState == "Drizzle"){
        weatherIcon.src = "./images/drizzle.png"
    }
    else if(cloudState == "Mist"){
        weatherIcon.src = "./images/mist.png"
    }
}