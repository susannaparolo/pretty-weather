const lat = '51.50'
const lon = '0.03'
const API_KEY = '7fc8f82139815a90b9c222f74c2eca68'

async function getWeather() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
    const movies = await response.json();
    console.log(movies);
  };
// 60 calls per min
  // getWeather()