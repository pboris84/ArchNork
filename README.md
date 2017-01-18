# Architected Nork

A Text based adventure game played through the command line, the game itself is a vehicle to demonstrate the client server architectural software design. Requires Node to play.

I added some interesting rewards for winning and losing, I also added a feature that told you where the exits were and what your command options are. I felt like it was too easy to get lost in the game unless you were reminded of what your options were
when you didnt do something right. I also added a REMIND command, because too many entries can scroll the original text away, and you may forget where you are. 

The only really hard part was setting up a server - client sockets and decoders, there were a lot of components that had to be in place that don't tell you when they dont work. So it became very frustrating setting it all up. I went through
the resources provided to me but I felt like it wasn't really solving the problems. It wasn't until I spoke with another team that figured it out. Also, ASCII art via console logs is not a good idea. Lots and lots of escape symbols.


