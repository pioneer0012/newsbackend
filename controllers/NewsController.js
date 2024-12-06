import News from '../models/News.js';

// Get all news
export const getAllNews = async (req, res) => {
  try {
    const news = await News.find().sort({ timestamp: -1 });
    res.json(news);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching news' });
  }
};
//new api

// Post a news
export const createNews = async (req, res) => {
  try {
    const { title, description } = req.body;

    if (!title || !description) {
      return res.status(400).json({ message: 'Title and description are required' });
    }

    const newNews = new News({ title, description });
    await newNews.save();
    res.status(201).json({ message: 'News created successfully', news: newNews });
  } catch (error) {
    res.status(500).json({ message: 'Error creating news' });
  }
};
