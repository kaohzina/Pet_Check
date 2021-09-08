const router = require('express').Router();
const { Owner } = require('../../models');

// GET /api/users
router.get('/', (req, res) => {
  Owner.findAll()
    .then(dbOwnerData => res.json(dbOwnerData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// GET /api/users/1
router.get('/:id', (req, res) => {

});

// POST /api/users
router.post('/', (req, res) => {

});

// PUT /api/users/1
router.put('/:id', (req, res) => {

});

// DELETE /api/users/1
router.delete('/:id', (req, res) => {

});

module.exports = router;