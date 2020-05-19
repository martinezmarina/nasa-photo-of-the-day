
import React, { useState, useEffect } from "react";
import "./App.css";
import Axios from 'axios';
import Header from './header';
import DailyImg from './dailyImg';
import styled from 'styled-components'

// import MarsSearch from './marsSearch';
const apiKey = '3LWZqN9M7fr42TRz4yfz22a8vcQvJcrR7lmsIM0f'

let date = new Date().getDate();
let month = new Date().getMonth()+1;
let year = new Date().getFullYear();
const currentDate = `${year}-${month}-${date}`;



function App() {
  const [dailyImage, setDailyImage] = useState({})

  let [dateValue, setDateValue] = useState(currentDate)
  const onDateChange = event => {
    dateValue = setDateValue(event.target.value)
  }

useEffect(() => {
   Axios.get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${dateValue}`)
  .then(res => {
      setDailyImage(res.data)
      console.log(res.data)
  })
  .catch(err => {
      setDailyImage({date:"Selected Date Doesn't Have Images", hdurl:'https://www.askideas.com/media/24/Planet-Funny-Face-In-Space.jpg', title:"TRY ANOTHER DAY!"})
  }) 
}, [dateValue])


 
  return (
    <div className="App">
      <Header date={dateValue} onChange={onDateChange}/>
      <DailyImg imageUrl={dailyImage.hdurl} imageTitle={dailyImage.title} imageExplanation={dailyImage.explanation} imageDate={dailyImage.date} />
      {/* <MarsSearch/>       */}
    </div>
  );
}

export default App;
