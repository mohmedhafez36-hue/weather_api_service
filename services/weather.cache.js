const express = require("express");
const NodeCache = require("node-cache");

const myCache = new NodeCache({stdTTL:60, checkperiod : 120});

const  cacheMiddleware = (req,res,next) => {
    const key = req.originalUrl || req.url ;
    const cacheData = myCache.get(key);

    if(cacheData){
        console.log(`cache hit for ${key}`);
        return res.json(cacheData);
    }

    console.log(`Cache MISS: ${key}`);
    const originalJson = res.json;
    res.json = function (body){
        myCache.set(key,body);
        return originalJson.call(this,body);
    }
    next();
}


module.exports = cacheMiddleware 