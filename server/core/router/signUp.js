const signUp = require("../controllers/signUp/signUp");
const router = require("express").Router();

router.post("/api/signup", signUp);

module.exports = router;