// This is the View

// Boris Pavlov #0841034 INFO 498 Software Architecture 
// Arch-Nork implemented via MVC Three Tier Architecture

'use strict';   
var theController = require('./index.js'); //connecting to the controller
var reader = require('readline'); 

// io interactions
module.exports.io = reader.createInterface({  
   input : process.stdin,
   output : process.stdout 
});    

// passes user input to Controller
module.exports.io.on('line', function process(userInput) { 
	theController.process(userInput);
});

