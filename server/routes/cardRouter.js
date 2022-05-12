import express from "express";

import { setData } from '../controllers/cards.js'

const router = express.Router();

router.post('/', setData);

export default router;
