const 
express = require('express')
app = express(),
logger = require('morgan'),
mongoose = require(mongoose),
PORT = 3000,
dogRouter = require('./routers/dogRouter')

// connect to db
mongoose.connect('mongodb:/localhost/breeder', (err) => {
    console.log(err || "successfully")
})



app.user(logger('dev'));
app.use(express.json());

app.use('/api/dogs', dogRouter);





app.listen(PORT), (err) => {
    console.log(err || `Server running on ${PORT}`)
};