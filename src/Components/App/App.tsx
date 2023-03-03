import React, { useEffect, useState } from "react";
import "./App.css";
import wallpaper from "../../Pics/weather_wallpaper.jpg";
import loadingGif from "../../Pics/loading-anim.gif";
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

function App() {
  const [search, setSearch] = useState<String>("Cape Town, Western Cape");
  const [todayData, setTodayData] = useState<todayDataType>();
  const [hourlyData, setHourlyData] = useState<hourlyDataType>();
  const [dailyData, setDailyData] = useState<dailyDataType>();
  const [day_night, setDay_night] = useState<dataType[] | any[]>([]);
  const [reRender, setreRender] = useState<boolean>(true);
  const [dailyOption] = useState<String>("0");

  const TEN_MINUTES: number = 600000;

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
      let date = new Date();
      if (date.getMinutes() % 10 === 0) {
        setreRender(true);
      }
    }, TEN_MINUTES);
  }, []);

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
      <img src={wallpaper} alt="pic" />
      <div className="components-container">
        <div className="components-container-top">
          {todayData && (
            <Today
              data={todayData?.data}
              search={todayData?.search_parameter}
              handleSetSearch={handleSetSearch}
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
              {dailyData ?
              <TempHistory tempHistory={dailyData?.data.temperature_history} />
              : ""}
            </div>
          </div>
        </div>
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
