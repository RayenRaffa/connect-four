var express = require('express');

var app = express();

app.use(express.static('client/dist'));

var PORT = process.env.PORT || 5500;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT} ..`)
}); 