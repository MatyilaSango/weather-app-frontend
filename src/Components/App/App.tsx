import React, { useEffect, useState } from 'react';
import './App.css';
import wallpaper from "../../Pics/weather_wallpaper.jpg"
import Today from '../Today/Today';
import { TodayAPI } from '../../API/TodayAPI';
import { todayDataType } from '../../Types/types';

function App() {

  const [todayData, setTodayData] = useState<todayDataType>();
  
  useEffect(() => {
    TodayAPI().then(res => setTodayData(res))
  }, [])

  console.log(todayData?.data)

  return (
    <div className="App">
      <img src={wallpaper} alt='pic' />
      <div className='components-container'>
        <div className='components-container-top'>
          <Today todayData={todayData}/>
        </div>
      </div>
    </div>
  );
}

export default App;
