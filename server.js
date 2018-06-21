const 
express = require('express')
app = express(),
logger = require('morgan'),
mongoose = require(mongoose),
PORT = 3000,
foodRouter = require('.routers/foodRouter')


// connect to db
mongoose.connect('mongodb:/localhost/breeder', (err) => {
    console.log(err || "successfully")
})

app.user(logger('dev'));
app.use(express.json());

app.get("/foods", (req, res) => {
    Food.find({}, (err, foodsFromDB) => {
      res.json(foodsFromDB)
    })
  })

app.get("/foods/:id", (req, res) => {
    Food.findById(req.params.id, (err, foodFromDB) => {
      res.json(foodFromDB)
    })
  })

app.listen(PORT), (err) => {
    console.log(err || `Server running on ${PORT}`)
};