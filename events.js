const EventEmitter = require('events');
const celebrity = new EventEmitter();

// Subscribe to Celebrity for Observer 1
celebrity.on('Race win', () => {
    console.log("Congratulations!");
});

// Subscribe to Celebrity for Observer 2
celebrity.on('Race lost', () => {
    console.log("I could have done better than that");
});

// Exit handler 
process.on('exit', (code) => {
    console.log(`Process exit event with code ${code}`);
})

celebrity.emit('Race win');
celebrity.emit('Race lost');
celebrity.emit('Race win');