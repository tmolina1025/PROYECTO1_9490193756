// src/routes/userRoutes.js
import express from 'express';
import { addProducto, getProductoByIdentificador, updateProducto, deleteProducto } from '../controllers/productoController.js';
import authenticateToken from '../middlewares/authenticateToken.js';

const router = express.Router();

// Rutas para obtener y modificar los datos de los productos
router.post('/producto', authenticateToken, addProducto);
router.get('/producto/:ID', getProductoByIdentificador);
router.put('/producto/:ID', authenticateToken, updateProducto);
router.delete('/producto/:ID', authenticateToken, deleteProducto);


export default router;
