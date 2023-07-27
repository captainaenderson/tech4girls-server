const router = require("express").Router();
const Profile = require("../models/Profile.model")
const User = require("../models/User.model")




// POST profile to the database

router.post("/create-profile/:id", async (req, res) => {
    try {
      console.log(req.body);
      const userId = req.params.id
      const newProfile = {
        User: userId,
        ProfilePicture: req.body.ProfilePicture,
        Age: req.body.Age,
        JoinedClass: req.body.JoinedClass,
        AttendedClass: req.body.AttendedClass,
      }
      const profile = await Profile.create(newProfile);
      // const profile = await Profile.findOneAndUpdate({ User: userId }, req.body);
   
      const newUser = await User.findByIdAndUpdate(userId, {profile: profile._id})
      res.status(201).json(profile);
    } catch (error) {

      res.status(400).json({ error: "Failed to create question." });
    }
  });


  router.get('/profile/:_id', async (req, res) => {
    try {
      const userId = req.params._id;
      console.log('Versuche, Profil mit ID zu finden:', userId);
  
      // const profile = await Profile.findOne({ User: userId });
      const profile = await Profile.findById(userId);
      console.log('Gefundenes Profil:', profile);
  
      if (!profile) {
        return res.status(404).json({ error: 'Profil nicht gefunden' });
      }
  
      res.json(profile);
    } catch (error) {
      console.error('Fehler beim Abrufen des Profils:', error);
      res.status(500).json({ error: 'Fehler beim Abrufen des Profils' });
    }
  });
  





module.exports = router;

