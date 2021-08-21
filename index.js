const express = require('express');

const app = express();



app.get('/', express.static('./public'));


app.listen(6888, function(err){
    console.log('port is listening to port 6888');
});