import express from 'express';
import { getAllNews, createNews ,updateNews} from '../controllers/NewsController.js';

const router = express.Router();

// GET /api/news - Fetch all news
router.get('/', getAllNews);

// POST /api/news - Create news
router.post('/', createNews);

// UPDATE /api/news - UPDATE news
router.put('/:id',updateNews);

export default router;
