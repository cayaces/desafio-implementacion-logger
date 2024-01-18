import logger from '../config/logger.js'

const loggerMiddleware = (req, res, next) => {

  logger.http(`${req.method} ${req.originalUrl}`);
  next()
}

export default loggerMiddleware
