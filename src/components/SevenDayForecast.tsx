import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./sevenDayForecast.css";
import { URL } from "../constants";
type dailyForecast = {
  dailyForecast: any;
};

export const SevenDayForecast = ({ dailyForecast }: dailyForecast) => {
  const date = new Date();
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const {} = dailyForecast;

  return (
    <>
      <h5>Weekly forecast </h5>
      <Slider {...settings}>
        {dailyForecast?.[0] &&
          dailyForecast?.map(
            (
              {
                dt,
                weather = [{}],
                temp: { day = 0, min = 0, max = 0 } = {},
              }: any,
              index: number
            ) => (
              <div className="card" key={dt}>
                <h3>{date.getDate() + index}th</h3>
                <img
                  height="200"
                  width="200"
                  alt="img"
                  src={`${URL.IMG_URL}/${weather?.[0]?.icon}.png`}
                />
                <p className="bold-para">
                  {weather?.[0]?.description}
                </p>

                <p>Temperature {day + " C"}</p>
                <p>Low {min + " C"} </p>
                <p>High {max + " C"} </p>
              </div>
            )
          )}
      </Slider>
    </>
  );
};
