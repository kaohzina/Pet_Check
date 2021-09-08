const router = require('express').Router();

const ownerRoutes = require('./owners-routes');
const petRoutes = require('./pets-routes');

router.use('/owner', ownerRoutes);
router.use('/pet', petRoutes);

module.exports = router;