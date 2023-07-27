const router = require("express").Router();
const UserAnswers = require("../models/UserAnswers.model")


// POST questions to the database

router.post("/", async (req, res) => {
    try {
      const userAnswers = await UserAnswers.create(req.body);
      res.status(201).json(userAnswers);
    } catch (error) {
      res.status(400).json({ error: "Failed to create question." });
    }
  });

// GET a question

module.exports = router;