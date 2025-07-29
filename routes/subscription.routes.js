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
        const newSubscription = new Subscription({
            subName: req.body.subName,
            subCategory: req.body.subCategory,
            price: req.body.price,
            startDate: req.body.startDate,
            endDate: req.body.endDate,
            user: req.session.user._id
        })

        await newSubscription.save()
        res.redirect("/subscriptions")
    }
    catch(error){
        console.log(error)
    }
})

router.get("/:id", async (req,res) => {
    try{
        const foundSubscription = await Subscription.findById(req.params.id)
        res.render("subscriptions/subscription-details.ejs", {foundSubscription})
    }
    catch(error){
        console.log(error)
    }
})

router.get("/:id/edit", async (req,res) => {
    try{
        const foundSubscription = await Subscription.findById(req.params.id)
        res.render("subscriptions/edit-subscription.ejs", {foundSubscription})
    }
    catch(error){
        console.log(error)
    }
})

router.put("/:id", async (req,res) => {
    try{
        await Subscription.findByIdAndUpdate(req.params.id, req.body)
        res.redirect(`/subcriptions/${req.params.id}`)
    }
    catch(error){
        console.log(error)
    }
})


module.exports = router