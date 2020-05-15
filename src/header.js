import React from "react";
import styled from 'styled-components'

const StyledHeader = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Dosis&display=swap');
    width:100vw;
    height:15vh;
    background-color: lightsteelblue;
    display:flex;
    flex-direction:row;
    justify-content:space-around;
    align-items:center;
    .inputContainer{
        display: flex;
        flex-direction: row;
        justify-content:center;
    }
    h1{
        font-family:'Dosis', sans-serif;
        color: darkblue;
    }
    label{
        font-family:'Dosis', sans-serif;
        font-size: 1.2em;
        padding: 0 5%;
    }
    input{
        background-color: darkblue;
        color:white;
        border:1px solid black;
        border-radius: 4px;
        font-family:'Dosis', sans-serif;
        padding: 0 5%;
    }

`

export default function header(props) {
    const { date, onChange } = props

    return (
        <StyledHeader>
            <h1>NASA Image of the Day!</h1>
            <div className='inputContainer'>
                <label>Search Another Date</label>
                <input type='date' value={date} onChange={onChange} />
            </div>
        </StyledHeader>
    )
}