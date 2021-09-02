const express = require('express');
const uuid = require('uuid');
const router = express.Router();
const members = require('../../Members');


// This files purpose is to Create, Read, Update, Delete. 

// Start of CREATE
// Create a single pet
router.post('/', (req, res) => {
    const newMember = {
        id: uuid.v4(),
        name: req.body.name,
        animal: req.body.animal,
        breed: req.body.breed,
        age: req.body.age,
        desc: req.body.desc,
        adoptable: req.body.adoptable,
        status: 'active'
    }

    // check if the email is sent with the request
    if (!newPet.name || !newPet.animal ) {
        // in order to avoid an error add a return keyword otherwise the browser will look for an else
        return res.status(400).json({ msg: 'Please include a name and email' });
    }

    // taking the hard-coded members array and respond with the array of members which includes the new entry
    members.push(newMember);
    // res.json(members);
    // a redirect so the json doesn't render on the page
    res.redirect('/');
});


// Start of the READ
// Read all of the pets
router.get('/', (req, res) => res.json(members));

// app.get('/', (req, res) => {
//     // this is not ideal because we would have to declare a route for every webpage
//     res.sendFile(path.join(__dirname, 'public', 'index.html'))
// });

// Read a single pet 
router.get('/:id', (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id));

    if (found) {
        res.json(members.filter(member => member.id === parseInt(req.params.id)));
    } else {
        res.status(400).json({ msg: `No member with the id of ${req.params.id}` });
    }
});

// Start of UPDATE
// Update a single pets information
router.put('/:id', (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id));

    if (found) {
        const updMember = req.body;
        members.forEach(member => {
            if (member.id === parseInt(req.params.id)) {
                // updadated member name else keep the old data
                member.name = updMember.name ? updMember.name : member.name;
                member.email = updMember.email ? updMember.email : member.email;

                res.json({ msg: 'Member updated', member });
            }
        });
    } else {
        res.status(400).json({ msg: `No member with id of ${req.params.id}` });
    }
})

// Start of DELETE
// Delete a pet
router.delete('/:id', (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id));

    if (found) {
        res.json({ msg: 'Member deleted', members: members.filter(member => member.id !== parseInt(req.params.id))});
    } else {
        res.status(400).json({ msg: `No member with the id of ${req.params.id}` });
    }
});

module.exports = router;