const express = require('express');
const router = express.Router();
const Joi = require('joi'); // Used for input validation
const mongoose = require('mongoose');

router.get('/', (req, res) => {
    // fetch all courses
});

router.post('/', (req, res) => {
	// Add note

});
router.delete('/:id', (req, res) => {
	// Delete Note

});
router.put('/:id', (req, res) => {

	// Update Note
});

function validateCourse(Obj) {
	const schema = Joi.object().keys({
        name: Joi.string().min(3).required(),
        text: Joi.string().min(3).required()
	});

	return schema.validate(Obj);
}

router.get('/:id', (req, res) => {
	//get specific note
}); 

module.exports = router;