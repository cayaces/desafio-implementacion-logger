import express from 'express'
import productRoutes from './routes/products.js'
import logger from './config/logger.js'

const app = express()
const PORT = 8080

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api', productRoutes)

app.listen(PORT, () => {
    logger.info(`Servidor escuchando en puerto ${PORT}`)
})