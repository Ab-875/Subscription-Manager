// imports
const express = require("express") 
const app = express() 
const dotenv = require("dotenv").config() 
const morgan = require("morgan")
const methodOverride = require("method-override")
const conntectToDB = require('./config/db')
const authRoutes = require("./routes/auth.routes")
const subscriptionRoutes = require("./routes/subscription.routes")
const session = require("express-session")
const passUserToView = require('./middleware/passUserToView')
const isSignedIn = require("./middleware/isSignedIn")








// Middleware
app.use(express.static('public')); 
app.use(express.urlencoded({ extended: false })); 
app.use(methodOverride("_method")); 
app.use(morgan("dev")) 
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
); 
app.use(passUserToView) 
app.set("view engine", "ejs") 



conntectToDB()









app.use("/auth",authRoutes)
app.use(isSignedIn) //all your protected routes go below this middleware
// Routes go here
app.use("/subscriptions", subscriptionRoutes)








const port = process.env.PORT || 3000

const server = app.listen(port,()=>{
    console.log("Listening on port " + port)
}) // Listen on port 3000



server.on("error", (err) => { //console.log() an error if port 3000 is in use
  if (err.code === "EADDRINUSE") {
    console.error(` Port ${port} is already in use.`);
  } else {
    console.error(" Server error:", err.message);
  }
});