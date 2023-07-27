const { Schema, model } = require("mongoose");

const profileSchema = new Schema(
    {
        User: {
            type: Schema.Types.ObjectId, ref: "User",
    
        },

        ProfilePicture: {
            type: String,
            // required: true
        },
        JoinedClass: {
            type: Boolean,
            required: true
        },
        AttendedClass: {
            type: String,
            enum: ["HTML", "CSS", "Codingspiele 1", "Codingspiele 2"], 
        },
        Age: {
            type: Number,
            
        }
      },
      
    
  );
  
  const Profile = model("Profile", profileSchema);
  
  module.exports = Profile;