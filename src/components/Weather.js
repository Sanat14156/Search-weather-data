import React, { useContext } from 'react'
import { userStore } from './Store'

const Weather = () => {
  let {data} = useContext(userStore);

  return (
    <div>
    {
      data.map((value)=>(
        <>
        <h1>{value.name}</h1>
        <h1>{value.sys.country}</h1>
  <img src={`https://openweathermap.org/img/wn/${value.weather[0].icon}@2x.png`} alt={value.name}></img>
  <p><span>{value.weather[0].description}</span></p>
  <br></br>
 <p><span>Temp:</span> {value.main.temp} <sup>o</sup>C</p>
 <br></br>
 <p><span>Min_Temp:</span> {value.main.temp_min} <sup>o</sup>C | <span>Max_Temp:</span> {value.main.temp_max} <sup>o</sup>C</p> 
 <br></br>
 <p><span>Longitude:</span> {value.coord.lon}<sup>o</sup> E | <span>Latitude:</span> {value.coord.lat}<sup>o</sup> N</p>
 <br></br>
 <p><span>Humidity:</span> {value.main.humidity}%</p>
 <br></br>
 <p><span>Wind Speed:</span> {value.wind.speed} km/h</p>
 </>
      )
      )
    }
  </div>
  )
}

export default Weather