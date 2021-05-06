const express = require('express');
const mongoose = require('mongoose');
const User = require('../model/User');
const router = express.Router();

// Get users
router.get('/', (req, res) => {
    User.find()
    .then(users => res.json(users) )
});

//Post user
router.post('/', (req, res) => {
    const newTeam = new User({
        firstName: req.body.firstName,
        lastName: req.body.firstName
    });
    newTeam.save().then(user => res.json(user));
});

//Delete user
router.delete('/:id', (req, res) => {
    User.findById(req.params.id)
    .then(user => user.remove().then(() => res.json({success: true})))
    .catch(err => res.status(404).json({success: false}));
})

//Find user by ID
router.get('/:id', (req, res) => {
    User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(err => res.status(404).json({success: false}));
})

module.exports = router;