const path = require('path');

function getMessages(req, res) {
    res.render('messages', {
        title: 'Messages to my friends',
        name: 'Elon Musk',
    });
    // res.sendfile(path.join(__dirname, '..', 'public', 'images', 'scribble.jpeg'))
    // res.send('<ul><li>Hello Einstein</li></ul>');
};

function postMessage(req, res) {
    console.log('Update Messages');
}

module.exports = {
    getMessages,
    postMessage,
};