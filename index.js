const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("<h2 style='font-family:sans-serif;'>Hello there!!!</h2>");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}...`);
});
