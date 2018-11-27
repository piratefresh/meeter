require("dotenv").config({ path: "variables.env" }); // Get variables from varibles.env
const createServer = require("./createServer");
const db = require("./db");

const server = createServer();

// Express middleware to handle cookies(JWT)
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
