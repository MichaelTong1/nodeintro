function sayHello(name) {
	console.log('Hello ' + name);
}

sayHello('Michael!');

// Using a created module

const Logger = require('./logger');
console.log('Welcome! I have created a logger module!');
console.log('Next is information about the filename from the built in path module.');

// Using built in modules

// Path Module

const path = require('path');
var pathObj = path.parse(__filename); 
console.log(pathObj); 

// Operating System Module 

const os = require('os');
var totalMemory = os.totalmem();
var freeMemory = os.freemem();

// console.log('Total Memory: ' + totalMemory);
// We can make this shorter by using ECMAScript 6 

console.log(`Total Memory: ${totalMemory}`);
console.log(`Free Memory: ${freeMemory}`);

// File System Module

const fs = require('fs');

// Sync task (for simplicity) 

const files = fs.readdirSync('./');
console.log(files); 

// Async task

fs.readdir('./', function(err, files) {
	if (err) console.log('Error', err); 
	else console.log('Result', files); 
});

// Events Module

const EventEmitter = require('events'); 

const logger = new Logger();

// Raise an listener 
logger.on('messageLogged', (arg) => {
	console.log('Listener called', arg);

});

logger.log('message');

// HTTP Module

const http = require('http');
const server = http.createServer((req, res) => {
	if (req.url === '/') {
		res.write('Hello World');
		res.end(); 																																				
	}

	if (req.url === '/api/courses') {
		res.write(JSON.stringify([1, 2, 3]));
		res.end();
	}
});

server.on('connection', (socket) => {	
	console.log('New connection...');
});																																										
server.listen(3000);

console.log('Listening on port 3000...');


