const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserModal = require("./moduls/Users");
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/crud");

app.get("/", (req, res) => {
  UserModal.find({})
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.get("/getUser/:id", (req, res) => {
  const id = req.params.id;
  UserModal.findById({ _id: id })
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.put("/updateUser/:id", (req, res) => {
  const id = req.params.id;
  UserModal.findByIdAndUpdate(
    { _id: id },
    { name: req.body.name, email: req.body.email }
  )
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.delete("/deleteUser/:id", (req, res) => {
  const id = req.params.id;
  UserModal.findByIdAndDelete({ _id: id })
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.post("/createUser", (req, res) => {
  UserModal.create(req.body)
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.listen(process.env.PORT || 3002, () => {
  console.log("server is running");
});
