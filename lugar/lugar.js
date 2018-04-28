const axios = require('axios');

const getLugarLatLng = async(direccion) => {

    let encodedURL = encodeURI(direccion);

    let response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${ encodedURL }&key=AIzaSyDIrPymMTwFrE2KRvkM1mv5h5u7mZe-cnQ`);

    if (response.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para la cuidad: ${direccion}`)
    }

    let location = response.data.results[0];
    let coords = location.geometry.location;

    return {
        direccion: location.formatted_address,
        lat: coords.lat,
        lng: coords.lng
    }

}

module.exports = {
    getLugarLatLng
}