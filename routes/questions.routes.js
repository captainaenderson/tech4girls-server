const router = require("express").Router();
const Question = require("../models/Question.model")


// POST questions to the database

// THe user opens the questions page (START BUTTON)
// We need to get questions
// Add conditions to get questions based on the level of the student // level // age...


router.post("/", async (req, res) => {
    try {
      const question = await Question.create(req.body);
      res.status(201).json(question);
    } catch (error) {
      res.status(400).json({ error: "Failed to create question." });
    }
  });

// GET a question
//router should get the category from the shema  and return the question and the answers


router.get('/:category', async (req, res) => {
  const { category } = req.params;
  try {
    const questions = await Question.find({ Category: category });
    if (questions) {
      res.status(200).json(questions);
    } else {
      res.status(404).json({ message: 'Keine Fragen in dieser Kategorie gefunden' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Es gab einen Fehler bei der Abfrage der Datenbank', error: error });
  }
});



module.exports = router;