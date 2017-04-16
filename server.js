const express = require('express');
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

const index = require("./routes/index");
const users = require("./routes/users");

app.use("/", index);
app.use("/user", users);

app.listen(3000, () => {
  console.log(`Server started!`);
})
