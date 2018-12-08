const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/marco', function (req, res) {
  return res.send("polo");
});
app.use(express.static(path.join(__dirname, '../dist')));
app.listen(port, () => console.log(`Listening on port ${port}`));
