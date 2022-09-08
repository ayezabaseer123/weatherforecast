import "./CurrentForecast.css";

type CurrentForecastProps = {
  weatherInfo: any;
};

export const CurrentForecast = (props: CurrentForecastProps) => {
  return (
    <div className="flex-two">
      <div>
        <h5>Today Temperature for {props?.weatherInfo?.name}</h5>
        <p>Current temperature: {props?.weatherInfo?.main?.temp?((props?.weatherInfo?.main?.temp - 273.15).toFixed(2)+ " C"):""} </p>
        <p>
          Weather description: {props?.weatherInfo?.weather?.[0].description}
        </p>
        <p>Highest temperature: {props?.weatherInfo?.main?.temp_max?((props?.weatherInfo?.main?.temp_max - 273.15).toFixed(2)+ " C"):""}  </p>
        <p>Lowest temperature: {props?.weatherInfo?.main?.temp_min?((props?.weatherInfo?.main?.temp_min - 273.15).toFixed(2)+ " C"):""} </p>
      </div>
      <div>
        {props?.weatherInfo?.weather?.[0]?.icon ? (
          <img
            width="200"
            alt="img"
            height="200"
            src={`http://openweathermap.org/img/w/${props?.weatherInfo?.weather?.[0]?.icon}.png`}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
