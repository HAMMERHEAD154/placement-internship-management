const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let applications = [];

app.post("/apply", (req, res) => {
    applications.push(req.body);
    res.send({ message: "Application added" });
});

app.get("/applications", (req, res) => {
    res.json(applications);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
