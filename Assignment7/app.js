const celcius = (t) => {
  return Math.round(t - 273.15) + " &#8451";
};
const weather = async () => {
  const city = document.querySelector(".city");
  const temp = document.querySelector(".temperature");
  const sky = document.querySelector(".sky");
  const minMax = document.querySelector(".minMax");

  const uri =
    url + `weather?q=${loc.value}&appid=4bb151c21009feb72d88fdb3cd7fe917`;
  const response = await fetch(uri);
  const data = await response.json();

  city.innerHTML = data.name + " " + data.sys.country;
  temp.innerHTML = celcius(data.main.temp);
  sky.innerHTML = data.weather[0].main;
  minMax.innerHTML =
    celcius(data.main.temp_min) + " / " + celcius(data.main.temp_max);
};

/*
{
  "coord": {
    "lon": 83,
    "lat": 25.3333
  },
  "weather": [
    {
      "id": 721,
      "main": "Haze",
      "description": "haze",
      "icon": "50d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 306.15,
    "feels_like": 303.96,
    "temp_min": 306.15,
    "temp_max": 306.15,
    "pressure": 1002,
    "humidity": 18
  },
  "visibility": 5000,
  "wind": {
    "speed": 6.17,
    "deg": 270
  },
  "clouds": {
    "all": 0
  },
  "dt": 1617261818,
  "sys": {
    "type": 1,
    "id": 9138,
    "country": "IN",
    "sunrise": 1617236367,
    "sunset": 1617281042
  },
  "timezone": 19800,
  "id": 1253405,
  "name": "Varanasi",
  "cod": 200
}
*/

const setDate = () => {
  const date = new Date();
  const htmlDate = document.querySelector(".date");

  const week = date.toLocaleDateString("locale", { weekday: "long" });
  const day = date.getUTCDate();
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();
  htmlDate.innerHTML = week + " " + day + " " + month + " " + year;
};

setDate();

const loc = document.querySelector(".container input");
const url = "http://api.openweathermap.org/data/2.5/";
loc.addEventListener("keypress", (e) => {
  if (e.key === "Enter") weather();
});
