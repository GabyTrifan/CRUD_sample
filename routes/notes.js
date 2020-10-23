const express = require('express');
const router = express.Router();
const Joi = require('joi'); // Used for input validation
const NModel = require("./models/main"); // Database Model

router.get('/',async (req,res) => {
	// fetch all Notes
	const notes = await NModel
	.find()
	.sort({time: 1})
	.select('-_id -_id');
	res.json(notes);
});

router.post('/', async (req, res) => {
	// Add note
	const { error } = validateNote(req.body); // result.error
	if(error) {
		// 400 Bad request
		res.status(400).json({err:error.details[0].message});
		return; 
	}
	const note = new NModel({
		content: req.body.content,
		name: req.body.name
	});
	try {
		await note.save();
		res.json({response:"Note stored successfully"});
	}
	catch (ex) {
		res.status(400).json({err:ex.message});
	}
});
router.delete('/:name', (req, res) => {
	// Delete Note

});
router.put('/:name', (req, res) => {

	// Update Note
});

function validateNote(Obj) {
	const schema = Joi.object().keys({
        name: Joi.string().min(3).required(),
        content: Joi.string().min(3).required()
	});

	return schema.validate(Obj);
}

router.get('/:name', (req, res) => {
	//get specific note
}); 

module.exports = router;