import React, { createContext, useEffect, useState } from 'react'

export const userStore=createContext("default");

const Store = (props) => {
    let [search,setSearch]=useState(false);
    let [city,setCity]=useState("");
    let [data,setData]=useState([]);
    
    useEffect(()=>{

      let weatherData = async () => {
        let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0cfc67891ebff2f44a1d5687b0700c0a&units=metric`);
        let j_data = await res.json();
        console.log(j_data);
        setData([await j_data]);
    };

    if(search){
      try{
        weatherData();
      }
      catch(err){
        console.log(err);
      }
    }
     setSearch(false);
    },[search,city])

    let handleSubmit=(e)=>{
        e.preventDefault();
        console.log("submitted");
        setSearch(true);
    }
  return (
    <userStore.Provider value={{handleSubmit,setCity,data}}>
        {props.children}
    </userStore.Provider>
  )
}

export default Store