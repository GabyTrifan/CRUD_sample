// Debuggers
const debug= require('debug')('app:startup');

// Modules Necessary for the app
const express = require('express');
const app = express();

// Third party Middleware
const morgan = require('morgan');
const helmet = require('helmet');


app.use(express.json()); // use JSON Middleware
app.use(helmet());

// Routes Modules
const notes = require('./routes/notes');
const home = require('./routes/home');


 
// Routes
app.use('/notes', notes);
app.use('/', home);

if (app.get('env') === 'development') {
	app.use(morgan('tiny'));
	debug(`Morgan enabled...`); // kinda console.log()
}

const port = process.env.PORT || 3000;
app.listen(port, () => 
    console.log('\x1b[36m'+`Listening on port ${port}...`+'\x1b[0m'));