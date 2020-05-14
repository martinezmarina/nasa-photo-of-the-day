import React from "react";


export default function DailyImage(props) {
    const { imageUrl, imageTitle, imageExplanation } = props

    return (
        <div>
            <img src={imageUrl} />
            <h3>Image of the Day: {imageTitle}</h3>
            <p>{imageExplanation}</p>
        </div>
    )
}
