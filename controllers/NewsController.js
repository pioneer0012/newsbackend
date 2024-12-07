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

export const updateNews = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    // Validate status value
    if (!['pending', 'published', 'rejected'].includes(status)) {
      return res.status(400).json({ message: 'Invalid status value' });
    }

    const updatedNews = await News.findByIdAndUpdate(
      id,
      { status },
      { new: true, runValidators: true } // Return the updated document and validate input
    );

    if (!updatedNews) {
      return res.status(404).json({ message: 'News item not found' });
    }

    res.json({ message: 'News updated successfully', news: updatedNews });
  } catch (error) {
    res.status(500).json({ message: 'Error updating news' });
  }
};

