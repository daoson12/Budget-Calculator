// Install express server
const express = require('express');
const path = require('path');
const app = express();
// Serve only the static yes files form the dist directory
app.use(express.static(__dirname + '/dist/budget-calculator-app'));
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/covid-app/budget-calculator-app'));
});
// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);