const router = require("express").Router()



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




module.exports = router