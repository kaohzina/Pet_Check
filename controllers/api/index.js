const router = require('express').Router();

const ownerRoutes = require('./owners-routes');
const petRoutes = require('./pets-routes');

router.use('/owners', ownerRoutes);
router.use('/pets', petRoutes);

module.exports = router;