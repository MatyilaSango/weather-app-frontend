import React from "react";
import "./DayNight.css";
import {
  dataType,
} from "../../Types/types";
import Table from "./Table/Table";

export default function DayNight(
  {
    date,
    title,
    icon,
    temp,
    real_feel,
    real_feel_shade,
    phrase,
    max_uv_index,
    wind,
    wind_gusts,
    prob_of_precip,
    prob_of_thunderstorm,
    precip,
    cloud_cover,
  }: dataType | any,
) {
  return (
    <div className="day-night-wrapper">
      <div className="day-night-wrapper__top">
        <div className="day-night-wrapper__top--icon_day">
          <img src={icon} alt="pic" />
          &nbsp;|&nbsp;
          <span>{title}</span>
        </div>
        <div className="day-night-wrapper__top--date">
          <span>{date}</span>
        </div>
      </div>
      <Table
        temp={temp}
        real_feel={real_feel}
        real_feel_shade={real_feel_shade==="undefined" ? "" : real_feel_shade}
        phrase={phrase}
        max_uv_index={max_uv_index}
        wind={wind}
        wind_gusts={wind_gusts}
        prob_of_precip={prob_of_precip}
        prob_of_thunderstorm={prob_of_thunderstorm}
        precip={precip}
        cloud_cover={cloud_cover}
      />
    </div>
  );
}
