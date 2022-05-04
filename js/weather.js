const APIKEY = "08d4c8220b79216250b5d6c7c6b49e15"

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}&units=metric`

    fetch(url)
        .then((response) =>response.json())
        .then((data) =>{
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            city.innerText = data.name;
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });

}

function onGeoError() {
    alert("Can't find Geo")
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);
