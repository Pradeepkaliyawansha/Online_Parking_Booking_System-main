const mongoose = require("mongoose");
const Schema = mongoose.Schema;
mongoose.promise = Promise;

const listingSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: "User" },
    title: { type: String, unique: false, required: false },
    parkingtype: { type: String, unique: false, required: false },
    photo: { type: String, unique: false, required: false },
    price: { type: Number, unique: false, required: false },
    address: { type: String, unique: false, required: false },
    city: { type: String, unique: false, required: false },
    state: { type: String, unique: false, required: false },
    zipcode: { type: Number, unique: false, required: false },
    streetName: { type: String, unique: false, required: false },
    neighborhood: { type: String, unique: false, required: false },
    earning: { type: Number, unique: false, required: false, default: 0 },
    earnings: { type: [{}], unique: false, required: false, default: [] },
    location: {
        type: {
            type: String,
            enum: ["Point"],
            required: false
        },
        coordinates: {
            type: [Number]
        }
    }
});

listingSchema.index({ location: "2dsphere" });

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;