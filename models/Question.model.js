const { Schema, model } = require("mongoose");

const questionSchema = new Schema({
  Question: {
    type: String,
    required: [true, "Question is required."],
  },
  Answers: [
    {
      AnswerText: {
        type: String,
        required: [true, "AnswerText is required."],
      },
      CorrectAnswer: {
        type: Boolean,
        required: [true, "CorrectAnswer is required."],
      },
      IsChosen: {
        type: Boolean,
        required: [true, "IsChosen is required."],
      },
    },
  ],
  Category: {
    type: String,
    enum: ["HTML", "CSS", "Codingspiele 1", "Codingspiele 2"],
  },
  SubCategory: {
    type: String,
    required: [true, "SubCategory is required."],
  },
  StepNumber: {
    type: Number,
    required: [true, "StepNumber is required."],
  }
});

const Question = model("Question", questionSchema);

module.exports = Question;
