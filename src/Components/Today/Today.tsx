import React, { useEffect, useState } from 'react'
import { todayDataType } from '../../Types/types'
import "./Today.css"

export default function Today( { data, search } : todayDataType | any) {

  const [time, setTime] = useState<Date | any>(Date().split(" ")[4])

  useEffect(() => {
    setInterval(() => {
      setTime(Date())
    }, 1000)
  }, [])

  return (
    <div className='today-wrapper'>
      <input type="text" placeholder='Search...' />
      <div className='wrapper-weather'>
        <div className='wrapper-weather-top-det'>
          <div className='wrapper-weather-top-det__loc-type'>
            <div className='loc'>
              <span>{search.split(",")[0]}</span>
            </div>
            <div className='type'>
              <span>{data.type}</span>
            </div>
          </div>
          <div className='wrapper-weather-top-det__time'>
            <div className='time'>
              <span>{time.split(" ")[4]}</span>
            </div>
          </div>
        </div>
        <div className='wrapper-weather-bottom-det'>
          <div className='wrapper-weather-bottom-det__det-pic'>
            <div className='wrapper-weather-bottom-det__det'>
              <div className='temp'>
                <span>{data.temp}</span>
              </div>
              <div className='wind'>
                <span>Wind: {data.wind}</span>
              </div>
              <div className='air-quality'>
                <span>Air quality: {data.air_quality}</span>
              </div>
            </div>
            <div className='wrapper-weather-bottom-det__pic'>
              <img src={data.icon} alt="pic" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
