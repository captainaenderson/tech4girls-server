// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require("dotenv").config();

// ℹ️ Connects to the database
require("./db");

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require("express");

const app = express();

// ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware
require("./config")(app);

// 👇 Start handling routes here
const indexRoutes = require("./routes/index.routes");
app.use("/api", indexRoutes);


// Question Route

const questionsRoute = require("./routes/questions.routes")
app.use("/api/questions", questionsRoute)


//UserAnswer Route

const userAnswersRoute = require("./routes/userAnswers.routes")
app.use("/api/userAnswers", userAnswersRoute)

// Auth Route

const authRoutes = require("./routes/auth.routes");
app.use("/auth", authRoutes);

//Profile Route
const profileRoute = require("./routes/profile.routes")
app.use("/api/profile", profileRoute)

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);

module.exports = app;
