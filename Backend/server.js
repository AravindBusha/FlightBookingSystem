const express = require("express");
const user = require("./routes/user.js");
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

app.use('/user', user);
const CONNECTION_URL = "mongodb+srv://aravind:1234@cluster0.c99kw.mongodb.net/?retryWrites=true&w=majority"
const PORT = 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));
