const router = require('express').Router();

const ownerRoutes = require('./owners-routes');

router.use('/owner', ownerRoutes);

module.exports = router;