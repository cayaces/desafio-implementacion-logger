import winston from 'winston'
import 'winston-daily-rotate-file'

const logDir = 'logs'

const getLogLevel = () => {
    // Configurar niveles de log basados en el entorno
    return process.env.NODE_ENV === 'production' ? 'info' : 'debug';
  };

const logger = winston.createLogger({
  levels: {
    debug: 0,
    http: 1,
    info: 2,
    warning: 3,
    error: 4,
    fatal: 5,
  },
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.simple()
  ),
  transports: [
    new winston.transports.Console({
        level: getLogLevel(),
    }),
    new winston.transports.DailyRotateFile({
      filename: `${logDir}/%DATE%-app.log`,
      datePattern: 'YYYY-MM-DD',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '14d',
      level: 'info', // Configurar el nivel de log para el archivo de registro diario
    }),
    new winston.transports.DailyRotateFile({
        filename: `${logDir}/%DATE%-errors.log`,
        datePattern: 'YYYY-MM-DD',
        zippedArchive: true,
        maxSize: '20m',
        maxFiles: '14d',
        level: 'error', // Nuevo transporte para errores específicos
      }),
    //new winston.transports.Console(),
  ],
});

export default logger
