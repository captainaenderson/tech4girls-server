const router = require("express").Router();
const Quiz = require("../models/Quiz.model")


// POST questions to the database

router.post("/", async (req, res) => {
    try {
      const question = await Quiz.create(req.body);
      res.status(201).json(question);
    } catch (error) {
      res.status(400).json({ error: "Failed to create question." });
    }
  });

// GET a question

module.exports = router;