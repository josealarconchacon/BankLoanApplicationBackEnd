const express = require("express");
const Bank = require("../models/Bank");

const router = express.Router();

router.get("/banks", async (req, res) => { 
    try {
        const bank = await Bank.find({}, 'name');
        res.json(bank);

    } catch (error) {
        res.status(500).json({ error: 'Error fetching bank names' });
    }
});

module.exports = router;