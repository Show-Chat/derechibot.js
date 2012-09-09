// (c) 2011 Richard Carter
// This code is licensed under the MIT license; see LICENSE.txt for details.

// This script handles the following functions:
//     Looks for "hello", "hi", "howdy", "hola" and says hello; intended to
//     join in on greeting someone when someone else greets them.
//     Same thing for "goodbye" and "bye"

var waiting = false;
function privmsg_throttled(replyTo, msg) {
    if(!waiting) {
        irc.privmsg(replyTo, msg);
        waiting = true;
        setTimeout(function(){ waiting = false; }, 3000);
    }
}

var HELLOS = ['hello', 'hi', 'howdy', 'hola'],
    BYES = ['goodbye', 'bye', 'cya', 'adios', 'ttyl'],
    i;

for(i in HELLOS) {
    listen(HELLOS[i], function(match, data, replyTo) {
        privmsg_throttled(replyTo, "Hello!");
    }, false, false);
}

for(i in BYES) {
    listen(BYES[i], function(match, data, replyTo) {
        privmsg_throttled(replyTo, "Goodbye!");
    }, false, false);
}
