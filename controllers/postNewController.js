const asyncHandler = require("express-async-handler");
const {sharedData} = require("../controllers/getIndexController");
const postNewController = asyncHandler(async (req, res) => {
  sharedData.messages = [
    { 
        text: req.body.newMessage, user: req.body.authorName, added: new Date().toLocaleString('en-GB', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          hour12: false
        }).replace(',', '')
       }, ...sharedData.messages
  ]
  res.redirect("/");
});

module.exports = {postNewController};