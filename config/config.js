require("dotenv").config();

const PORT = process.env.PORT;
const API_KEY = process.env.API_KEY;
const BASE_URL = process.env.BASE_URL
module.exports = {PORT , API_KEY ,BASE_URL};