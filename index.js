import express from "express";
import morgan from "morgan";

const app = express();
const port = 4000;

// Middleware function
function logger(req, res, next) {
  console.log(req.query);
  console.log(req.body);

  next();
}

// Set EJS as the view engine
app.set("view engine", "ejs");

// Middleware
app.use(express.json());
app.use(logger);
app.use(express.static("public"));

// Routes
app.get("/", (req, res) => {
  res.json({ message: "Body received" });
});

app.get("/ejs", (req, res) => {
  res.render("index", { data: "hello" }); // Corrected
});

app.post("/create/", (req, res) => {
  let test = req.body; // Get body data
  let query = req.query; // Get query parameters
  res.json("Successful");
});

// Start server
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
