const request = require('request');


var getWeather = ( lat, lng, callback ) => {
 request({
     url: `https://api.darksky.net/forecast/11528d50c9a92bafaa74e58fccb06460/${lat},${lng}`,
     json: true}, ( error, response, body ) => {
      if(error){
      callback( 'Unable to connect to Darksky.net sever.' );
     } else if ( response.statusCode === 400 ) {
      callback('Unable to fetch weather.');
     } else if ( response.statusCode === 200 ) {
         callback ( undefined, {
          temperature: body.currently.temperature,
          apparentTemperature: body.currently.apparentTemperature     
         });
     }      
 }); 
};

 module.exports.getWeather = getWeather;
