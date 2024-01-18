import { faker } from '@faker-js/faker';
import { errorDictionary } from './dictionaryError.js';
import logger from '../config/logger.js';

faker.location = 'es';

export const createFakeProducts = () => {

    try {
        const products = []

        for (let i = 0; i < 100; i++) {

            const product = {
                _id: logger.string.uuid(),
                name: logger.commerce.productName(),
                description: logger.commerce.productDescription(),
                price: logger.commerce.price(),
                category: logger.commerce.department(),
                stock: logger.finance.amount({ min: 1000, max: 10000, dec: 2, symbol: '$' }),
            }
            products.push(product)
        }
        
        logger.debug('Productos creados exitosamente.');
        return products

    } catch (error) {
        logger.error('Error creating fake products:', error)
        //throw errorDictionary.PRODUCT_CREATION.INTERNAL_SERVER_ERROR
        return error
    }
}
