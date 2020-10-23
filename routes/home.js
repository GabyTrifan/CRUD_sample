const express = require('express');
const router = express.Router();
router.get('/', (req, res) => {
	res.send({
        message: "Watch out man, this is the index =))"
    });
});
module.exports = router;