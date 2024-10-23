const mongoose = require('mongoose');
const dotenv = require("dotenv");
mongoose.Promise = global.Promise;
dotenv.config();
const uri = (process.env.MONGODB_URI);

mongoose.connect(uri).then(
    () => {
        console.log('Connected to Mongo');

    },
    err => {
        console.log(err);
    }
);

module.exports = mongoose.connection