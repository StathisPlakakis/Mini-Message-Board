const asyncHandler = require("express-async-handler");

const sharedData = {
  messages: [
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
  ]
}

const getIndexController = asyncHandler(async (req, res) => {
  res.render('index', { title: "Mini Messageboard", messages: sharedData.messages });
});

module.exports = {getIndexController, sharedData};