const mongoose = require("mongoose")

const subscriptionSchema = new mongoose.Schema({
    subName: {
        type: String,
        required: true
    },
    subCategory: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User"
    }
})

const Subscription = mongoose.model("Subscription", subscriptionSchema)

module.exports = Subscription