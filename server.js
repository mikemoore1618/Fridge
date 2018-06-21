const 
express = require('express')
app = express(),
logger = require('morgan'),
mongoose = require(mongoose),
PORT = 3000,
foodRouter = require('.routers/foodRouter')


// connect to db
mongoose.connect('mongodb:/localhost/fridge', (err) => {
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
    Food.findById({_id: req.params.id}, (err, foodsFromDB) => { 
        if(err) return console.log(err)
        res.json(foodsFromDB); 
    });
})

app.patch('/foods/:id', (req, res) => {
    Food.findById({_id: req.params.id}, (err, foodsFromDB) => { 
        if(err) return console.log(err)
    }).update(req.body, (err, foodsFromDB) => {
        if(err) return console.log(err)
        res.json(foodsFromDB)
    })
})

app.post("/foods", (req, res) => {
   Food.create(req.body, (err, newFood) => {
       if(err) return console.log(err)
       res.json({ message: "food created.", food: newFood })
   })
})

app.use(logger('dev'));
app.use(express.json());


app.listen(PORT), (err) => {
    console.log(err || `Server running on ${PORT}`)
};