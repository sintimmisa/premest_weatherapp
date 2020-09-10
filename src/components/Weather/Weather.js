import React from 'react'

const Weather = ({ description, location, country, error, temperature }) => {

    {/*if (description) {
        const weatherDescription = description.split(' ')
        const keyWords = ['cloudy', 'clouds', 'cloud', 'overcast']
        for (let i = 0; i < weatherDescription.length; i++) {
            if (keyWords.includes(weatherDescription[i])) {
                console.log(weatherDescription[i], ': we have a match')
            }
        }
        console.log(keyWords)
    console.log(weatherDescription)*/}

    
    return (
        <div>
            {location && country && <p>{location}, {country}</p>}
            {temperature && <p>{temperature}</p>}
            {description && <p> {description}</p>}
            {error && <p>{error}</p>}
        </div>
    )
}

export default Weather; 