const router = require('express').Router();

const ownerRoutes = require('./owners-routes');
const petRoutes = require('./pets-routes');
const descriptionRoutes = require('./description-routes');

router.use('/owner', ownerRoutes);
router.use('/pet', petRoutes);
router.use('/description', descriptionRoutes);

module.exports = router;