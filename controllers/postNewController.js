const asyncHandler = require("express-async-handler");
const {sharedData} = require("../controllers/getIndexController");
const postNewController = asyncHandler(async (req, res) => {
  sharedData.messages.push({ 
    text: req.body.newMessage, user: req.body.authorName, added: new Date()
   });
  res.redirect("/");
});

module.exports = {postNewController};