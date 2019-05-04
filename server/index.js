const express = require('express');
const app = express();
const PORT = 3000;
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

app.use(bodyParser());
app.use(cors());
app.use(morgan());

app.use('/', express.static(__dirname + '/../client/dist'));
app.use('/bundle.js', express.static(__dirname + '/../client/dist/bundle.js'));

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}!`);
})