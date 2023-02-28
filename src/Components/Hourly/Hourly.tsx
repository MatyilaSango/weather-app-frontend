import React from 'react'
import { hourlydataType } from '../../Types/types'
import "./Hourly.css"

export default function Hourly({hour, icon, temp}: hourlydataType | any) {

  return (
    <div className='Hourly-Wrapper'>
      <div className='Hourly-Wrapper__time'>
        <span>{hour}</span>
      </div>
      <div className='Hourly-Wrapper__icon'>
        <img src={icon} alt="pic" />
      </div>
      <div className='Hourly-Wrapper__temp'>
        <span>{temp}C</span>
      </div>
    </div>
  )
}
