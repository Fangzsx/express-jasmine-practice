const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(201).send('success test');
})

router.get('/errortest', (req, res) => {
    res.status(500).send({ "message" : "this is an error"});
})


module.exports = router