const express = require('express');
// const { Db } = require('mongodb');
const dotenv = require('dotenv').config();
const app = express();
const connectToMongo = require('./db');
const port = process.env.PORT || 5000;


connectToMongo();

// now we will create routes for user
app.use('/api/user',require('./routes/userRoutes'));








app.listen(port,() => {
    console.log(`Server running on port ${port}`);
});



