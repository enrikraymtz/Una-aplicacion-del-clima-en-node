const axios = require("axios");

const getClima = async(lat, lng) => {

    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=f7922e303e765b0fef441c901dd6873d`);

    if (resp.data.cod != 200) {
        throw new Error("No se encontro ningun resultado.")
    }

    return resp.data.main.temp;

}

module.exports = {
    getClima
}