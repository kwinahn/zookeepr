const router = require('express').Router();
const animalRoutes = require('../apiRoutes/animalRoutes');

router.use(animalRoutes);

//use zookeeper
router.use(require('./zookeeperRoutes'));

module.exports = router;