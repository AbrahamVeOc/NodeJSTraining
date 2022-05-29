// requieres express para utilizarlo despues
const express = require("express");
const db = require("./models");

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/createuser", async (req, res) => {
  const userDB = db.sequelize.models.User;
  const user = await userDB.create({
    name: req.body.name,
    city: req.body.city,
    dog: req.body.dog,
    telephone: req.body.telephone,
    comunist: req.body.comunist,
  });

  let users = await userDB.findAll();
  res.send(users);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
