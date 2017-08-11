const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const htmlRouter = require('./app/routes/htmlRoutes');
const apiRouter = require('./app/routes/apiRoutes');
// create our express instance on our app var
const app = express();
// set our port to 3000 OR process.env.PORT so heroku can use what ever port it chooses
const port = process.env.PORT || 3000;
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use(express.static(path.join(__dirname, 'app/public')));

app.use('/', htmlRouter)
app.use(apiRouter)
app.listen(port, () => console.log('Server Started on port:' + port));
