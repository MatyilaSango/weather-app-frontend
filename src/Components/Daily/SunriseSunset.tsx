import React from "react";
import "./SunriseSunset.css";
import SunriseSunsetTable from "./Table/SunriseSunsetTable";

interface props {
  title: string;
  duration: string;
  rise: string;
  set: string;
}

export default function SunriseSunset({
  title,
  duration,
  rise,
  set,
}: props | any) {
  return (
    <div className="sunrise-sunset-wrapper-card">
      <div className="sunrise-sunset-wrapper-card_title">
        <span>{title}</span>
      </div>
      <SunriseSunsetTable duration={duration} rise={rise} set={set} />
    </div>
  );
}
