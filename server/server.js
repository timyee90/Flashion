const express = require('express');
const path = require('path');
const compression = require('compression');

const app = express();
const port = process.env.PORT || 3000;

app.use(compression());
app.use(express.static(path.join(__dirname, '../dist')));
app.listen(port, () => console.log(`Listening on port: ${port}`));
