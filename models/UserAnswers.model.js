const { Schema, model } = require("mongoose");

const UserAnswersSchema = new Schema(
    {
        Question: {
            type: Schema.Types.ObjectId, ref: "Question"
        },
        Answer: {
            type: String,
            required: true
        },
    
        User: [{
            type: Schema.Types.ObjectId, ref: "User"
        }],
      },
      
    
  );
  
  const UserAnswers = model("UserAnswers", UserAnswersSchema);
  
  module.exports = UserAnswers;