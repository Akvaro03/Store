const express = require(`express`);
const mongoose = require(`mongoose`);

const DatosSchema = new mongoose.Schema({
    tittle: { type: String},
    thumbnailUrl: { type: String},
    id: { type: Number},
    price: { type: Number }
});

module.exports = mongoose.model(`products`, DatosSchema);