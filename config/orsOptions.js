const  allowedOrigins  = require("./allowedOrigins")

const corsOptions = {
    origin: (origin, callback) => {
        if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
            callback(null, true)
        } else {
          var msg = "The CORS policy for this site does not allow access from the specified Origin.";
          return callback(new Error(msg), false);
        }
    },
    optionsSuccessStatus: 200
}
 
module.exports = corsOptions;