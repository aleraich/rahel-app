const express = require('express');
const router = express.Router();
const Shoe = require('../models/Shoe');

router.post('/shoes', async (req, res) => {
    try {
        const newShoe = await Shoe.create(req.body);
        res.status(201).json(newShoe);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.get('/shoes', async (req, res) => {
    try {
        const shoes = await Shoe.findAll();
        res.status(200).json(shoes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;