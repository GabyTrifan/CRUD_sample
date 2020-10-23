const mongoose = require('mongoose');
// Db Connection
mongoose
    .connect(process.env.DATABASE,
                {
                    useNewUrlParser: true,
                    useUnifiedTopology: true
                })
    .then(() => console.log("Connected to Database..."))
    .catch(err => console.error(`Can't connect`));

const DbSchema = new mongoose.Schema({
    	name: { 
		type: String, 
		required: true,
		minlength: 3,
		maxlength: 255, 
	},
	content: {
		type: String,
		required: true,
		minlength:1
	},
	date: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Notes',DbSchema);
	