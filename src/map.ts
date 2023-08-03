import { sampleResponse } from "../mock/response";

const data = sampleResponse;
const weather = data.weather[0].main;
const windSpeed = data.wind.speed;
const windDegrees = data.wind.deg;
const temp = data.main.temp;
const location = data.name;

console.log(
  `Weather: ${weather} \nWindspeed: ${windSpeed} \nWind Degrees: ${windDegrees} \nTemp: ${temp} \nLocation: ${location}`
);
