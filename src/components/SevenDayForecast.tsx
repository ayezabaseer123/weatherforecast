import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./sevenDayForecast.css";

type dailyForecast = {
  dailyForecast: any;
};

export const SevenDayForecast = (props: dailyForecast) => {
  const date = new Date();
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <>
      <h5>Weekly forecast </h5>
      <Slider {...settings}>
        {props?.dailyForecast?.[0]
          ? props?.dailyForecast?.map((element: any, index: number) => (
              <div className="card" key={element?.dt}>
                <h3>{date.getDate() + index}th</h3>
                <img
                  height="200"
                  width="200"
                  alt="img"
                  src={`http://openweathermap.org/img/w/${element?.weather?.[0]?.icon}.png`}
                />
                <p style={{fontWeight: 'bold'}}>{element?.weather?.[0]?.description} </p>

               
                <p>Temperature {(element?.temp?.day - 273.15).toFixed(2) + " C"}</p>
                <p>Low {(element?.temp?.min - 273.15).toFixed(2) + " C"} </p>
                <p>High {(element?.temp?.max - 273.15).toFixed(2) + " C"} </p>
              </div>
            ))
          : ""}
      </Slider>
    </>
  );
};
