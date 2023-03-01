import React, { useEffect, useRef, useState } from 'react'
import { todayDataType } from '../../Types/types'
import "./Today.css"

export default function Today( { data, search, setSearch, setreRender } : todayDataType | any ) {
  let inputRef = useRef<String | any>()
  const [time, setTime] = useState<Date | any>(Date().split(" ")[4])

  useEffect(() => {
    setInterval(() => {
      setTime(Date())
    }, 1000)
  }, [])

  const handleSearch = (e: any): void => {
    const inpitValue: String = e.target.value
    if(e.key === 'Enter'){
      setSearch(inpitValue.replace("z", ""))
      setreRender(true)
    }
  }

  return (
    <div className='today-wrapper'>
      <input id="input" type="text" placeholder='Search...' ref={inputRef} onKeyDown={handleSearch}/>
      <div className='wrapper-weather'>
        <div className='wrapper-weather-top-det'>
          <div className='wrapper-weather-top-det__loc-type'>
            <div className='loc'>
              <div className='loc-text'>{String(search).replaceAll(" ", "_")}</div>
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
