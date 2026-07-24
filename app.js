const express = require("express");
const app = express();
const errorMiddleware = require("./middlewares/errorHandler");
const config = require("./config/config");
const limiter = require("./middlewares/rateLimiter")

const router = require("./routes/wheather.routes");
const morgan = require("morgan");


const PORT = config.PORT;

app.use(express.json());
app.use(morgan("dev"));

app.listen(PORT);

app.use(limiter);

app.use(router);


app.use(errorMiddleware);


