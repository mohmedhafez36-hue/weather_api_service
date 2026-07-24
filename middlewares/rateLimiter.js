const ratelimit = require("express-rate-limit");

const limiter = ratelimit({
    windowMs: 1 * 60 * 1000,
    max: 5,
    message:{
        status:429,
        error: "Too many request , Please try again after a minute"
    },
    standardHeaders: true,
    legacyHeaders: false,
})

module.exports = limiter;