const mongoose = require("mongoose");

const ClassSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.models.Class || mongoose.model('Class', ClassSchema);
