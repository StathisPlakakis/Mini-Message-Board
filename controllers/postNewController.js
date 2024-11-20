const asyncHandler = require("express-async-handler");
const db = require('../db/queries');

const postNewController = asyncHandler(async (req, res) => {
  await db.postNew(req.body.authorName, req.body.newMessage, new Date().toLocaleString('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  }).replace(',', ''))
  res.redirect("/");
});

module.exports = {postNewController};