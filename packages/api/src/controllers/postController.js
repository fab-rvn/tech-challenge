const { Post } = require("../models");

const createPost = async (req, res) => {
  const postData = req.body;
  const newPost = new Post(postData);

  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const fetchPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = { createPost, fetchPosts };
