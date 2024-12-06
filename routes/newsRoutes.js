import express from 'express';
import { getAllNews, createNews } from '../controllers/NewsController.js';

const router = express.Router();

// GET /api/news - Fetch all news
router.get('/', getAllNews);

// POST /api/news - Create news
router.post('/', createNews);

export default router;
