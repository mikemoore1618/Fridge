const Food = require('../models/food')

exports.showAll = (req,res) => {
    Food.find({}, (err, foods) =>{
        if (err) {
            res.json({ status: "fail", err})
        }
        else {
            res.json({ status: "success", payload: {foods}})
        }
    })
}

exports.create = (req, res) => {
    Food.create(req.body, (err, newFood) => {
        if(err) {
            res.json({status: "Failed", err})
        }
        else {
            res.json({ status: "Success", payload: { newFood } })
        }
    })
}