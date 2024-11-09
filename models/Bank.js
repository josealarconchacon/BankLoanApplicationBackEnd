const mongoose = require("mongoose");

const bankSchema = new mongoose.Schema({
    name: String
});

module.exports = mongoose.model("Bank", bankSchema);