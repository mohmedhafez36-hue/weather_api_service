const axios = require("axios");
const config = require("../config/config");

const API_KEY = config.API_KEY;
const AppError = require("../services/errorClass");

async function getWeather(req, res) {
    const city = req.query.city;
    try{
    const response = await axios.get(
        `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`
    );
        res.status(200).json(response.data);
    }catch(error){
        throw new AppError("city not found" ,404)
    }
}


module.exports = getWeather;