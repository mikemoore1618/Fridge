const
    express = require('express'),
    router = express.Router(),
    Foods = require('../controllers/foods')

router.get('/', Foods.showAll);
router.get('/:id', Foods.showFood);
router.post('/', Foods.create);
router.patch('/foods/:id', Foods.update);
router.delete('foods/:id', Foods.deleteOne);



module.exports = router;