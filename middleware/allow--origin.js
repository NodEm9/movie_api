let allowedOrigins = ['http://localhost:1234', 'http://localhost:8080', 'https://movie-api-h54p.onrender.com'];



module.exports = function (req, res, next) { 
  let origin = req.headers.origin;

  if (allowedOrigins.includes(origin)  === -1) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
}

// origin = (origin, callback) => {
//   if (!origin) return callback(null, true);
//   if (allowOrigins.includes(origin)) {
//     callback(null, true);
//   } else {
//     callback(new Error('Not allowed by CORS'));
//   }
// }