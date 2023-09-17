import express from 'express';
import { addCompra } from '../controllers/compraController.js';
import authenticateToken from '../middlewares/authenticateToken.js';
const router = express.Router();

// Rutas para registrar la compra.
router.post('/compra', authenticateToken, addCompra);

export default router;
