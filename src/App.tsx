import React, { useState } from "react";
import axios from "axios";

import { Searchbar } from "./components/Searchbar";
import { Button } from "./components/Button";
import { URL } from "./constants";
import { CurrentForecast } from "./components/CurrentForecast";
import { Celcius } from "./components/Celcius";
import { Fahrenheit } from "./components/Fahrenheit";
import { SevenDayForecast } from "./components/SevenDayForecast";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [weatherDetails, setWeatherDetails] = useState<any>({});
  const [celcius, setCelcius] = useState(0);
  const [fahrenheit, setFahrenheit] = useState(32);
  const [dailyForecast, setDailyForecast] = useState<any>({});

  const getWeeklyForecast = (lon: number, lat: number) => {
    axios({
      method: "get",
      url: `${URL.WEATHER_API_URL}/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&&APPID=${process.env.REACT_APP_API_KEY}`,
    })
      .then(function (response) {
        console.log(response.data.daily);
        setDailyForecast(response.data.daily);
      })
      .catch(function (err) {
        console.log(err);
      });
  };
  const convertCelcius = () => {
    let fahrenheit = parseFloat((celcius * (9 / 5) + 32).toFixed(2));

    setFahrenheit(fahrenheit);
    console.log(fahrenheit);
  };

  const convertFahrenheit = () => {
    let celcius = parseFloat(((5 / 9) * (fahrenheit - 32)).toFixed(2));
    setCelcius(celcius);
    console.log(celcius);
  };
  const handleClick = () => {
    axios({
      method: "get",
      url: `${URL.WEATHER_API_URL}/weather?q=${name}&APPID=${process.env.REACT_APP_API_KEY}`,
    })
      .then(function (response) {
        console.log(name);
        console.log(response.data);
        let lon = response.data.coord.lon;
        let lat = response.data.coord.lat;

        setWeatherDetails(response.data);
        getWeeklyForecast(lon, lat);
      })
      .catch(function (err) {
        console.log(err);
      });
  };
  return (
    <div className="app">
      <h2 className="heading">Weather App</h2>
      <div className="flexbox">
        <Searchbar
          value={name}
          handleChange={(event) => setName(event.target.value)}
          placeholder="Search by name"
        />
        <Button handleClick={() => handleClick()} />
      </div>
      <div className="flexbox">
        <div className="flexbox-column">
          <div className="currentForecast">
            <CurrentForecast weatherInfo={weatherDetails} />
          </div>
          <div className="currentForecast">
            <SevenDayForecast dailyForecast={dailyForecast} />
          </div>
        </div>
        <div className="flexbox-column">

          <div className="main">
            <h5>Weather Map</h5>
          </div>
        <div className="main">
         
            <h5>Temperature convertor</h5>
            <div className="covert">
              <div className="convertor">
                <div>
                  <Celcius
                    value={celcius}
                    handleChange={(event) =>
                      setCelcius(parseInt(event.target.value))
                    }
                    blurEvent={() => convertCelcius()}
                  />
                </div>
                <div>
                  <Fahrenheit
                    value={fahrenheit}
                    handleChange={(event) =>
                      setFahrenheit(parseFloat(event.target.value))
                    }
                    blurEvent={() => convertFahrenheit()}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
