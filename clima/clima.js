const axios = require("axios");

const getClima = async(lat,lng) =>{

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=575c6238bd6cf91e862c11bfa5ace557&units=metric`);

    return resp.data.main.temp;

}

module.exports = {
    getClima
}