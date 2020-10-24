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
router.delete('/:name',async (req, res) => {
	// Delete Note
	const note = await NModel.find({name: req.params.name});
	if (Object.keys(note).length === 0) {res.status(400).json({err:"Note not found"});return;}
	await NModel.deleteOne({name: req.params.name});
	res.json({status:"Note Deleted Successfully"});
});
router.put('/:name',async (req, res) => {
	// Update Note, you'll need both name and content

	const { error } = validateNote(req.body); // result.error
	if(error) {
		// 400 Bad request
		res.status(400).json({err:error.details[0].message});
		return; 
	}
	try {
		const note = await NModel.updateOne({name: req.params.name}, {
			$set: {
				name: req.body.name,
				content: req.body.content
			}
		});
	
		res.json({status: "Note updated successfully"});
	}
	catch (ex) {
		res.json({err: ex.message});
	}
});

function validateNote(Obj) {
	const schema = Joi.object().keys({
        name: Joi.string().min(3).required(),
        content: Joi.string().min(3).required()
	});

	return schema.validate(Obj);
}

router.get('/:name',async (req, res) => {
	//get specific note
	const note = await NModel
		.find({name: req.params.name})
		.limit(1)
		.select("-_id");
		if(note)
			res.json(note);
		else
			res.status(404).json({err:"Note not found"});
}); 

module.exports = router;