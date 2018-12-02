const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
require("dotenv").config({ path: "variables.env" }); // Get variables from varibles.env
const createServer = require("./createServer");
const db = require("./db");

const server = createServer();

// Express middleware to handle cookies(JWT)
server.express.use(cookieParser());
// decode the JWT so we can get the users id on each request
server.express.use((req, res, next) => {
  const { token } = req.cookies;
  // if token, decode token
  if (token) {
    const { userId } = jwt.verify(token, process.env.APP_SECRET);
    // put the userId onto the req from future requests to access
    req.userId = userId;
  }
  next(); // allow us to add on to the request
});
// Express middleware to populate current users

server.start(
  {
    cors: {
      credentials: true,
      origin: process.env.FRONTEND_URL
    }
  },
  deets => {
    console.log(`Server is now running on port 
    http://localhost:${deets.port}`);
  }
);
