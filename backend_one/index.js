const express = require("express");
const app = express();
app.get("/", (reg, res) => {
    res.send("Hello World");
});
app.listen(3000, () => console.log("Server is listening to port 3000"));