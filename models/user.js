const express = require('express');
const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const UserSchema = new Schema({name: String, email: String});

var User = mongoose.model('User', UserSchema);
module.exports = User;