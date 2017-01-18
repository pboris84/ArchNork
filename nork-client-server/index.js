// This is the Client

'use strict';
var host = require('./theServer.js');   // Required for connection to server
const mod  = require('net');            // Server requirements
var clientSock = new mod.Socket();      // Socket connection to the client

// io interactions
var reader = require('readline');               
var interactions = reader.createInterface({
   input : process.stdin,
   output : process.stdout 
});

// io interactions prompting
interactions.on('line', (input) => {
   clientSock.write(input);
   interactions.prompt();   
});

// Server-client listener
clientSock.connect(8888, "localhost", function () {  
    interactions.prompt();
});
