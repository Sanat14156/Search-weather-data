import React, { useContext } from 'react'
import { userStore } from './Store'


const Form = () => {
    let {handleSubmit,setCity}=useContext(userStore);
  return (
    <form onSubmit={handleSubmit}>
    <h1>Weather Data</h1>
        <label htmlFor='city'>Enter City Name: </label>
        <input type='text' id='city' placeholder='enter city' for onChange={e=>{setCity(e.target.value)}}></input>
        <br></br>
        <button>search</button>
    </form>
  )
}

export default Form;