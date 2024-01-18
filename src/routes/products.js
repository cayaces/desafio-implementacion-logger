import express from 'express'
import { createFakeProducts } from '../services/productService.js'
import { handleError } from '../services/handleError.js'
import loggerMiddleware from '../middlewares/loggerMiddleware.js'
import { getMockingProducts } from '../controllers/productControllers.js'

const router = express.Router()

router.use(loggerMiddleware)

router.get('/mockingproducts', getMockingProducts)

router.get('/loggerTest', (req, res) => {
    try {
        logger.debug('Esto es un mensaje de debug.');
        logger.info('Esto es un mensaje de info.');
        logger.warn('Esto es un mensaje de advertencia.');
        logger.error('Esto es un mensaje de error.');
        logger.fatal('Esto es un mensaje fatal.');

        res.json({ message: 'Logs probados exitosamente.' });
    } catch (error) {
        handleError(res, 500, 'INTERNAL_SERVER_ERROR');
    }
})


/*router.get('/mockingproducts', (req, res) => {
    const products = createFakeProducts()
    res.json(products)
});*/

export default router