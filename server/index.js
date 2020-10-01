const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(require('./Routes'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server has been started at port ${PORT}`));
