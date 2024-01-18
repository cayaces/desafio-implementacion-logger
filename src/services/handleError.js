//funcion para manejar lllse rrores
import logger from '../config/logger.js'

export const handleError = (res, statusCode, errorCode) => {

    const errorMessage = errorDictionary[errorCode]
    logger.error(`Error: ${statusCode} - ${errorMessage}`)
    res.status(statusCode).json({ error: errorMessage })
}