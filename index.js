import express, { json } from "express";
import morgan from "morgan";
const app = express();
const port = 4000;

function logger(req, res, next) {
  console.log(req.query);
  console.log(req.body);
  console.log("May nagrerequest na tanga");
  next();
}

app.use(express.json());
app.use(logger);

app.use(morgan("tiny"));

app.get("/", (req, res) => {
  // console.log("Request Body:", req.query); // Logs the body data
  res.json({ message: "Body received" });
});
app.get("/ejs", (req, res) => {
  res.render("index.ejs", { data: "hello" });
});
app.post("/create/", (req, res) => {
  let test = req.body; // to get the body
  let query = req.query; // to get the params
  // console.log(test);
  // console.log(query);
  res.json("Successful");
});

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
