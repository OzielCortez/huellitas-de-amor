const server = require("./src/app.js");
require('dotenv').config();
const { conn } = require("./src/db.js");
const fillHomes = require("./src/utils/fillHomes.js");
const fillPets = require("./src/utils/fillPets.js");
const port = process.env.port || 3000;

// Syncing all the models at once.
conn.sync({
  force: false}).then(() => {
  server.listen(port, () => {
    fillPets();
    // fillHomes()
    console.log(`%s listening at ${port}`); // eslint-disable-line no-console
  });
});
