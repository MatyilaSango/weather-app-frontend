import React, { useEffect, useState } from "react";
import "./App.css";

import loadingGif from "../../Pics/loading-anim.gif";
import gweatherLogo from "../../Pics/gweather.png";
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
//import Options from "../Options/Options";
import DayNight from "../Daily/DayNight";
import { DailyAPI } from "../../API/DailyAPI";
import SunriseSunset from "../Daily/SunriseSunset";
import TempHistory from "../Daily/TempHistory";

let wallpaper = require("../../Pics/weather_wallpaper.jpg");
let wallpaperNight = require("../../Pics/gweatherNight.png");

function App() {
  const [search, setSearch] = useState<String>("Cape Town, Western Cape");
  const [todayData, setTodayData] = useState<todayDataType>();
  const [hourlyData, setHourlyData] = useState<hourlyDataType>();
  const [dailyData, setDailyData] = useState<dailyDataType>();
  const [day_night, setDay_night] = useState<dataType[] | any[]>([]);
  const [reRender, setreRender] = useState<boolean>(true);
  const [dailyOption] = useState<String>("0");
  const [backgroundPic, setBackgroundPic] = useState<string>("");
  const [locTime, setLocTime] = useState<Date>(new Date());
  //const TEN_MINUTES: number = 600000;

  useEffect(() => {
    if (reRender) {
      document
        .querySelector(".loading-wrapper")
        ?.classList.remove("loading-wrapper__hide");
      TodayAPI(search).then((res) => setTodayData(res));
      HourlyAPI(search).then((res) => setHourlyData(res));
      DailyAPI(search, dailyOption).then((res) => setDailyData(res));
      if (dailyData) {
        setDay_night([
          dailyData?.data.day_night.day,
          dailyData?.data.day_night.night,
        ]);
        document
          .querySelector(".loading-wrapper")
          ?.classList.add("loading-wrapper__hide");
        setreRender(false);
      }
    }
  }, [dailyData, search, dailyOption, reRender]);

  useEffect(() => {
    setInterval(() => {
      if (
        (locTime?.getHours() >= 18 && locTime?.getHours() <= 24) ||
        (locTime?.getHours() >= 0 && locTime?.getHours() <= 6)
      ) {
        setBackgroundPic(wallpaperNight);
      } else {
        setBackgroundPic(wallpaper);
      }
      if (locTime?.getMinutes() % 10 === 0) {
        setreRender(true);
      }
    }, 3000);
  }, [locTime]);

  const handleSetSearch = (parameter: String): void => {
    setSearch(parameter);
    setDailyData(undefined);
    setreRender(true);
    document
      .querySelector(".today-wrapper__input-search__search")
      ?.classList.add("removeLocations");
  };

  //const handleSetDailyOption = (parameter: String): void => {};

  return (
    <div className="App">
      <img src={backgroundPic} alt="pic" />
      <div className="components-container" id="components-container ">
        <div className="components-container-top">
          {todayData && (
            <Today
              data={todayData?.data}
              search={todayData?.search_parameter}
              handleSetSearch={handleSetSearch}
              setLocTime={setLocTime}
            />
          )}
          <div className="components-container-top__hourly">
            {hourlyData?.data.map((data_, i) => (
              <Hourly
                key={i}
                hour={data_.hour}
                icon={data_.icon}
                temp={data_.temp}
              />
            ))}
          </div>
        </div>
        {dailyData ? (
          <div className="components-container-bottom">
            <div className="components-container-bottom-nav">
              <div className="components-container-bottom-nav__text">
                <span>Dail Weather</span>
              </div>
              <div className="components-container-bottom-nav__options">
                {/* <Options handleSetDailyOption={handleSetDailyOption} /> */}
              </div>
            </div>
            <div className="components-container-bottom-dnsstal">
              {day_night.map((data, i) => (
                <DayNight
                  key={i}
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
                  title="Sunrise"
                  duration={dailyData?.data.sunrise_sunset.sunrise.duration}
                  rise={dailyData?.data.sunrise_sunset.sunrise.rise}
                  set={dailyData?.data.sunrise_sunset.sunrise.set}
                />
                <SunriseSunset
                  title="Sunset"
                  duration={dailyData?.data.sunrise_sunset.sunset.duration}
                  rise={dailyData?.data.sunrise_sunset.sunset.rise}
                  set={dailyData?.data.sunrise_sunset.sunset.set}
                />
              </div>
              <div className="temperature-history-wrapper">
                <div className="temperature-history-wrapper__top">
                  <span>Temperature History</span>
                </div>
                <TempHistory
                  tempHistory={dailyData?.data.temperature_history}
                />
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
        <img src={gweatherLogo} alt="logo" className="logo" />
      </div>
      <div className="loading-wrapper loading-wrapper__hide">
        <div className="loading-wrapper__gif">
          <img src={loadingGif} alt="loading" />
        </div>
      </div>
    </div>
  );
}

export default App;
