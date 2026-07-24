const axios = require("axios");
const config = require("../config/config");

const API_KEY = config.API_KEY;
const AppError = require("../services/errorClass");

async function getWeather(req, res,next) {
    const {q} = req.query
    if (!q) {
    return next(new AppError("Query is required", 400));
    }
    try{
    const response = await axios.get(
        `https://api.weatherapi.com/v1/current.json`,
        {
        params: {
            key:API_KEY,
            q: q
        }
    }
    );
        res.status(200).json(response.data);
    }catch(error){
        if(error.response?.status === 400){
            return next(new AppError("city not found" ,404));
    }
        return next(new AppError("failed to fetch weather data" , 500));
    }
}

module.exports = getWeather;