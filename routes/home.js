const express = require('express');
const router = express.Router();
router.get('/', (req, res) => {
	res.send("Watch out man, this is the index =))");
});
module.exports = router;