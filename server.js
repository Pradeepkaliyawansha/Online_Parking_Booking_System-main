const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const session = require("express-session");
const dbConnection = require("./client/dbconnection");
const MongoStore = require("connect-mongo")(session);
const passport = require("./client/src/utils/passport");
const routes = require("./routes/api");
const mongoose = require("mongoose");
const app = express();


const PORT = process.env.PORT || 3001;
const user = require("./routes/user");
// const listing = require("./routes/api/listing");

const dotenv = require("dotenv");

dotenv.config();

// Define middleware here
app.use(cors());

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
    bodyParser.urlencoded({
        extended: false
    })
);



// // Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//     app.use(express.static("client/build"));
// }

app.use(
    session({
        secret: "na-zdorove", //pick a random string to make the hash that is generated secure
        store: new MongoStore({ mongooseConnection: dbConnection }),
        resave: false, //required
        saveUninitialized: false //required
    })
);
app.use(passport.initialize());
app.use(passport.session()); // calls serializeUser and deserializeUser

// Add routes, both API and view

app.use("/api/", routes);

app.use("/user", user);

// app.get("*", function(req, res) {
//     res.sendFile(path.join(__dirname, "client/build/index.html"), function(err) {
//         if (err) {
//             res.status(500).send(err);
//         }
//     });
// });

// // Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//     app.use(express.static("client/build"));
// }

//Database connection
// connectDB().then(
//     () => console.log("Database Connected...."),
//     (error) => console.log(error)
// );

// Connect to the Mongo DB
const URI = process.env.MONGODB_URI;
mongoose.connect(URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
        console.log("Mongodb Connection Success!")
    })
    // Start the API server
app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});