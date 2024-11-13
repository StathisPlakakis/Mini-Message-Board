const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

function indexController(req, res) {
  res.render('index', {messages: messages});
}

module.exports = {indexController};