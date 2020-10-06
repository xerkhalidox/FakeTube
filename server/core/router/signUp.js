const router = require("express").Router();

router.get("/", (req, res) => {
    res.status(200).json("Success");
});

module.exports = router;