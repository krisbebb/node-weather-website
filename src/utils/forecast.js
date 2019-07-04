const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/d717217018566ca3b02bb35c2d5f48bb/' + encodeURIComponent(latitude) + ',' + encodeURIComponent(longitude) +  '?units=si'

    request({ url, json: true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!')
        } else if (body.error) {
            callback('Unable to find location.')
        } else {
            const todaySummary = body.daily.data[0].summary
            const  temperature = body.currently.temperature
            const   rainChance = body.currently.precipProbability
            callback(undefined, `${todaySummary} It is currently ${temperature} degrees out. There is ${rainChance}% chance of rain.`)
        }
    })
}

module.exports = forecast