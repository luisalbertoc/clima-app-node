const axios = require("axios");

const getLugarLatLng = async (direccion) => {

    let endcodeUrl = encodeURI(direccion)

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyA-HXVa2jtkGfKtIJwisxgC46RaWqC1xuI&address=${endcodeUrl}`)

    if (resp.data.status === "ZERO_RESULTS") {
        throw new Error(`No hay resultados para la ciudad ${ direccion }`)
    }

    let location = resp.data.results[0];
    let coors = location.geometry.location;
    
    return {
        direccion: location.formatted_address,
        lat: coors.lat,
        lng: coors.lng,
    }

}

module.exports = {
    getLugarLatLng
}