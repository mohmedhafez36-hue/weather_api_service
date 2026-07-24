const getWeather = require("../controllers/weather");
const express = require("express");
const router = express.Router();
const cache = require("../services/weather.cache");

router.get("/weather" , cache , getWeather);

module.exports = router