const express = require('express');
const bodyParser = require('body-parser');
const PORT = 3500;

const app = express();

app.use(express.static(__dirname + '/../public'));
app.use(bodyParser.json());

app.listen(PORT, () => console.log(`footer connected on ${PORT}`));