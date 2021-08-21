const express = require('express');

const app = express();


app.use('/', function(req, res, next){
    console.log(req);
    next();
},express.static('./public'));


app.use('/sample', function(req, res, next){
    res.json({message:'welcome'})
})


app.listen(6888, function(err){
    console.log('port is listening to port 6888');
});