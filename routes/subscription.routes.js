const router = require("express").Router()



router.get("/", (req, res) => {
    try {
        res.render("subscriptionS/all-subscriptions")
    }
    catch (error) {
        console.log(error)
    }
})


module.exports = router