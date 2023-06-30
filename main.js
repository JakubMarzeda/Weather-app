const apiKey = "a3b18b8b7b8abccf925940537737c2f5";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const cityNameInput = document.querySelector(".search input")
const searchButton = document.querySelector(".search button")
const weatherIcon = document.querySelector(".weather-icon")
const weatherBlock = document.querySelector(".weather")
const errorMessage = document.querySelector(".error")

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    const data = await response.json();

    if(response.status == 404){
        errorMessage.style.display = "block"
        weatherBlock.style.display = "none"
    }else{
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = `${Math.round(data.main.temp)}°C`;
        document.querySelector(".humidity").innerHTML = `${data.main.humidity}%`
        document.querySelector(".wind").innerHTML = `${data.wind.speed} km/h`

        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "./images/clouds.png"
        }
        else if(data.weather[0].main == "Clear"){
            weatherIcon.src = "./images/clear.png"
        }
        else if(data.weather[0].main == "Rain"){
            weatherIcon.src = "./images/rain.png"
        }
        else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "./images/drizzle.png"
        }
        else if(data.weather[0].main == "Mist"){
            weatherIcon.src = "./images/mist.png"
        }

        errorMessage.style.display = "none"
        weatherBlock.style.display = "block"
        console.log(data)
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