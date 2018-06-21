const
    express = require('express'),
    router = express.Router(),
    Foods = require('../controllers/foods')

router.get('/', Foods.showAll);
// router.get('/:id', Foods.showFood);
router.post('/', Foods.create);

module.exports = router;