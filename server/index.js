const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const port = 3000;

app.use(morgan('dev'));
app.use(express.static('public'));

app.listen(port, () => console.log(`Proxy Server for drop.com, running on port ${port}`));