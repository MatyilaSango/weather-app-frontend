import React from 'react'
import { todayDataType } from '../../Types/types'
import "./Today.css"

export default function Today({ data, search_parameter }: todayDataType | any) {

  let tempdata = {
    loc: "Cape Town",
    time: "12:36 PM",
    type: "Sunny",
    temp: "27 C",
    wind: "SE 23 km/h",
    air_quality: "25",
    icon: "https://www.accuweather.com/images/weathericons/1.svg"
  }

  return (
    <div className='wrapper'>
      <input type="text" placeholder='Search...' />
      <div className='wrapper-weather'>
        <div className='wrapper-weather-top-det'>
          <div className='wrapper-weather-top-det__loc-type'>
            <div className='loc'>
              <span>{tempdata.loc}</span>
            </div>
            <div className='type'>
              <span>{tempdata.type}</span>
            </div>
          </div>
          <div className='wrapper-weather-top-det__time'>
            <div className='time'>
              <span>{tempdata.time}</span>
            </div>
          </div>
        </div>
        <div className='wrapper-weather-bottom-det'>
          <div className='wrapper-weather-bottom-det__det-pic'>
            <div className='wrapper-weather-bottom-det__det'>
              <div className='temp'>
                <span>{tempdata.temp}</span>
              </div>
              <div className='wind'>
                <span>{tempdata.wind}</span>
              </div>
              <div className='air-quality'>
                <span>{tempdata.air_quality}</span>
              </div>
            </div>
            <div className='wrapper-weather-bottom-det__pic'>
              <img src={tempdata.icon} alt="pic" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
