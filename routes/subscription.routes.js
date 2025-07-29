const router = require("express").Router()
const Subscription = require("../models/Subscription")
const User = require("../models/User")


router.get("/", async (req, res) => {
    try {
        const foundSubscription = await Subscription.find()
        res.render("subscriptionS/all-subscriptions", {foundSubscription})
    }
    catch (error) {
        console.log(error)
    }
})

router.get("/new", async (req,res) => {
    try{
        res.render("subscriptions/new-subscription")
    }
    catch(error){
        console.log(error)
    }
})

router.post("/", async (req,res) => {
    try{
        const newSubscription = await Subscription.create(req.body)
        res.redirect("/subscriptions")
    }
    catch(error){
        console.log(error)
    }
})


module.exports = router