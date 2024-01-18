import { createFakeProducts } from '../services/productService.js'
import { handleError } from '../services/handleError.js'
import logger from '../config/logger.js'

export const getMockingProducts = (req, res) => {

    try {
        const products = createFakeProducts()
        res.json(products)
        logger.info('Productos recuperados con exito.')

    } catch (error) {
        handleError(res, 500, 'INTERNAL_SERVER_ERROR')
    }
}