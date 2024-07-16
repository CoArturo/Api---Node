import { Router } from "express";
import {createProduct, deleteProduct, getProduct, getProducts, updateProduct} from '../controllers/products.controllers.js'

const router = Router();

router.get("/productos", getProducts);
router.get("/productos/:id", getProduct);
router.post("/productos", createProduct);
router.get("/productos/:id", updateProduct);
router.get("/productos/:id", deleteProduct);

export default router;