const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get('/marco', function (req, res) {
  return res.send("polo");
});
app.use(express.static(path.join(__dirname, '../dist')));
app.listen(port, () => console.log(`Listening on port ${port}`));