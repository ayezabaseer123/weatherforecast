import axios from "axios";
import { URL } from "./constants";


export const getWeather=(name: string)=>{
 return axios({
        method: "get",
        url: `${URL.WEATHER_API_URL}/weather?q=${name}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`,
      })
}


export const getWeekly = (lat: number,lon: number)=>{
  return  axios({
        method: "get",
        url: `${URL.WEATHER_API_URL}/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=hourly,minutely&&APPID=${process.env.REACT_APP_API_KEY}`,
      })
}