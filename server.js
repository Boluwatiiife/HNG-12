const express = require("express");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT || 4000;

app.use(cors());

app.get("/", (req, res) => {
  const email = "tundelawalb@gmail.com";
  const current_datetime = new Date().toISOString();
  const github_url = "https://github.com/Boluwatiiife/hng-12.git";

  const response = {
    email: email,
    current_datetime: current_datetime,
    github_url: github_url,
  };
  res.json(response);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
