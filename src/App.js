
import React, { useState, useEffect } from "react";
import "./App.css";
import Axios from 'axios';
import Header from './header';
import DailyImg from './dailyImg';
import MarsSearch from './marsSearch';
const apiKey = '3LWZqN9M7fr42TRz4yfz22a8vcQvJcrR7lmsIM0f'
let date = '2020-05-02'



function App() {
  const [dailyImage, setDailyImage] = useState({})

useEffect(() => {
   Axios.get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date}`)
  .then(res => {
      setDailyImage(res.data)
      console.log(res.data)
  })
  .catch(err => {
      console.log('error')
  }) 
}, [])
 
  return (
    <div className="App">
      <Header/>
      <DailyImg imageUrl={dailyImage.hdurl} imageTitle={dailyImage.title} imageExplanation={dailyImage.explanation} />
      {/* <MarsSearch/>       */}
    </div>
  );
}

export default App;
