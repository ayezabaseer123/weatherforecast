import "./CurrentForecast.css";
import { URL } from "../constants";

type CurrentForecastProps = {
  weatherInfo: Record<string, any>;
};

export const CurrentForecast = ({ weatherInfo }: CurrentForecastProps) => {
  const {
    name = "",
    main: { temp = 0, temp_max = 0, temp_min = 0 } = {},
    weather = [{}],
  } = weatherInfo;
  return (
    <div className="flex-two">
      <div>
        <h5>Today Temperature for {name}</h5>
        <p>Current temperature: {temp + " C"} </p>
        <p>Weather description: {weather?.[0]?.description}</p>
        <p>Highest temperature: {temp_max + " C"} </p>
        <p>Lowest temperature: {temp_min + " C"} </p>
      </div>
      <div>
        {weather?.[0]?.icon ? (
          <img
            width="200"
            alt="img"
            height="200"
            src={`${URL.IMG_URL}/${weather?.[0]?.icon}.png`}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
