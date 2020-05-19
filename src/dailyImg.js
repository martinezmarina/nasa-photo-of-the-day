import React from "react";
import styled from 'styled-components';

const StyledDailyImage = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Dosis&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

background-color:lightsteelblue;
display:flex;
flex-direction:column;
justify-content:center;
align-items: center;
img{
    width: 85vw;
    border-radius: 10px;
    margin: 0 3%;
}
h2{
    margin-top: 3%;
    font-family:'Dosis', sans-serif;
}
p{
    font-family:'Montserrat', sans-serif;
    width: 80vw;
    word-spacing: 3px;
    line-height: 1.8;
    padding-bottom: 3%;
    text-align: left;
    text-indent: 4em;
}
`

export default function DailyImage(props) {
    const { imageUrl, imageTitle, imageExplanation, imageDate } = props

    return (
        <StyledDailyImage>
            <h2>Image of <span>{imageDate}</span></h2>
            <img src={imageUrl} />
            <h2>{imageTitle}</h2>
            <p>{imageExplanation}</p>
        </StyledDailyImage>
    )
}
