
const express = require('express');
const mongoose = require('mongoose');

const dotenv = require('dotenv')
dotenv.config();
const app = require('./app');

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })	
.then((result) => app.listen(3000))
.catch((err) => console.log(err));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));

module.exports = app;