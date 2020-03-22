const request = require('request');

const forecast = (long, lat, callback) => {
    const url = 'https://api.darksky.net/forecast/fcb9549862bb8e987b9a217901e2316d/' + encodeURIComponent(lat) + ',' + encodeURIComponent(long);

    request({ url, json: true }, (e, {body}) => {
        if(e) {
            callback('Unable to connect to weather service!', undefined);
        } else if(body.error) {
            callback('Unable to find location.', undefined);
        } else {
            callback(undefined, 
                body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degrees out. There is a ' + body.currently.precipProbability + '% chance of rain. The high for the day is ' + body.daily.data[0].temperatureHigh + ' degrees. The low for the day is ' + body.daily.data[0].temperatureLow +' degrees.');
        }
    })
}

module.exports = forecast;