# Architected Nork

A Text based adventure game played through the command line, the game itself is a vehicle to demonstrate the client server architectural software design. Requires Node to play.

The client server architectural style was by far the hardest to implement, because it was very difficult to get everything to work correctly before you even begin building the game. I had no idea that I needed a string decoder until bryan pointed it out to me.
I did not understand why it wouldn't work because there is very little feedback on the terminal to see why your server isn't up and running, or why its not listening, or why the data being passed back and forth isn't in the right format. The MVC model was easier 
to build, but there were still a few problems that were hard to figure out, like which part was the model. It seemed like every file did a little bit of viewing, controlling, and modelling, so it was hard to specify which was which. I think updates would be harder
with a model view controller style, because once the server is set up, you dont need to worry about it. With model view controller you always have to ask is what i'm implementing part of the model view or controller? It becomes more difficult to know where to make
changes

I added some interesting rewards for winning and losing, I also added a feature that told you where the exits were and what your command options are. I felt like it was too easy to get lost in the game unless you were reminded of what your options were
when you didnt do something right. I also added a REMIND command, because too many entries can scroll the original text away, and you may forget where you are. 

The only really hard part was setting up a server - client sockets and decoders, there were a lot of components that had to be in place that don't tell you when they dont work. So it became very frustrating setting it all up. I went through
the resources provided to me but I felt like it wasn't really solving the problems. It wasn't until I spoke with another team that figured it out. Also, ASCII art via console logs is not a good idea. Lots and lots of escape symbols.


