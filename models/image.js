const express = require('express');
const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const imageSchema = new Schema({image: String});

var Image = mongoose.model('Image', imageSchema);
module.exports = Image;