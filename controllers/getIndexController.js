const asyncHandler = require("express-async-handler");
const db = require('../db/queries');

const getIndexController = asyncHandler(async (req, res) => {
  const messages = await db.getIndex();
  res.render('index', { title: "Mini Messageboard", messages: messages });
});

module.exports = {getIndexController};