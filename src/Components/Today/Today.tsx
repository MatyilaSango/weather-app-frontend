import React, { useEffect, useRef, useState } from "react";
import { locationsType, todayType } from "../../Types/types";
import "./Today.css";
import SearchOption from "../SearchOptions/SearchOption";
import { LocationsAPI } from "../../API/LocationsAPI";

interface ITodayProps {
  data: todayType,
  search: String,
  handleSetSearch: (parameter: String) => void,
  setLocTime: React.Dispatch<React.SetStateAction<Date>>
}

export default function Today({
  data,
  search,
  handleSetSearch,
  setLocTime
}: ITodayProps) {
  const [locations, setLocations] = useState<locationsType>();

  let inputRef = useRef<String | any>();

  const [time, setTime] = useState<Date>();
  const [isNewLocationTime, setIsNewLocationTime] = useState<Boolean>(true);

  const setNewTime = (): void => {
    setInterval(async () => {
      let date = new Date()
      date.setHours(date.getUTCHours() + Number(data.offset))
      setTime(date)
      //setLocTime(date)
    }, 1000)
  }

  useEffect(() => {
    if(isNewLocationTime){ 
      setNewTime();
      console.log("here")
      setIsNewLocationTime(false)
    }  
  }, [isNewLocationTime])

  const handleSearch = async (e: any): Promise<void> => {
    const inpitValue: String = e.target.value;
    if (inpitValue === "") return;
    if (e.key === "Enter") {
      await LocationsAPI(inpitValue).then((res) => {
        if(res.hasOwnProperty("available_locations")){
          document.querySelector(".today-wrapper__input-search__search")?.classList.remove("removeLocations")
          setLocations(res)
        }
        else{
          document.querySelector(".loading-wrapper")?.classList.remove("loading-wrapper__hide")
          handleSetSearch(inpitValue)
          setIsNewLocationTime(true)
        }
      }).catch(err => {
        alert("No such locations found!")
      });
    }
  };

  return (
    <div className="today-wrapper">
      <div className="today-wrapper__input-search">
        <input
          id="input"
          type="text"
          placeholder="Search..."
          ref={inputRef}
          onKeyDown={handleSearch}
        />
        <div className="today-wrapper__input-search__search">
          {locations ? locations?.available_locations.map((location, i) => (
            <SearchOption
              key={i}
              location={String(location).replace(", ZA\n", "")}
              handleSetSearch={handleSetSearch}
              setIsNewLocationTime={setIsNewLocationTime}
            />
          )): ""}
        </div>
      </div>
      <div className="wrapper-weather">
        <div className="wrapper-weather-top-det">
          <div className="wrapper-weather-top-det__loc-type">
            <div className="loc">
              <div className="loc-text">
                {(search)}
              </div>
            </div>
            <div className="type">
              <span>{data.type}</span>
            </div>
          </div>
          <div className="wrapper-weather-top-det__time">
            <div className="time">
              <span>{time?.toString().split(" ")[4]}</span>
            </div>
          </div>
        </div>
        <div className="wrapper-weather-bottom-det">
          <div className="wrapper-weather-bottom-det__det-pic">
            <div className="wrapper-weather-bottom-det__det">
              <div className="temp">
                <span>{data.temp}</span>
              </div>
              <div className="wind">
                <span>Wind: {data.wind}</span>
              </div>
              <div className="air-quality">
                <span>Air quality: {data.air_quality}</span>
              </div>
            </div>
            <div className="wrapper-weather-bottom-det__pic">
              <img src={data.icon} alt="pic" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
