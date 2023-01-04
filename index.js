const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 8080;


const jsonParser = bodyParser.json({});
app.use(jsonParser);

// //use routes
app.use('/cart', require('./src/routes/cart'));

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});