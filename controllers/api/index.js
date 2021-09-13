const router = require('express').Router();

const ownerRoutes = require('./owners-routes');
const petRoutes = require('./pets-routes');
const appointmentRoutes = require('./appointment-routes');

router.use('/owner', ownerRoutes);
router.use('/pet', petRoutes);
router.use('/appointmentRoutes', appointmentRoutes);

module.exports = router;