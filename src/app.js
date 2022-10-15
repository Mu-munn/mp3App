const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const router = require('./models/routes/v1');
app.use('/api/v1', router);

// start server
app.listen(port);
console.log(`listen on : ${port}`);
