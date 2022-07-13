const express = require("express")
const { getPeople, getPerson } = require("./peopleRepo");

const app = express();
app.use(express.json());
app.use(express.static("../client"));

app.get("/api/people", (req, res) => {
  const body = getPeople();
  res.status(200).send(body);
})
app.get("/api/people/:id", (req, res) => {
  const { id } = req.params;
  const body = getPerson(Number(id));
  res.status(200).send(body);
})

app.listen(8080, () => {
  console.log("Listening on port 8080");
});
