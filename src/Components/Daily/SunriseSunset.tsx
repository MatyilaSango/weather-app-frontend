import React from 'react'
import { sunriseSunsetType } from '../../Types/types'
import "./SunriseSunset.css"
import SunriseSunsetTable from './Table/SunriseSunsetTable'

export default function SunriseSunset({duration, rise, set}: sunriseSunsetType | any) {
  return (
    <div className='sunrise-sunset-wrapper-card'>
        <div className='sunrise-sunset-wrapper-card_title'>
            <span>Sunrise</span>
        </div>
        <SunriseSunsetTable duration={duration} rise={rise} set={set} />
    </div>
  )
}
