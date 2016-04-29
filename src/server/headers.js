import config from './server.config';

export default function (req, res, next) {
  // cors allow
  if (req.headers.origin) {
    for (let i = 0; i < config.origins.length; i++) {
      const origin = config.origins[i];
      if (req.headers.origin.indexOf(origin) > -1) {
        res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
        break;
      }
    }
  }
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  // Pass to next layer of middleware
  next();
}
