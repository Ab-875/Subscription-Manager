const router = require("express").Router()
const Subscription = require("../models/Subscription")
const User = require("../models/User")


router.get("/", async (req, res) => {
    try {
        const foundSubscription = await Subscription.find({user: req.session.user._id}).sort({ endDate: 1})
        res.render("subscriptionS/all-subscriptions", {foundSubscription})
    }
    catch (error) {
        console.log(error)
    }
})

router.get("/entertainment", async (req,res) => {
    try{
        const filter = await Subscription.find({
            user:req.session.user._id,
            subCategory: "Entertainment"
        }).sort({ endDate: 1})

        res.render("subscriptions/all-subscriptions.ejs", {foundSubscription: filter})
    }
    catch(error){
        console.log(error)
    }
})

router.get("/fitness", async (req,res) => {
    try{
        const filter = await Subscription.find({
            user:req.session.user._id,
            subCategory: "Fitness & Health"
        }).sort({ endDate: 1})

        res.render("subscriptions/all-subscriptions.ejs", {foundSubscription: filter})
    }
    catch(error){
        console.log(error)
    }
})

router.get("/ecommerce", async (req,res) => {
    try{
        const filter = await Subscription.find({
            user:req.session.user._id,
            subCategory: "E-Commerce"
        }).sort({ endDate: 1})

        res.render("subscriptions/all-subscriptions.ejs", {foundSubscription: filter})
    }
    catch(error){
        console.log(error)
    }
})

router.get("/applications", async (req,res) => {
    try{
        const filter = await Subscription.find({
            user:req.session.user._id,
            subCategory: "Applications"
        }).sort({ endDate: 1})

        res.render("subscriptions/all-subscriptions.ejs", {foundSubscription: filter})
    }
    catch(error){
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
        res.redirect(`/subscriptions/${req.params.id}`)
    }
    catch(error){
        console.log(error)
    }
})

router.delete("/:id", async (req,res) => {
    try{
        await  Subscription.findByIdAndDelete(req.params.id)
        res.redirect("/subscriptions")
    }
    catch(error){
        console.log(error)
    }
})


module.exports = router