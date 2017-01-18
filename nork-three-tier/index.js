//This is the Controller

// Boris Pavlov #0841034 INFO 498 Software Architecture 
// Arch-Nork implemented via MVC Three Tier Architecture

'use strict';
var theView = require('./theView.js'); // connecting to the view
var world = require("../common/world.json");  // the world

// getting all room names to match json file indexing
var allRoomNames = [];
for (var i = 0; i < world.rooms.length; i++) {
    allRoomNames.push(world.rooms[i].id);
}

var inventory = [];    // Inventory
var roomNum = 0;       // Current room number
introPrinter(roomNum); // Printing Header text


// Intro message printer and exits for gameover conditions
function introPrinter(Num) {
    console.log('');
    
    // Because the .ids are not presentation worthy
    if (world.rooms[Num].id == "won") {
        console.log("YOU WIN");
    } 
    if (world.rooms[Num].id == "eaten_dark") {
        console.log("YOU HAVE BEEN EATEN BY A GRUE");
    }
    if (world.rooms[Num].id == "dark_cave") {
        console.log("YOU ARE IN A DARK CAVE");
    }
    if (world.rooms[Num].id == "lit_cave") {
        console.log("THE CAVE IS TEMPORARILY LIT");
    }
    if (world.rooms[Num].id == "treasure_room") {
        console.log("YOU ARE IN A ROOM FILLED WITH TREASURE");
    }
    if (world.rooms[Num].id == "entrance") {
        console.log("YOU ARE AT THE CAVE ENTRANCE");
    }
    console.log(world.rooms[Num].description); 
    console.log('');
    
    // Exits printer:
    var tempExits = world.rooms[Num].exits;
    var tempString = "";
    if (tempExits != null) {
        console.log('COMMANDS: GO, TAKE, USE, INVENTORY, REMIND');
        Object.getOwnPropertyNames(tempExits).forEach(function(val, idx, array) {
            tempString = tempString + val.toUpperCase() + ", ";
        });
        if (tempString.charAt(tempString.length - 2) == ",") {
             tempString = tempString.substr(0, tempString.length - 2);
        } 
        console.log('EXITS: ' + tempString);  
        console.log('');
    
    // No exits means it's a gameover state
    } else {
        
        // lose state
        if (world.rooms[Num].id == "eaten_dark") {
            console.log("")
            console.log("           T\'is a fate I wouldn\'t reenact");
            console.log("           This fate that lead me");
            console.log("           to a Grue disgetive tract");
            console.log("")
            process.exit();
            
        // win state
        } else if (world.rooms[Num].id == "won") {
            console.log("             YOU\'RE THE HERO WE DESERVE");    
            console.log("") 
            console.log("      _==/            i     i           \\==_         ");
            console.log("     /XX/             |\\___/|            \\XX\\        ");
            console.log("    /XXXX\\            |XXXXX|            /XXXX\\        ");
            console.log("   |XXXXXX\\_         _XXXXXXX_         _/XXXXXX|        ");
            console.log("  XXXXXXXXXXXxxxxxxxXXXXXXXXXXXxxxxxxxXXXXXXXXXX        ");
            console.log(" |XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX|        ");
            console.log(" XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX        ");
            console.log(" |XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX|        ");
            console.log("  XXXXXX/^^^^\\\"\\XXXXXXXXXXXXXXXXXXXXX/^^^^^\\XXXX        ");
            console.log("   |XXX|       \\XXX/^^\\XXXXX/^^\\XXX/       |XXX|        ");
            console.log("     \\XX\\       \\X/    \\XXX/    \\X/        /XX/        ");
            console.log("       \\\"\        \\\"     \\X/      \\\"        \\/       ");
            console.log("")   
            console.log("          BUT NOT THE ONE WE NEED RIGHT NOW");
            console.log("")
            process.exit();
            
        // Should be impossible to trigger
        } else {
            console.log("")
            console.log("You seem to have found a room with no exits and that doesn't end the game...")
            console.log("I thought it was impossible, but you found it");
            console.log("Well, I guess you can live in pergatory here forever then");
            console.log("Because I refuse to process.exit() you out");
            console.log("Congratulations I guess...");
            console.log("")
        }
    }  
}  // Model ends here

// Prompts user then manages game logic and outputs story progress dialogue
module.exports.process = function(userInput) {
    
    var input = userInput.toUpperCase();  
    console.log("");
        
    // Game interaction logic
    // GO COMMAND
    if (input.indexOf("GO") == 0) {      
        input = input.substr(2).trim();

        // GO NORTH OPTION
        if (input.indexOf("NORTH") == 0) {
            if (world.rooms[roomNum].exits.hasOwnProperty('north')) {
                roomNum = allRoomNames.indexOf(world.rooms[roomNum].exits.north.id);  
                introPrinter(roomNum);
            } else {
                console.log("There's nothing to the NORTH");
            }
            
        // GO EAST OPTION        
        } else if (input.indexOf("EAST") == 0) {
            if (world.rooms[roomNum].exits.hasOwnProperty('east')) {    
                roomNum = allRoomNames.indexOf(world.rooms[roomNum].exits.east.id);  
                introPrinter(roomNum);
            } else {
                console.log("There's nothing to the EAST");
            }
            
        // GO SOUTH OPTION      
        } else if (input.indexOf("SOUTH") == 0) {
            if (world.rooms[roomNum].exits.hasOwnProperty('south')) {
                roomNum = allRoomNames.indexOf(world.rooms[roomNum].exits.south.id);  
                introPrinter(roomNum);
            } else {
                console.log("There's nothing to the SOUTH");
            }
            
        // GO WEST OPTION      
        } else if (input.indexOf("WEST") == 0) {
            if (world.rooms[roomNum].exits.hasOwnProperty('west')) {
                roomNum = allRoomNames.indexOf(world.rooms[roomNum].exits.west.id);  
                introPrinter(roomNum);
            } else {
                console.log("There's nothing to the WEST");
            }
            
        // GO ELSEWHERE OPTION   
        } else {
            if (input == "") {
                console.log("please enter something after GO");                                    
            } else {
                console.log("That isn\'t an available direction");
            }         
            
            // build and restate available exits
            var tempExits = world.rooms[roomNum].exits;
            var tempString = "";
            if (tempExits != null) {
                Object.getOwnPropertyNames(tempExits).forEach(function(val, idx, array) {
                    tempString = tempString + val.toUpperCase() + ", ";
                });
                if (tempString.charAt(tempString.length - 2) == ",") {
                    tempString = tempString.substr(0, tempString.length - 2);
                } 
                console.log('Remember, EXITS: ' + tempString);  
                
            // just in case    
            } else { 
                console.log("You're trapped in a room with no exits....");
                console.log("How did you get in?");
                console.log("oh nevermind, i'll just reset you");
                process.exit(0);
            }
        }

    // TAKE COMMAND
    } else if (input.indexOf("TAKE") == 0) {   
        input = input.substr(4).trim().toLowerCase();
        
        // If room has items at all
        if (world.rooms[roomNum].items != undefined) {
            
            // If input item is in room
            if (world.rooms[roomNum].items.indexOf(input) != -1) {
                            
                // If input is not already in inventory
                if (inventory.indexOf(input) == -1) {
                    inventory.push(input);
                    console.log(input + " is now in your inventory");
                } else {
                    console.log("You already have " + input + " in your inventory");
                }
                
            } else {
                if (input == "") {
                    console.log("please enter something after TAKE");                                    
                } else {
                    console.log("There\'s no " + input + " to take");
                }
            }
        } else {
            if (input == "") {
                console.log("please enter something after TAKE");                                    
            } else {
                console.log("There\'s no " + input + " to take");
            }
        }
        
    // USE COMMAND    
    } else if (input.indexOf("USE") == 0) {
        input = input.substr(3).trim().toLowerCase();

        // Is input available in your inventory?      
        if (inventory.indexOf(input) != -1) {    
                
            // Is input uses available and useful in this room? 
            if (world.rooms[roomNum].uses != undefined && world.rooms[roomNum].uses[0].item == input) {
                        
                //Removed from inventory
                inventory.splice(inventory.indexOf(input), 1);
                console.log("You used " + input);
                console.log(input + " is no longer in your inventory");
                console.log(world.rooms[roomNum].uses[0].description);
                
                //Current room number updated if relevant
                roomNum = allRoomNames.indexOf(world.rooms[roomNum].uses[0].effect.goto);                        
                introPrinter(roomNum);                                                    
                                                                                                                            
            } else {
                console.log("You shouldn't waste that here, try another area");
            }    
                        
        } else {      
            if (input == "") {
                console.log("please enter something after USE");   
                                
            } else if (input == "nothing") {  //for the smart alecs
                console.log("One cannot use nothing, usage of a thing implies existance of said thing");   
                
            } else {
                console.log(input + " is not in your inventory");
            }
        }             
        
    // INVENTORY COMMAND    
    } else if (input.indexOf("INVENTORY") == 0) {
        
        //Inventory Printer
        var contents = "Your Inventory contains: ";
        inventory.forEach(function(val, idx, array) {
            //builds inventory String
            contents = contents + val + ", "; 
        });
        if (contents == "Your Inventory contains: ") {
            console.log(contents + "Nothing");  // empty inventory
        } else {
            console.log(contents.substr(0, contents.length-2));
        }
        
    // REMIND COMMAND 
    } else if (input.indexOf("REMIND") == 0) {  
                    
        // reminds the user where they are
        introPrinter(roomNum);
                
    // ANY OTHER COMMAND    
    } else {
        console.log('Sorry that\'s not a legal command');
        console.log('COMMANDS ARE: GO, TAKE, USE, INVENTORY, REMIND');
    }
    console.log(""); 
    theView.io.prompt();  // restart IO prompt, so user can enter next command
}