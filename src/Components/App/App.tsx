import React, { useEffect, useState } from "react";
import "./App.css";
import wallpaper from "../../Pics/weather_wallpaper.jpg";
import Today from "../Today/Today";
import { TodayAPI } from "../../API/TodayAPI";
import {
  dailyDataType,
  dataType,
  hourlyDataType,
  todayDataType,
} from "../../Types/types";
import Hourly from "../Hourly/Hourly";
import { HourlyAPI } from "../../API/HourlyAPI";
import Options from "../Options/Options";
import DayNight from "../Daily/DayNight";
import { DailyAPI } from "../../API/DailyAPI";
import SunriseSunset from "../Daily/SunriseSunset";

function App() {
  const [search, setSearch] = useState<string>("Cape Town, Western Cape");
  const [todayData, setTodayData] = useState<todayDataType>();
  const [hourlyData, setHourlyData] = useState<hourlyDataType>();
  const [dailyData, setDailyData] = useState<dailyDataType>();

  const [, setDailyOption] = useState<String>("Cape Town, Western Cape");

  useEffect(() => {
    console.log("here")
    TodayAPI(search).then((res) => setTodayData(res));
    HourlyAPI(search).then((res) => setHourlyData(res));
    DailyAPI(search, "0").then((res) => setDailyData(res));
  }, [search]);

  const day_night: dataType[] | any[] = [
    dailyData?.data.day_night.day,
    dailyData?.data.day_night.night,
  ];

  return (
    <div className="App">
      <img src={wallpaper} alt="pic" />
      <div className="components-container">
        <div className="components-container-top">
          {todayData && (
            <Today
              data={todayData?.data}
              search={todayData?.search_parameter}
              setSearch={setSearch}
            />
          )}
          <div className="components-container-top__hourly">
            {hourlyData?.data.map((data_) => (
              <Hourly hour={data_.hour} icon={data_.icon} temp={data_.temp} />
            ))}
          </div>
        </div>
        <div className="components-container-bottom">
          <div className="components-container-bottom-nav">
            <div className="components-container-bottom-nav__text">
              <span>Dail Weather</span>
            </div>
            <div className="components-container-bottom-nav__options">
              <Options setDailyOption={setDailyOption} />
            </div>
          </div>
          <div className="components-container-bottom-dnsstal">
            {day_night.map((data) => (
              <DayNight
                icon={data.icon}
                title={data.title}
                temp={data.temperature}
                real_feel={data.real_feel}
                real_feel_shade={data.real_feel_shade}
                phrase={data.phrase}
                max_uv_index={data.max_uv_index}
                wind={data.wind}
                wind_gusts={data.wind_gusts}
                prob_of_precip={data.prob_of_precip}
                prob_of_thunderstorm={data.prob_of_thunderstorm}
                precip={data.precip}
                cloud_cover={data.cloud_cover}
                date={dailyData?.date}
              />
            ))}
            <div className="sunrise-sunset-wrapper">
              <SunriseSunset
                duration={dailyData?.data.sunrise_sunset.sunrise.duration}
                rise={dailyData?.data.sunrise_sunset.sunrise.rise}
                set={dailyData?.data.sunrise_sunset.sunrise.set}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
