const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Cloud Native Service A Running");
});

app.listen(3000, () => console.log("Service A running"));
