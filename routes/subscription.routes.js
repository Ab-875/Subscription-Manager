const router = require("express").Router()
const Subscription = require("../models/Subscription")


router.get("/", (req, res) => {
    try {
        res.render("subscriptionS/all-subscriptions")
    }
    catch (error) {
        console.log(error)
    }
})

router.get("/new", (req,res) => {
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