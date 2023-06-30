const apiKey = "a3b18b8b7b8abccf925940537737c2f5";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=warsaw";

async function checkWeather(){
    const response = await fetch(apiUrl + `&appid=${apiKey}`);
    const data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp;
    document.querySelector(".humidity").innerHTML = `${data.main.humidity}%`
    document.querySelector(".wind").innerHTML = `${data.wind.speed} km/h`
    console.log(data)
}

checkWeather();